export interface SocialMediaItem {
  name: string // e.g., "Google", "Facebook"
  icon: string // Path or URL of the icon
  id: string // Unique identifier for the item
}

export interface SocialMediaButtonsProps {
  items: SocialMediaItem[]
  onClick: (id: string) => void // Callback to handle clicks
}
