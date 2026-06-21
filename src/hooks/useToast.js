import { useState } from 'react';

export function useToast() {
  const [toast, setToast] = useState(null);

  const showToast = (message, duration = 4000) => {
    setToast(message);
    setTimeout(() => {
      setToast(null);
    }, duration);
  };

  return {
    toast,
    showToast,
  };
}
