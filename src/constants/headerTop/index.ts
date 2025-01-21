import { EmptyWallet, Mobile, QRCode } from '@/assets/svg'
import { IHeaderTopMenuLinkInterface } from '@/interface/headerTop'

export const HeaderTopMenuLink: IHeaderTopMenuLinkInterface[] = [
  { id: '1', title: 'Mobile App', href: '/app-download', icon: Mobile },
  {
    id: '2',
    title: 'Payment System',
    href: '/payment-system',
    icon: EmptyWallet,
  },
  { id: '3', title: 'QR Code', href: '/qr-code', icon: QRCode },
]
