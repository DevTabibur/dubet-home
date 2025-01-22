export interface MenuItem {
  items?: any
  key: string
  path: string
  title: string
  icon?: string
  subMenu?: MenuItem[]
}
