import React, { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        setError('');
        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok) throw new Error(`Failed to fetch url: ${url}`);

        setData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [url]);

  return {
    data,
    error,
    isLoading
  };
};

export default useFetch;
