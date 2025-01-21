import { ToastType } from '@/types/taost'

export interface ToastProps {
  type?: ToastType
  heading?: string
  paragraph?: string
  buttons?: boolean
  button1?: string
  button2?: string
  close?: boolean
  timer?: number // Optional timer in milliseconds
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' // Optional position
  onClose?: () => void
}
