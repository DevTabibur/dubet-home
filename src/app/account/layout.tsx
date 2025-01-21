import AccountSidebar from '@/components/ui/AccountSidebar/AccountSidebar'
import UserProfile from '@/components/ui/UserProfile/UserProfile'
import HomeWrapper from '@/components/wrapper/HomeWrapper'
import React, { ReactNode, FC } from 'react'
import profile from '@/assets/demo/profile.png'
interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <HomeWrapper>
      <div className="flex gap-5">
        <div className="w-[20%] space-y-3">
          <UserProfile
            name="Donald Trump"
            avatarUrl={profile}
            balance={5000.33}
          />
          <AccountSidebar />
        </div>
        <section className="w-[80%]">{children}</section>
      </div>
    </HomeWrapper>
  )
}

export default Layout
