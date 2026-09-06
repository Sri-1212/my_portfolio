import { useState, useEffect } from 'react';

const rawApiUrl = import.meta.env.VITE_API_URL || '';
const API_BASE = rawApiUrl.replace(/\/+$/, '');

export function useApi<T>(endpoint: string, fallback: T): { data: T; loading: boolean } {
  const [data, setData] = useState<T>(fallback);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const normalizedEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
        const url = `${API_BASE}${normalizedEndpoint}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error('API error');
        const json = await res.json();
        if (isMounted) setData(json);
      } catch {
        if (isMounted) setData(fallback);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [endpoint, fallback]);

  return { data, loading };
}

