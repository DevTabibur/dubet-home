export interface IFlagProps {
  id: string
  code: string
  countryName: string
  icon: React.FC<React.SVGProps<SVGSVGElement>> // icon as a component
}
