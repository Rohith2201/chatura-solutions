'use client'

import { useEffect, useState } from 'react'

interface TimeRemaining {
  days: number
  hours: number
  minutes: number
  seconds: number
  isExpired: boolean
}

interface CountdownTimerProps {
  startDate: string // ISO format: "2026-05-31T10:00:00"
  endDate: string // ISO format: "2026-06-30T23:59:00"
}

export function CountdownTimer({ startDate, endDate }: CountdownTimerProps) {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining | null>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const calculateTimeRemaining = () => {
      const now = new Date().getTime()
      const endTime = new Date(endDate).getTime()

      if (now > endTime) {
        setTimeRemaining({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true,
        })
        return
      }

      const difference = endTime - now
      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((difference / 1000 / 60) % 60)
      const seconds = Math.floor((difference / 1000) % 60)

      setTimeRemaining({
        days,
        hours,
        minutes,
        seconds,
        isExpired: false,
      })
    }

    // Calculate immediately
    calculateTimeRemaining()

    // Update every second
    const interval = setInterval(calculateTimeRemaining, 1000)

    return () => clearInterval(interval)
  }, [endDate])

  if (!isMounted || !timeRemaining) {
    return null
  }

  if (timeRemaining.isExpired) {
    return (
      <div className="text-center">
        <p className="text-sm md:text-base font-semibold text-gray-700">Offer has ended</p>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center gap-4 md:gap-6 flex-wrap">
      <div className="text-center">
        <div className="text-2xl md:text-3xl font-bold text-gray-900">
          {String(timeRemaining.days).padStart(2, '0')}
        </div>
        <div className="text-xs md:text-sm text-gray-600 font-medium">Days</div>
      </div>
      <div className="text-gray-400 text-2xl md:text-3xl">:</div>
      <div className="text-center">
        <div className="text-2xl md:text-3xl font-bold text-gray-900">
          {String(timeRemaining.hours).padStart(2, '0')}
        </div>
        <div className="text-xs md:text-sm text-gray-600 font-medium">Hours</div>
      </div>
      <div className="text-gray-400 text-2xl md:text-3xl">:</div>
      <div className="text-center">
        <div className="text-2xl md:text-3xl font-bold text-gray-900">
          {String(timeRemaining.minutes).padStart(2, '0')}
        </div>
        <div className="text-xs md:text-sm text-gray-600 font-medium">Minutes</div>
      </div>
      <div className="text-gray-400 text-2xl md:text-3xl">:</div>
      <div className="text-center">
        <div className="text-2xl md:text-3xl font-bold text-gray-900">
          {String(timeRemaining.seconds).padStart(2, '0')}
        </div>
        <div className="text-xs md:text-sm text-gray-600 font-medium">Seconds</div>
      </div>
    </div>
  )
}
