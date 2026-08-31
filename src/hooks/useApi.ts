import { useState, useEffect } from 'react';

const API_BASE = import.meta.env.VITE_API_URL || '';

export function useApi<T>(endpoint: string, fallback: T): { data: T; loading: boolean } {
  const [data, setData] = useState<T>(fallback);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!API_BASE) {
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const res = await fetch(`${API_BASE}${endpoint}`);
        if (!res.ok) throw new Error('API error');
        const json = await res.json();
        setData(json);
      } catch {
        // Silently fall back to hardcoded data
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint, fallback]);

  return { data, loading };
}
