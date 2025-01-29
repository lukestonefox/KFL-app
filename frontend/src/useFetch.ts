import { useState, useEffect } from 'react';

const useFetch = (url: string) => {
    const [data, setData] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const result = await response.text();
                setData(result);
            } catch (error: any) {
                setError(error);
            } finally {
                setLoading(false);
            };
    }
    fetchData();
    }, [url]);

    return { data, loading, error };
}

export default useFetch;