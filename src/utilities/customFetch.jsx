// hooks/useCustomFetch.js
import { useState, useCallback, useRef } from "react";

export const useCustomFetch = (initialUrl = null, initialOptions = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const controllerRef = useRef(null);

  const fetchAPIData = useCallback(
    async (url = initialUrl, options = initialOptions) => {
      if (!url) return;
      
      // Abort previous request if still running
      if (controllerRef.current) {
        controllerRef.current.abort();
      }

      const controller = new AbortController();
      controllerRef.current = controller;
      const signal = controller.signal;

      setLoading(true);
      setError(null);

      try {
        const defaultOptions = {
          method: "GET",
          headers: { accept: "application/json" },
          signal,
        };

        const res = await fetch(url, { ...defaultOptions, ...options });
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        const result = await res.json();
        setData(result);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    },
    [initialUrl, initialOptions]
  );

  return { data, loading, error, refetch: fetchAPIData };
};
