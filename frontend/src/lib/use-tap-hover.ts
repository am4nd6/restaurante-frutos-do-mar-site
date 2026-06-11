import { useCallback, useEffect, useRef, useState } from "react";

export function useTapHover(options?: { delay?: number; duration?: number }) {
  const { delay = 0, duration = 1500 } = options ?? {};
  const [hovered, setHovered] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();

  const clear = useCallback(() => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  useEffect(() => () => clear(), [clear]);

  const handleTap = useCallback(() => {
    if (!window.matchMedia("(pointer: coarse)").matches) return;
    clear();
    if (delay > 0) {
      timer.current = setTimeout(() => {
        setHovered(true);
        clear();
        timer.current = setTimeout(() => setHovered(false), duration);
      }, delay);
    } else {
      setHovered(true);
      timer.current = setTimeout(() => setHovered(false), duration);
    }
  }, [clear, delay, duration]);

  return { hovered, handleTap };
}
