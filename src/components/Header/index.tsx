import React from 'react'
import { useViewportScroll, useTransform } from 'framer-motion'

import { Container } from './styles'

const Header: React.FC = () => {
  const { scrollYProgress } = useViewportScroll()
  const y = useTransform(scrollYProgress, [0.188, 0.198], ['0%', '-100%'])

  return <Container style={{ y }} />
}

export default Header
