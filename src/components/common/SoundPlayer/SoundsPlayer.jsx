import React, { useRef, useEffect, forwardRef, useImperativeHandle } from "react";

const SoundPlayer = forwardRef(({ soundFile, loop = false, onError }, ref) => {
  const audioRef = useRef(null);

  useImperativeHandle(ref, () => ({
    play: () => {
      const audio = audioRef.current;
      if (audio) {
        audio.loop = loop;
        audio.play().catch((error) => {
          console.error("Error al intentar reproducir el audio:", error);
          if (onError) {
            onError();
          }
        });
      }
    },
    pause: () => {
      const audio = audioRef.current;
      if (audio) {
        audio.pause();
      }
    },
  }));

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.preload = "auto";
      audio.src = soundFile;
    }

    return () => {
      const audio = audioRef.current;
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, [soundFile]);

  return <audio ref={audioRef} />;
});

export default SoundPlayer;
