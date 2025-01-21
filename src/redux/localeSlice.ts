// localeSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface LocaleState {
  currentLang: string // Ensure this is defined correctly
}

const initialState: LocaleState = {
  currentLang: 'en', // Default language
}

const localeSlice = createSlice({
  name: 'locale',
  initialState,
  reducers: {
    setLocale(state, action: PayloadAction<string>) {
      state.currentLang = action.payload // Correctly update currentLang
    },
  },
})

export const { setLocale } = localeSlice.actions
export default localeSlice.reducer
