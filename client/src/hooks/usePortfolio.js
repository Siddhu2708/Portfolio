import { useEffect, useState } from 'react';
import { api } from '../api/client';
import { PORTFOLIO_FALLBACK, isValidBundle } from '../data/portfolioFallback';

const HAS_API = Boolean(import.meta.env.VITE_API_URL);

export function usePortfolio() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      // Vercel / static hosting: no backend unless VITE_API_URL is set
      if (!HAS_API) {
        if (!cancelled) {
          setData(PORTFOLIO_FALLBACK);
          setLoading(false);
        }
        return;
      }

      try {
        const bundle = await api.getBundle();
        if (!cancelled) {
          setData(isValidBundle(bundle) ? bundle : PORTFOLIO_FALLBACK);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message);
          setData(PORTFOLIO_FALLBACK);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return { data: data || PORTFOLIO_FALLBACK, loading, error };
}
