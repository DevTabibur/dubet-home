import {
  facebookIcon,
  googleIcon,
  skypeIcon,
  telegramIcon,
  whatsappIcon,
} from '@/assets/svg'
import { SocialMediaItem } from '@/interface/socialMediaButtons'

export const socialMediaItems: SocialMediaItem[] = [
  { name: 'Google', icon: googleIcon, id: 'google' },
  { name: 'Facebook', icon: facebookIcon, id: 'facebook' },
  { name: 'Skype', icon: skypeIcon, id: 'skype' },
  { name: 'WhatsApp', icon: whatsappIcon, id: 'whatsapp' },
  { name: 'Telegram', icon: telegramIcon, id: 'telegram' },
]
