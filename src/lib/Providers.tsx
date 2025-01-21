'use client'
import { store } from '../redux/store'
import { Provider } from 'react-redux'
import { LanguageProvider } from '@/context/LanguageContext'

// **  redux provider
const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <LanguageProvider>{children}</LanguageProvider>
    </Provider>
  )
}

export default Providers
