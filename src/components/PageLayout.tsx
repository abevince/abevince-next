import * as React from 'react'

const PageLayout = ({ children, title }: { children: React.ReactNode; title: string }) => {
  return (
    <div className="w-full lg:w-[1024px] px-4 py-16 flex flex-col gap-8 mx-auto">
      <h2 className="text-2xl font-medium">{title}</h2>
      {children}
    </div>
  )
}

export default PageLayout
