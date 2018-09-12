import React from 'react'
import styled from 'styled-components'
import { Container, Header, Wrapper } from '../components/Layout'
import IMG_OG from '../static/images/og.jpg'

const RATIO_OG = (630 / 1200) * 100

const ListWrapper = styled.div``

const Image = styled.div`
  display: block;
  width: 100%;
  height: 0;
  padding-bottom: ${RATIO_OG}%;
  background: url("${props => props.src}") no-repeat center center;
  background-size: cover;
`

const ImageWrapper = styled.div`
  max-width: 120px;
  margin: auto;
`

const ChallengePage = () => (
  <Wrapper>
    <Header>challenge</Header>
    <Container>
      <ListWrapper>
        <ImageWrapper>
          <Image src={IMG_OG} />
        </ImageWrapper>
      </ListWrapper>
    </Container>
  </Wrapper>
)

export default ChallengePage
