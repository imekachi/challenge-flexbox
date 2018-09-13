import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import IMG_DEFAULT from '../static/images/thai-food.png'
import COLORS from '../styles/colors'
import { FONT_FAMILIES } from '../styles/fonts'
import { RATIO_OG } from '../styles/sizes'

const Wrapper = styled.div`
  padding: 15px;
`

const ImageWrapper = styled.div`
  width: 100px;
`

const Image = styled.div`
  display: block;
  height: 0;
  padding-bottom: ${RATIO_OG}%;
  background: url("${props => props.src}") no-repeat center center;
  background-size: cover;
`

const InfoWrapper = styled.div`
  padding-left: 10px;
`

const Title = styled.div`
  margin-bottom: 10px;
  word-wrap: break-word;
  word-break: break-word;
  font-weight: bold;
  color: ${COLORS.GRAY_DARK_3};
`

const BottomSection = styled.div``

const RemoveButton = styled.button`
  box-shadow: none;
  outline: none;
  border: 0 none;
  padding: 0;
  background: none;
  cursor: pointer;
  font: 13px/1 ${FONT_FAMILIES.TAHOMA};
  color: ${COLORS.GRAY_DARK_1};

  &:hover {
    color: ${COLORS.RED};
  }
`

const Price = styled.span`
  font: bold 14px/1 ${FONT_FAMILIES.TAHOMA};
  color: ${COLORS.ORANGE_THEME};
`

const CartItem = props => {
  const { image, title, price } = props
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={image} />
      </ImageWrapper>
      <InfoWrapper>
        <Title>{title}</Title>
        <BottomSection>
          <RemoveButton>ลบ</RemoveButton>
          <Price>{price} บาท</Price>
        </BottomSection>
      </InfoWrapper>
    </Wrapper>
  )
}

CartItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

CartItem.defaultProps = {
  image: IMG_DEFAULT,
}

export default CartItem
