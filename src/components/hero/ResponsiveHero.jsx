'use client'

import { useState, useEffect } from 'react'
import { useMediaQuery } from 'usehooks-ts'
import Hero from './Hero'
import HeroMobile from './HeroMobile'

export default function ResponsiveHero() {
  const [hasMounted, setHasMounted] = useState(false)
  const isDesktop = useMediaQuery('(min-width: 1024px)')

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) return null 

  return isDesktop ? <Hero /> : <HeroMobile />
}