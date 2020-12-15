import React, { useCallback, useContext } from 'react'
import { Redirect, withRouter } from 'react-router-dom'

import { AuthContext } from '../components/context/authContext'
import { 
  Form, 
  Layout, 
  Wrapper, 
  Title, 
  Input, 
  ButtonSubmit, 
  FooterWrapper,
} from '../components/styled'
import fire from '../fire'

const LoginPage = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault()
      const { email, password } = event.target.elements
      try {
        await fire
          .auth()
          .signInWithEmailAndPassword(email.value, password.value)
        history.push("/")
      } catch (error) {
        alert(error)
      }
    },
    [history]
  );

  const { user } = useContext(AuthContext)

  if (user) {
    return <Redirect to="/" />
  }
  
  return (
    <Layout>
      <Wrapper>
        <Form onSubmit={handleLogin}>
          <Title>Login</Title>
          <Input 
            placeholder="Email"
            name="email"
          />
          <Input 
            placeholder="Password"
            name="password"
            type="password"
          />
          <ButtonSubmit type="submit">Login</ButtonSubmit>

        </Form>
        <FooterWrapper to="/sign">Don’t have an account yet? <span>Register!</span></FooterWrapper>
      </Wrapper>
    </Layout>
  )
}

export default withRouter(LoginPage)
