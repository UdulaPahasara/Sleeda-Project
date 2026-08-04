import React, { useState, useRef, useEffect } from 'react';
import { Box, Paper, Typography, TextField, IconButton, Fab, CircularProgress, Collapse, useMediaQuery, useTheme } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import PersonIcon from '@mui/icons-material/Person';



const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { text: "Hello! I am the SLEDAA virtual assistant. How can I help you today?", isBot: true }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Scroll to bottom when messages update
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleSend = async (e) => {
    e?.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { text: userMessage, isBot: false }]);
    setIsLoading(true);

    try {
      // Send chat history and current message to our Spring Boot backend
      const response = await fetch('http://localhost:8081/api/chatbot/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage,
          history: messages.slice(1).map(msg => ({
            role: msg.isBot ? 'model' : 'user',
            text: msg.text
          }))
        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setMessages(prev => [...prev, { text: data.reply, isBot: true }]);
    } catch (error) {
      console.error("Gemini Error:", error);
      setMessages(prev => [...prev, { text: "I'm sorry, I'm having trouble connecting right now. Please try again later.", isBot: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  const activeColor = 'rgba(0, 28, 166, 1)';

  return (
    <>
      {/* Chat Window */}
      <Box
        sx={{
          position: 'fixed',
          bottom: { xs: 0, sm: '20px',lg: '20px' },
          right: { xs: 0, sm: '20px',lg: '5px' },
          width: { xs: '100%', sm: '380px' },
          height: { xs: '100dvh', sm: '600px' },
          maxHeight: { xs: '100dvh', sm: 'calc(100vh - 120px)' },
          zIndex: 9999,
          display: isOpen ? 'flex' : 'none',
          flexDirection: 'column',
          boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
          borderRadius: { xs: 0, sm: '20px' },
          overflow: 'hidden',
          backgroundColor: '#fff',
          transition: 'all 0.3s ease',
        }}
      >
        {/* Header */}
        <Box sx={{ 
          backgroundColor: activeColor, 
          color: '#fff', 
          p: 2, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between' 
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <SmartToyIcon />
            <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '16px' }}>
              SLEDAA Assistant
            </Typography>
          </Box>
          <IconButton size="small" onClick={handleToggle} sx={{ color: '#fff' }}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Messages Area */}
        <Box sx={{ 
          flex: 1, 
          overflowY: 'auto', 
          p: 2, 
          display: 'flex', 
          flexDirection: 'column', 
          gap: 2,
          backgroundColor: '#f5f7fa' 
        }}>
          {messages.map((msg, index) => (
            <Box 
              key={index} 
              sx={{ 
                display: 'flex', 
                flexDirection: msg.isBot ? 'row' : 'row-reverse',
                alignItems: 'flex-start',
                gap: 1
              }}
            >
              <Box sx={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                backgroundColor: msg.isBot ? activeColor : '#e0e0e0',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: msg.isBot ? '#fff' : '#666',
                flexShrink: 0
              }}>
                {msg.isBot ? <SmartToyIcon sx={{ fontSize: '16px' }} /> : <PersonIcon sx={{ fontSize: '16px' }} />}
              </Box>
              <Paper sx={{ 
                p: 1.5, 
                backgroundColor: msg.isBot ? '#fff' : activeColor,
                color: msg.isBot ? '#333' : '#fff',
                borderRadius: msg.isBot ? '0 15px 15px 15px' : '15px 0 15px 15px',
                maxWidth: '80%',
                boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '14px',
                lineHeight: '1.5'
              }}>
                {/* Render text with basic line break support */}
                {msg.text.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i !== msg.text.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </Paper>
            </Box>
          ))}
          
          {isLoading && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
               <Box sx={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: activeColor, display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff' }}>
                <SmartToyIcon sx={{ fontSize: '16px' }} />
              </Box>
              <Paper sx={{ p: 1.5, borderRadius: '0 15px 15px 15px', display: 'flex', alignItems: 'center', gap: 1 }}>
                <CircularProgress size={16} sx={{ color: activeColor }} />
                <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', color: '#666' }}>Thinking...</Typography>
              </Paper>
            </Box>
          )}
          <div ref={messagesEndRef} />
        </Box>

        {/* Input Area */}
        <Box 
          component="form" 
          onSubmit={handleSend}
          sx={{ 
            p: 2, 
            backgroundColor: '#fff',
            borderTop: '1px solid #eee',
            display: 'flex',
            gap: 1,
            alignItems: 'center'
          }}
        >
          <TextField
            fullWidth
            size="small"
            placeholder="Ask me anything..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
            variant="outlined"
            slotProps={{
              input: {
                sx: { 
                  fontFamily: 'Poppins', 
                  fontSize: '14px',
                  borderRadius: '20px',
                  backgroundColor: '#f5f7fa',
                  '& fieldset': { border: 'none' }
                }
              }
            }}
          />
          <IconButton 
            type="submit" 
            disabled={!input.trim() || isLoading}
            sx={{ 
              backgroundColor: input.trim() && !isLoading ? activeColor : '#e0e0e0',
              color: '#fff',
              '&:hover': {
                backgroundColor: input.trim() && !isLoading ? 'rgba(0, 20, 120, 1)' : '#e0e0e0',
              }
            }}
          >
            <SendIcon sx={{ fontSize: '18px' }} />
          </IconButton>
        </Box>
      </Box>

      {/* Floating Action Button */}
      {!isOpen && (
        <Fab 
          color="primary" 
          aria-label="chat" 
          onClick={handleToggle}
          sx={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            zIndex: 9998,
            backgroundColor: activeColor,
            '&:hover': {
              backgroundColor: 'rgba(0, 20, 120, 1)',
            }
          }}
        >
          <ChatIcon />
        </Fab>
      )}
    </>
  );
};

export default Chatbot;
