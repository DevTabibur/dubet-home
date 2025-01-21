import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react'
import en from '@/locales/lang/english.json'
import es from '@/locales/lang/spanish.json'
import zh from '@/locales/lang/china.json'
import bn from '@/locales/lang/bangla.json'
import ru from '@/locales/lang/russian.json'
import hi from '@/locales/lang/hindi.json'
import { getFromLocalStorage, setToLocalStorage } from '@/utils/local-storage'

// Define a type for the translations
type TranslationsType = { [key: string]: string | TranslationsType }

// Define the types for the context
interface LanguageContextType {
  t: (key: string) => string
  language: string
  setLanguage: (lang: string) => void
}

// Create the context with default values
const LanguageContext = createContext<LanguageContextType>({
  t: (key: string) => key,
  language: 'en',
  setLanguage: () => {},
})

// All translations stored by language codes
const translations: { [key: string]: TranslationsType } = {
  en: en as TranslationsType,
  es: es as TranslationsType,
  zh: zh as TranslationsType,
  bn: bn as TranslationsType,
  ru: ru as TranslationsType,
  hi: hi as TranslationsType,
}

// Helper function to get a nested translation using dot notation
const getNestedTranslation = (obj: TranslationsType, key: string): string => {
  const parts = key.split('.')
  let result: string | TranslationsType = obj

  for (const part of parts) {
    if (result && typeof result === 'object' && part in result) {
      result = result[part] as TranslationsType
    } else {
      return key // Return the key itself if the path is not found
    }
  }

  // If result is a string, return it; otherwise, return the key
  return typeof result === 'string' ? result : key
}

// The provider component
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<string>('en')

  // Get the translation based on the current language
  const t = (key: string): string =>
    getNestedTranslation(translations[language], key)

  // Use effect to load language from localStorage on component mount
  useEffect(() => {
    const savedLang = getFromLocalStorage('lang')
    if (savedLang) {
      setLanguage(savedLang)
    } else {
      // Fallback to the system language or 'en' if no language is set in localStorage
      const browserLanguage = navigator.language || navigator.language
      const systemLanguage = window.navigator.languages
        ? window.navigator.languages[0]
        : browserLanguage
      const [languageCode] = systemLanguage.split('-')
      setLanguage(languageCode) // Set to browser/system language
      setToLocalStorage('lang', languageCode) // Save it in localStorage
    }
  }, []) // Only run once on mount

  const changeLanguage = (lang: string) => {
    setToLocalStorage('lang', lang)
    setLanguage(lang) // Immediately update the state
  }

  return (
    <LanguageContext.Provider
      value={{ t, language, setLanguage: changeLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

// Custom hook to use the language context
export const useLanguage = () => useContext(LanguageContext)
