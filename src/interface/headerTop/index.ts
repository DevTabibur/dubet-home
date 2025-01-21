import { StaticImageData } from "next/image"

export interface IHeaderTopMenuLinkInterface {
  id: string
  title: string
  href: string
  icon: StaticImageData // icon as a component
}
