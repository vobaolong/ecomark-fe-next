import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'
import React from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from './ui/tooltip'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const socialMediaLinks = [
  {
    title: 'Facebook',
    href: 'https://www.facebook.com',
    icon: <Facebook className='w-5 h-5' />
  },
  {
    title: 'Twitter',
    href: 'https://www.twitter.com',
    icon: <Twitter className='w-5 h-5' />
  },
  {
    title: 'Instagram',
    href: 'https://www.instagram.com',
    icon: <Instagram className='w-5 h-5' />
  },
  {
    title: 'Linkedin',
    href: 'https://www.linkedin.com',
    icon: <Linkedin className='w-5 h-5' />
  }
]
interface Props {
  className?: string
  iconClassName?: string
  tooltipClassName?: string
}
const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
  return (
    <TooltipProvider>
      <div className={cn(`flex items-center space-x-4`, className)}>
        {socialMediaLinks.map((item) => (
          <Tooltip key={item.title}>
            <TooltipTrigger asChild>
              <Link
                className={cn(
                  `p-2 border rounded-full hover:text-white hover:border-green-600 hover-effect`,
                  iconClassName
                )}
                href={item.href}
                target='_blank'
                rel='noopener noreferrer'
              >
                {item.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent className={cn('', tooltipClassName)}>
              {item.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  )
}

export default SocialMedia
