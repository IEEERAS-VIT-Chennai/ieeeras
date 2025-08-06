// InfiniteMarquee.jsx
import { cn } from "../lib/utils"
import { useEffect, useRef, useState } from "react"

export function InfiniteMarquee({
    content,
    className,
    speed = 20,
    direction = "left",
    pauseOnHover = false,
    textClassName,
    href,
    target = "_blank",
    onClick
}) {
    const containerRef = useRef(null)
    const contentRef = useRef(null)
    const [copies, setCopies] = useState(2)

    useEffect(() => {
        const calculateCopies = () => {
            if (containerRef.current && contentRef.current) {
                const containerWidth = containerRef.current.offsetWidth
                const contentWidth = contentRef.current.offsetWidth

                // Calculate how many copies we need to fill the screen + one extra for smooth transition
                const neededCopies = Math.ceil(containerWidth / contentWidth) + 2
                setCopies(Math.max(neededCopies, 2))
            }
        }

        calculateCopies()
        window.addEventListener('resize', calculateCopies)

        return () => window.removeEventListener('resize', calculateCopies)
    }, [content])

    const keyframes = `
    @keyframes marquee-left {
      0% { transform: translateX(0%); }
      100% { transform: translateX(${-100 / copies}%); }
    }
    @keyframes marquee-right {
      0% { transform: translateX(${-100 / copies}%); }
      100% { transform: translateX(0%); }
    }
  `

    const handleClick = () => {
        if (onClick) {
            onClick()
        } else if (href) {
            window.open(href, target)
        }
    }

    const isClickable = href || onClick

    return (
        <>
            <style>{keyframes}</style>
            <div
                ref={containerRef}
                className={cn(
                    "relative overflow-hidden whitespace-nowrap",
                    isClickable && "cursor-pointer hover:opacity-80 transition-opacity duration-200",
                    className
                )}
                onClick={isClickable ? handleClick : undefined}
            >
                <div
                    className={cn(
                        "flex items-center",
                        pauseOnHover && "hover:[animation-play-state:paused]"
                    )}
                    style={{
                        animation: `marquee-${direction} ${speed}s linear infinite`,
                        width: 'max-content'
                    }}
                >
                    {/* Hidden reference copy to measure content width */}
                    <span
                        ref={contentRef}
                        className={cn("inline-block px-4 whitespace-nowrap opacity-0 absolute", textClassName)}
                        aria-hidden="true"
                    >
                        {content}
                    </span>

                    {/* Visible copies for animation */}
                    {Array.from({ length: copies }, (_, index) => (
                        <span
                            key={index}
                            className={cn("inline-block px-4 whitespace-nowrap", textClassName)}
                        >
                            {content}
                        </span>
                    ))}
                </div>
            </div>
        </>
    )
}