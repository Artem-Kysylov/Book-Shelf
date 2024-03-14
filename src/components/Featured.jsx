import React from 'react'
import styled from 'styled-components'

import { FeaturedItem } from './FeaturedItem'

const Container = styled.div`
    max-width: 1200px;
    padding: 0 10px;
    margin: 0 auto;
`

export const Featured = () => {
  return (
    <Container>
        <FeaturedItem/>
    </Container>
  )
}
