import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { Container, Header, Wrapper } from '../components/Layout'
import COLORS from '../styles/colors'

const OrderTable = styled.div`
  border: 1px solid ${COLORS.GRAY_LIGHT_1};
`

const Item = styled.div`
  display: flex;

  &:not(:last-child) {
    border-bottom: 1px solid ${COLORS.GRAY_LIGHT_2};
  }
`

const ItemCell = styled.span`
  padding: 10px 20px;
`

const Name = styled(ItemCell)``

const Quantity = styled(ItemCell)`
  width: 100px;
  text-align: right;
  color: ${COLORS.GRAY_DARK_3};
  background-color: ${COLORS.ORANGE_YELLOW};
`

const OrderPage = ({ orders }) => {
  const items = orders.map(({ id, name, quantity }) => (
    <Item key={id}>
      <Name>{name}</Name>
      <Quantity>{quantity}</Quantity>
    </Item>
  ))

  return (
    <Wrapper>
      <Header>Orders</Header>
      <Container>
        <OrderTable>{items}</OrderTable>
      </Container>
    </Wrapper>
  )
}

OrderPage.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      quantity: PropTypes.number,
    })
  ),
}

OrderPage.defaultProps = {
  orders: [
    { id: 1536754152796, name: 'ปีกไก่ทอด', quantity: 15 },
    { id: 1536754152797, name: 'เล็กต้มยำ เผ็ดน้อย ไม่เอาหนังปลา', quantity: 7 },
    { id: 1536754152811, name: 'ข้าวเปล่า', quantity: 30 },
    { id: 1536754152832, name: 'ข้าวมันไก่ ไม่เอาหนัง ไม่เอามัน ขอแตงกวาเยอะๆ', quantity: 30 },
  ],
}

export default OrderPage
