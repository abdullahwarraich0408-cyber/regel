"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUpRight, Heart, Instagram, Play, X } from "lucide-react";
import type { InstagramPost } from "@/lib/instagram-api";

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

/** Carousel card — tuned for Instagram reel proportions */
export const INSTAGRAM_CAROUSEL = {
  maxWidth: 1280,
} as const;

function resolveMediaUrl(url: string) {
  if (url.startsWith("http")) {
    return url;
  }
  return `${API_URL}${url}`;
}

function getEmbedUrl(post: InstagramPost) {
  const path = post.isReel ? "reel" : "p";
  return `https://www.instagram.com/${path}/${post.shortcode}/embed/?autoplay=1`;
}

interface InstagramCarouselSlideProps {
  post: InstagramPost;
  isActive?: boolean;
  onAdvance?: () => void;
  onPlayingChange?: (playing: boolean) => void;
}

export function InstagramCarouselSlide({
  post,
  isActive = true,
  onAdvance,
  onPlayingChange,
}: InstagramCarouselSlideProps) {
  const [failed, setFailed] = useState(false);
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const advancedRef = useRef(false);
  const hasStartedRef = useRef(false);
  const src = resolveMediaUrl(post.imageUrl);
  const videoSrc = post.videoUrl ? resolveMediaUrl(post.videoUrl) : "";
  const isReel = post.isReel || post.isVideo;
  const canPlayNative = Boolean(videoSrc);

  const startPlaying = useCallback(() => {
    advancedRef.current = false;
    hasStartedRef.current = false;
    setPlaying(true);
    onPlayingChange?.(true);
  }, [onPlayingChange]);

  const stopPlaying = useCallback(() => {
    advancedRef.current = true;
    setPlaying(false);
    onPlayingChange?.(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [onPlayingChange]);

  const goToNext = useCallback(() => {
    if (advancedRef.current) return;
    advancedRef.current = true;
    stopPlaying();
    onAdvance?.();
  }, [onAdvance, stopPlaying]);

  useEffect(() => {
    if (!isActive) {
      stopPlaying();
    }
  }, [isActive, stopPlaying]);

  useEffect(() => {
    if (playing && canPlayNative && videoRef.current) {
      void videoRef.current.play().catch(() => {
        /* autoplay may require user gesture — controls remain available */
      });
    }
  }, [playing, canPlayNative]);

  const handleVideoEnded = () => {
    goToNext();
  };

  const handleVideoPlaying = () => {
    hasStartedRef.current = true;
  };

  const handleVideoPause = (event: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = event.currentTarget;
    if (!hasStartedRef.current || video.ended) return;
    goToNext();
  };

  return (
    <div className="mx-auto flex w-full max-w-[1280px] flex-col overflow-hidden rounded-2xl border border-border/50 bg-card shadow-elegant sm:rounded-[1.75rem] md:h-[480px] md:flex-row lg:h-[520px] xl:h-[560px]">
      <div className="relative mx-auto aspect-[9/16] w-full max-w-[240px] shrink-0 overflow-hidden bg-midnight sm:max-w-[280px] md:mx-0 md:aspect-auto md:h-full md:max-w-none md:w-[min(42%,340px)] lg:w-[min(38%,400px)] lg:min-w-[300px]">
        {playing ? (
          <>
            {canPlayNative ? (
              <video
                ref={videoRef}
                src={videoSrc}
                className="absolute inset-0 h-full w-full object-cover"
                playsInline
                controls
                autoPlay
                onPlaying={handleVideoPlaying}
                onEnded={handleVideoEnded}
                onPause={handleVideoPause}
              />
            ) : (
              <iframe
                src={getEmbedUrl(post)}
                title={post.caption}
                className="absolute inset-0 h-full w-full border-0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            )}
            <button
              type="button"
              onClick={stopPlaying}
              className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-black/60 text-cream backdrop-blur-sm transition hover:bg-black/80"
              aria-label="Close player"
            >
              <X className="h-4 w-4" />
            </button>
          </>
        ) : (
          <>
            {!failed ? (
              <img
                src={src}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                onError={() => setFailed(true)}
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-deep-plum/40 via-dusty-rose/30 to-soft-gold/20" />
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-black/10" />

            <button
              type="button"
              onClick={startPlaying}
              className="absolute inset-0 flex flex-col items-center justify-center gap-2 transition hover:bg-black/10 sm:gap-3"
              aria-label={isReel ? "Play reel" : "View post"}
            >
              <span className="grid h-14 w-14 place-items-center rounded-full border border-cream/30 bg-black/50 text-cream shadow-luxury backdrop-blur-md transition-transform hover:scale-110 sm:h-16 sm:w-16">
                <Play className="ml-0.5 h-6 w-6 fill-current sm:ml-1 sm:h-7 sm:w-7" />
              </span>
              <span className="rounded-full bg-black/45 px-3 py-1 text-[11px] font-semibold text-cream backdrop-blur-sm sm:px-4 sm:py-1.5 sm:text-xs">
                {isReel ? "Tap to play reel" : "Tap to view"}
              </span>
            </button>

            <div className="pointer-events-none absolute left-3 top-3 sm:left-4 sm:top-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-black/50 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider text-cream backdrop-blur-sm sm:px-3 sm:py-1.5 sm:text-[10px]">
                <Instagram className="h-3 w-3" />
                {isReel ? "Reel" : "Post"}
              </span>
            </div>
          </>
        )}
      </div>

      <div className="flex w-full flex-col gap-4 p-5 sm:gap-5 sm:p-6 md:h-full md:min-h-0 md:flex-1 md:justify-between md:overflow-hidden md:p-6 lg:p-10 xl:p-12">
        <div className="min-h-0 md:flex-1 md:overflow-y-auto md:pr-2">
          <span className="eyebrow text-[0.65rem] sm:text-[0.72rem]">From our Instagram</span>
          <p className="mt-3 line-clamp-5 font-display text-base leading-relaxed text-foreground/90 sm:mt-4 sm:line-clamp-6 sm:text-lg md:line-clamp-none md:text-lg md:leading-snug lg:text-[1.65rem]">
            &ldquo;{post.caption}&rdquo;
          </p>
        </div>

        <div className="shrink-0 space-y-3 border-t border-border/40 pt-4 sm:space-y-4 sm:pt-5">
          {post.likes > 0 ? (
            <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground sm:text-sm">
              <Heart className="h-3.5 w-3.5 fill-soft-gold text-soft-gold sm:h-4 sm:w-4" />
              {post.likes.toLocaleString()} likes
            </div>
          ) : null}

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <button
              type="button"
              onClick={startPlaying}
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-deep-plum to-dusty-rose px-6 text-sm font-semibold text-cream shadow-soft transition-all hover:brightness-110 sm:h-12 sm:w-auto sm:min-w-[200px] sm:px-8"
            >
              <Play className="h-4 w-4 fill-current" />
              {isReel ? "Play reel here" : "View post here"}
            </button>
            <a
              href={post.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 w-full items-center justify-center gap-1.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-dusty-rose sm:h-auto sm:w-auto sm:justify-start"
            >
              Open on Instagram
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
