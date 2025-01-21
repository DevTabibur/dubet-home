import { twMerge } from 'tailwind-merge'
import { clsx } from 'clsx'

// Define the type of inputs which can be an array of class names, strings, or undefined
const cn = (...inputs: (string | undefined | null | false)[]): string => {
  return twMerge(clsx(...inputs))
}

export default cn
