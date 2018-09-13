import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import CartItem from '../components/CartItem'
import { Container, Header, Wrapper } from '../components/Layout'

const CartList = styled.ul``

const CartItemContainer = styled.li`
  &:nth-child(even) {
    background-color: #fef0e8;
  }
`

const CartPage = ({ cart }) => {
  const cartItems = cart.map(item => (
    <CartItemContainer key={item.id}>
      <CartItem {...item} />
    </CartItemContainer>
  ))
  return (
    <Wrapper>
      <Header>Cart Challenge</Header>
      <Container maxWidth={390}>
        <CartList>{cartItems}</CartList>
      </Container>
    </Wrapper>
  )
}

CartPage.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object),
}

CartPage.defaultProps = {
  cart: [
    { id: 1536827830358, title: 'มาม่าผัด ขอเส้นเด้งๆ', price: 50 },
    {
      id: 1536827830380,
      title:
        'ข้าวราดกะเพราไก่ ใส่พริกน้อยๆ เผ็ดน้อยๆ ใส่ถั่วฝักยาวซอยเป็นชิ้นขนาด 1 cm + ไข่ดาวกรอบนอกนุ่มใน ที่ไข่แดงยังไม่สุก',
      price: 65,
    },
    { id: 1536827830401, title: 'ข้าวราดผัดพริกแกงไก่', price: 50 },
    { id: 1536827830486, title: 'ข้าวราดผัดผักบุุ้งไฟแดง ใส่เนื้อปลากระพง', price: 50 },
  ],
}

export default CartPage
