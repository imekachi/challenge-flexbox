import React from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import CartPage from './pages/CartPage'
import OrderPage from './pages/OrderPage'
import PageA from './pages/PageA'
import PageB from './pages/PageB'
import COLORS from './styles/colors'

const Wrapper = styled.div``

// eslint-disable-next-line no-unused-vars
const App = () => (
  <Router>
    <Wrapper>
      <Route exact path="/" component={OrderPage} />
      <Route path="/cart" component={CartPage} />
    </Wrapper>
  </Router>
)

const Nav = styled.nav`
  position: sticky;
  top: 0;
  display: block;
  padding: 10px 20px;
  text-align: center;
  background-color: ${COLORS.ORANGE_THEME};
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.3);
`

const NavLink = styled(Link)`
  display: inline-block;
  vertical-align: middle;
  padding: 10px;
  color: ${COLORS.WHITE};
  font-weight: bold;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

const Container = styled.div``

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80px;
  padding: 20px;
  background-color: ${COLORS.GRAY_LIGHT_2};
`

const RedirectToPageA = () => <Redirect to="/page-a" />

// eslint-disable-next-line no-unused-vars
const AppWithNav = () => (
  <Router>
    <Wrapper>
      <Nav>
        <NavLink to="/page-a">Page A</NavLink>
        <NavLink to="/page-b">Page B</NavLink>
      </Nav>
      <Container>
        <Route exact path="/" component={RedirectToPageA} />
        <Route path="/page-a" component={PageA} />
        <Route path="/page-b" component={PageB} />
      </Container>
      <Footer>Footer, All rights are not reserved</Footer>
    </Wrapper>
  </Router>
)

export default App
// export default AppWithNav
