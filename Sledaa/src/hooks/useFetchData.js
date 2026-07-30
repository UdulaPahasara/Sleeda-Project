import { useState, useEffect } from 'react';

const useFetchData = (url, reverse = true, intervalMs = 5000) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const result = await response.json();
          // Ensure we are working with an array before attempting to reverse
          if (Array.isArray(result)) {
             // Create a new array to avoid mutating the original, then reverse it if requested
             setData(reverse ? [...result].reverse() : result);
          } else {
             setData(result);
          }
        } else {
          setError(`Error: ${response.status} ${response.statusText}`);
        }
      } catch (err) {
        console.error(`Failed to fetch from ${url}`, err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    
    let interval;
    if (intervalMs > 0) {
       interval = setInterval(fetchData, intervalMs);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [url, reverse, intervalMs]);

  return data; // For simplicity in migrating, we just return the data array
};

export default useFetchData;
