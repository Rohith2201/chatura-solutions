"use client"

import { Banner } from "@/components/ui/banner"
import { Button } from "@/components/ui/button"
import { BookOpen, X } from "lucide-react"
import { useEffect, useState } from "react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
  isExpired: boolean
}

function BannerSystemDesign() {
  const [isVisible, setIsVisible] = useState(true)
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Set to 30 days from now for demo purposes
      const saleEndDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
      const now = new Date()
      const difference = saleEndDate.getTime() - now.getTime()

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true })
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        isExpired: false,
      })
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!isVisible || timeLeft.isExpired) return null

  return (
    <Banner variant="muted" className="dark text-foreground">
      <div className="flex w-full gap-2 md:items-center">
        <div className="flex grow gap-3 md:items-center">
          <div
            className="flex size-9 shrink-0 items-center justify-center rounded-full bg-blue-500/15 max-md:mt-0.5"
            aria-hidden="true"
          >
            <BookOpen className="opacity-80 text-blue-600" size={16} strokeWidth={2} />
          </div>
          <div className="flex grow flex-col justify-between gap-3 md:flex-row md:items-center">
            <div className="space-y-0.5">
              <p className="text-sm font-medium">System Design Masterclass Batch</p>
              <p className="text-sm text-muted-foreground">
                Registrations are started! Secure your seat now and master system design concepts.
              </p>
            </div>
            <div className="flex gap-3 max-md:flex-wrap">
              <div className="flex items-center divide-x divide-muted-foreground rounded-lg bg-blue-500/15 text-sm tabular-nums">
                {timeLeft.days > 0 && (
                  <span className="flex h-8 items-center justify-center p-2 text-blue-600 font-semibold">
                    {timeLeft.days}
                    <span className="text-muted-foreground text-xs ml-1">d</span>
                  </span>
                )}
                <span className="flex h-8 items-center justify-center p-2 text-blue-600 font-semibold">
                  {timeLeft.hours.toString().padStart(2, "0")}
                  <span className="text-muted-foreground text-xs ml-1">h</span>
                </span>
                <span className="flex h-8 items-center justify-center p-2 text-blue-600 font-semibold">
                  {timeLeft.minutes.toString().padStart(2, "0")}
                  <span className="text-muted-foreground text-xs ml-1">m</span>
                </span>
                <span className="flex h-8 items-center justify-center p-2 text-blue-600 font-semibold">
                  {timeLeft.seconds.toString().padStart(2, "0")}
                  <span className="text-muted-foreground text-xs ml-1">s</span>
                </span>
              </div>
              <Button size="sm" className="text-sm bg-blue-600 hover:bg-blue-700">Register now</Button>
            </div>
          </div>
        </div>
        <Button
          variant="ghost"
          className="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent"
          onClick={() => setIsVisible(false)}
          aria-label="Close banner"
        >
          <X
            size={16}
            strokeWidth={2}
            className="opacity-60 transition-opacity group-hover:opacity-100"
            aria-hidden="true"
          />
        </Button>
      </div>
    </Banner>
  )
}

export { BannerSystemDesign }
