import Image from 'next/image'

export function ZiggyScheduleLogo({ className = '' }: { className?: string }) {
  return (
    <Image
      src="/press-assets/ziggyschedule-wordmark-dark.png"
      alt="ZiggySchedule"
      width={140}
      height={40}
      className={className}
      style={{ objectFit: 'contain' }}
      priority
    />
  )
}
