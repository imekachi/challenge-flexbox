import styled from 'styled-components'
import { parseWithDefault } from '../styles/utils'

export const Wrapper = styled.div``

export const Header = styled.h1`
  font-size: 24px;
  padding: 30px;
  text-align: center;
`

export const Container = styled.div`
  max-width: ${props => parseWithDefault(props.maxWidth, 360)};
  margin: auto;
  padding: 20px;
`
