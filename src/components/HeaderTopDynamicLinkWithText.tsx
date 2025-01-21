import { IHeaderTopMenuLinkInterface } from '@/interface/headerTop'
import Image from 'next/image'
import Link from 'next/link'

interface DynamicLinkProps {
  menu: IHeaderTopMenuLinkInterface // Receiving the whole menu object
}

//!=================================================================================>>>

const HeaderTopDynamicLinkWithText: React.FC<DynamicLinkProps> = ({ menu }) => {
  return (
    <>
      <Link href={menu.href} className="flex items-center gap-2">
        <Image
          src={menu?.icon?.src}
          alt={menu.title}
          width={16}
          height={16}
          className="inline-block"
        />
        <span className="text-[15px]">{menu.title}</span>
      </Link>
    </>
  )
}

export default HeaderTopDynamicLinkWithText
