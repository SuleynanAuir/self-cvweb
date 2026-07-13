"use client";

import { useEffect, useRef, useState } from "react";

const fadeSeconds = 1.35;
const fallbackDurationSeconds = 6.57;
const sources = [
  { src: "/assets/web_bg.mp4", type: "video/mp4" },
  { src: "/assets/web_bg.mov", type: "video/quicktime" },
];

export function BackgroundVideo() {
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const activeRef = useRef(0);
  const transitionRef = useRef(false);
  const rafRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [fadingIndex, setFadingIndex] = useState<number | null>(null);

  useEffect(() => {
    let mounted = true;

    const getVideo = (index: number) => videoRefs.current[index];

    const playVideo = (video: HTMLVideoElement | null) => {
      if (!video) return;

      video.muted = true;
      video.playsInline = true;
      void video.play().catch(() => {
        // Muted autoplay is expected to work; if a browser defers it, the poster remains visible.
      });
    };

    const finishTransition = (nextIndex: number, previousIndex: number) => {
      if (!mounted) return;

      activeRef.current = nextIndex;
      setActiveIndex(nextIndex);
      setFadingIndex(null);
      transitionRef.current = false;

      const previousVideo = getVideo(previousIndex);
      if (previousVideo) {
        previousVideo.pause();
        previousVideo.currentTime = 0;
      }
    };

    const beginTransition = () => {
      if (transitionRef.current) return;

      const previousIndex = activeRef.current;
      const nextIndex = previousIndex === 0 ? 1 : 0;
      const nextVideo = getVideo(nextIndex);

      if (!nextVideo) return;

      transitionRef.current = true;
      nextVideo.pause();
      nextVideo.currentTime = 0;
      playVideo(nextVideo);
      setFadingIndex(nextIndex);

      timeoutRef.current = window.setTimeout(() => {
        finishTransition(nextIndex, previousIndex);
      }, fadeSeconds * 1000);
    };

    const tick = () => {
      const activeVideo = getVideo(activeRef.current);

      if (activeVideo) {
        const duration =
          Number.isFinite(activeVideo.duration) && activeVideo.duration > 0 ? activeVideo.duration : fallbackDurationSeconds;
        const shouldTransition = activeVideo.ended || activeVideo.currentTime >= duration - fadeSeconds;

        if (shouldTransition) {
          beginTransition();
        }
      }

      rafRef.current = window.requestAnimationFrame(tick);
    };

    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      video.loop = false;
      video.currentTime = 0;
      if (index !== activeRef.current) {
        video.pause();
      }
    });

    playVideo(getVideo(activeRef.current));
    rafRef.current = window.requestAnimationFrame(tick);

    return () => {
      mounted = false;

      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
      }

      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className={["site-video-stack", fadingIndex !== null ? "is-transitioning" : ""].join(" ")}>
      {[0, 1].map((index) => (
        <video
          key={index}
          ref={(element) => {
            videoRefs.current[index] = element;
          }}
          className={[
            "site-video",
            "site-video-layer",
            index === activeIndex ? "is-active" : "",
            index === fadingIndex ? "is-fading-in" : "",
          ].join(" ")}
          autoPlay={index === 0}
          muted
          playsInline
          poster="/assets/web_bg_poster.jpg"
          preload="auto"
        >
          {sources.map((source) => (
            <source key={source.src} src={source.src} type={source.type} />
          ))}
        </video>
      ))}
      <div className="site-video-loop-veil" />
    </div>
  );
}
