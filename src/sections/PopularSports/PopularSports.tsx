import { slotMachines } from '@/assets/svg'
import MenuItemSidebar from '@/components/ui/Sidebars/MenuItemSidebar'

const items = [
  { label: 'Slot Machines', icon: slotMachines },
  { label: 'Football', icon: slotMachines },
  { label: 'Basketball', icon: slotMachines },
  { label: 'Slot Machines', icon: slotMachines },
  { label: 'Football', icon: slotMachines },
  { label: 'Basketball', icon: slotMachines },
  { label: 'Slot Machines', icon: slotMachines },
  { label: 'Football', icon: slotMachines },
  { label: 'Basketball', icon: slotMachines },
  { label: 'Slot Machines', icon: slotMachines },
  { label: 'Football', icon: slotMachines },
  { label: 'Basketball', icon: slotMachines },
  { label: 'Slot Machines', icon: slotMachines },
  { label: 'Football', icon: slotMachines },
  { label: 'Basketball', icon: slotMachines },
]

const PopularSports = () => {
  return <MenuItemSidebar header="Popular Sports" menuItems={items} />
}

export default PopularSports
