import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'
import ChallengePage from './components/ChallengePage'
import OrderPage from './components/OrderPage'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
const App = () => (
  <Router>
    <Container>
      <Route exact path="/" component={OrderPage} />
      <Route path="/challenge" component={ChallengePage} />
    </Container>
  </Router>
)

export default App
