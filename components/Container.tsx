import { cn } from '@/lib/utils'
import React from 'react'

const Container = ({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div className={cn('max-w-screen-2xl mx-auto px-4', className)}>
      {children}
    </div>
  )
}

export default Container
