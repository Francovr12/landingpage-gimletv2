"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

interface VideoWithLazyLoadingProps {
  videoSrc: string
  thumbnail: string
  alt?: string
}

export default function VideoWithLazyLoading({
  videoSrc,
  thumbnail,
  alt = "Video",
}: VideoWithLazyLoadingProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  const videoRef = useRef<HTMLVideoElement>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const retryCount = useRef(0)
  const maxRetries = 3

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true)
          if (observerRef.current) {
            observerRef.current.disconnect()
          }
        }
      },
      { threshold: 0.1 }
    )

    if (containerRef.current && observerRef.current) {
      observerRef.current.observe(containerRef.current)
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  const handleVideoLoad = () => {
    setIsLoaded(true)
    setHasError(false)
  }

  const handleVideoError = () => {
    if (retryCount.current < maxRetries) {
      retryCount.current += 1
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.load()
        }
      }, 1000)
    } else {
      setHasError(true)
    }
  }

  const openVideoInNewTab = (e: React.MouseEvent) => {
    e.stopPropagation()
    window.open(videoSrc, "_blank")
  }

  const handleContainerClick = () => {
    if (!isLoaded || hasError) return

    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
        setIsPlaying(true)
      } else {
        videoRef.current.pause()
        setIsPlaying(false)
      }
    }
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center overflow-hidden"
      onClick={handleContainerClick}
    >
      {(!isLoaded || !isInView || hasError) && (
        <div className="absolute inset-0 z-10">
          <Image
            src={thumbnail || "/placeholder.svg"}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="bg-purple-600/80 p-4 rounded-full hover:bg-purple-500 transition-colors cursor-pointer"
              onClick={openVideoInNewTab}
            >
              {hasError ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>
      )}

      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-20">
          <div className="text-center p-4">
            <p className="text-white text-sm mb-2">No se pudo cargar el video</p>
            <a
              href={videoSrc}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 text-xs underline hover:text-purple-300"
              onClick={(e) => e.stopPropagation()}
            >
              Ver video en otra pestaña
            </a>
          </div>
        </div>
      )}

      {isInView && !hasError && (
        <video
          ref={videoRef}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          controls
          preload="metadata"
          playsInline
          onLoadedData={handleVideoLoad}
          onError={handleVideoError}
        >
          <source src={videoSrc} type="video/mp4" />
          {alt}
        </video>
      )}

      {isInView && !isLoaded && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-5">
          <div className="w-10 h-10 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  )
}
