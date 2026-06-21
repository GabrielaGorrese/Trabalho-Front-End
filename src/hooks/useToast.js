import { useState, useCallback } from 'react';

export function useToast() {
  const [toast, setToast] = useState(null);

  const showToast = useCallback((message, duration = 4000) => {
    setToast(message);
    window.setTimeout(() => {
      setToast(null);
    }, duration);
  }, []);

  return {
    toast,
    showToast,
  };
}
