import React, { useEffect, useState, ReactNode } from 'react'
import './Toast.css'
import { ToastType } from '@/types/taost'
import { ToastProps } from '@/interface/toast'

interface ToastOptions {
  heading: string
  paragraph: string
  icon: ReactNode
}

const toastOptions: Record<ToastType, ToastOptions> = {
  regular: {
    heading: 'This is a Regular notification',
    paragraph:
      'This toast message notifies you of something. Whatever that may be.',
    icon: null,
  },
  success: {
    heading: 'This is a Success notification',
    paragraph:
      'This toast message notifies you of all your great successes. You rock!',
    icon: (
      <div className="toast__icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="m9 20.42l-6.21-6.21l2.83-2.83L9 14.77l9.88-9.89l2.83 2.83z"
          />
        </svg>
      </div>
    ),
  },
  error: {
    heading: 'This is an Error notification',
    paragraph:
      'This toast message notifies you of an Error. Don’t worry, it’s probably not your fault.',
    icon: (
      <div className="toast__icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <path
            fill="currentColor"
            d="M15.1 3.1L12.9.9L8 5.9L3.1.9L.9 3.1l5 4.9l-5 4.9l2.2 2.2l4.9-5l4.9 5l2.2-2.2l-5-4.9z"
          />
        </svg>
      </div>
    ),
  },
  warning: {
    heading: 'This is a Warning notification',
    paragraph:
      'This toast message notifies you of a Warning. Who knows what might have happened.',
    icon: (
      <div className="toast__icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="currentColor" d="M11 14V5h2v9zm0 5v-2h2v2z" />
        </svg>
      </div>
    ),
  },
}

const Toast: React.FC<ToastProps> = ({
  type = 'regular',
  heading = '',
  paragraph = '',
  buttons = false,
  button1 = 'OK',
  button2 = 'Cancel',
  close = true,
  timer = 4000, // default 4 seconds
  onClose,
}) => {
  const [isVisible, setIsVisible] = useState(true)
  const [progress, setProgress] = useState(100)

  useEffect(() => {
    const timerId = setTimeout(() => setIsVisible(false), timer)

    const intervalId = setInterval(() => {
      setProgress((prevProgress) =>
        Math.max(prevProgress - 100 / (timer / 100), 0)
      )
    }, 100)

    return () => {
      clearTimeout(timerId)
      clearInterval(intervalId)
    }
  }, [timer])

  const handleClose = () => {
    setIsVisible(false)
    if (onClose) onClose()
  }

  if (!isVisible) return null

  return (
    <div className={`toast__message toast__message--${type}`}>
      {toastOptions[type].icon}
      <div className="toast__text">
        <h3 className="toast__heading">
          {heading || toastOptions[type].heading}
        </h3>
        <p>{paragraph || toastOptions[type].paragraph}</p>
        {buttons && (
          <div className="toast__buttons">
            <button>{button1}</button>
            <button>{button2}</button>
          </div>
        )}
      </div>
      {close && (
        <span className="toast__close" onClick={handleClose}>
          &times;
        </span>
      )}
      <div
        className="toast__bottom-bar"
        style={{ width: `${progress}%` }} // Update width dynamically based on progress
      ></div>{' '}
    </div>
  )
}

interface ToastContainerProps {
  toasts: ToastProps[]
  defaultPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
}

export const ToastContainer: React.FC<ToastContainerProps> = ({
  toasts,
  defaultPosition = 'bottom-right',
}) => (
  <>
    {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((pos) => (
      <div
        key={pos}
        className={`toast toast--${pos}`}
        style={{
          display: toasts.some(
            (toast) =>
              toast.position === pos ||
              (!toast.position && pos === defaultPosition)
          )
            ? 'block'
            : 'none',
        }}
      >
        {toasts
          .filter(
            (toast) =>
              toast.position === pos ||
              (!toast.position && pos === defaultPosition)
          )
          .map((toast, index) => (
            <Toast key={index} {...toast} />
          ))}
      </div>
    ))}
  </>
)

export const toast = {
  success: (props: Omit<ToastProps, 'type'>): ToastProps => ({
    type: 'success',
    ...props,
  }),
  error: (props: Omit<ToastProps, 'type'>): ToastProps => ({
    type: 'error',
    ...props,
  }),
  warning: (props: Omit<ToastProps, 'type'>): ToastProps => ({
    type: 'warning',
    ...props,
  }),
  regular: (props: Omit<ToastProps, 'type'>): ToastProps => ({
    type: 'regular',
    ...props,
  }),
}

export default ToastContainer
