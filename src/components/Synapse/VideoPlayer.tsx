import { useEffect, useRef, memo } from "react";
import Hls from "hls.js";

interface VideoPlayerProps {
  src: string;
  className?: string;
}

export const VideoPlayer = memo(({ src, className }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;

    if (Hls.isSupported()) {
      hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(e => console.error("Auto-play blocked:", e));
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // For Safari which supports HLS natively
      video.src = src;
      video.onloadedmetadata = () => {
        video.play().catch(e => console.error("Auto-play blocked:", e));
      };
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      className={className}
      muted
      loop
      playsInline
      style={{ filter: "brightness(1.1) contrast(1.05)" }}
    />
  );
});

VideoPlayer.displayName = "VideoPlayer";
