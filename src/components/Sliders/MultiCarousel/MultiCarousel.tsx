/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { useEffect, useRef, useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

// Custom Left Arrow
const CustomLeftArrow: React.FC<{
  onClick: any
  id: string
  disabled: boolean
}> = ({ onClick, id, disabled }) => {
  return (
    <button
      id={id}
      onClick={onClick}
      className={`absolute hidden left-0 z-10 p-2 transform -translate-y-1/2 bg-gray-800 rounded-full top-1/2 hover:bg-gray-600 ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      disabled={disabled}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="white"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  )
}

// Custom Right Arrow
const CustomRightArrow: React.FC<{
  onClick: any
  id: string
  disabled: boolean
}> = ({ onClick, id, disabled }) => {
  return (
    <button
      id={id}
      onClick={onClick}
      className={`absolute hidden right-0 z-10 p-2 transform -translate-y-1/2 bg-gray-800 rounded-full top-1/2 hover:bg-gray-600 ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      disabled={disabled}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="white"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  )
}

interface MultiCarouselProps {
  children: React.ReactNode
  leftArrowId: string
  rightArrowId: string
  animationSecond?: number
  responsiveMobileDeviceTitle?: string
  responsiveMobileDevicePathLink?: any
  responsive?: any
  carouselInstance?: any
}

const MultiCarousel: React.FC<MultiCarouselProps> = ({
  children,
  leftArrowId,
  rightArrowId,
  animationSecond = 2000,
  responsive,
  carouselInstance,
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isStartOfCarousel, setIsStartOfCarousel] = useState(true)
  const [isEndOfCarousel, setIsEndOfCarousel] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  const handleBeforeChange = (
    nextSlide: number,
    { slidesToShow, totalItems }: any
  ) => {
    setIsStartOfCarousel(nextSlide === 0)
    setIsEndOfCarousel(nextSlide >= totalItems - slidesToShow)
  }
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (carouselRef.current) observer.observe(carouselRef.current)

    return () => {
      if (carouselRef.current) observer.unobserve(carouselRef.current)
    }
  }, [isVisible])

  return (
    <div className="relative" ref={carouselRef}>
      <Carousel
        ref={carouselInstance}
        responsive={responsive}
        customLeftArrow={
          <CustomLeftArrow
            id={leftArrowId}
            onClick={() => {}}
            disabled={isStartOfCarousel}
          />
        }
        customRightArrow={
          <CustomRightArrow
            id={rightArrowId}
            onClick={() => {}}
            disabled={isEndOfCarousel}
          />
        }
        autoPlay={false}
        autoPlaySpeed={animationSecond}
        showDots={false}
        keyBoardControl={true}
        beforeChange={handleBeforeChange}
      >
        {children}
      </Carousel>
    </div>
  )
}

export default MultiCarousel
