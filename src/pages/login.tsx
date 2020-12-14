import React, { useCallback, useContext } from 'react'
import { Redirect, withRouter } from 'react-router-dom';

import { AuthContext } from '../components/context/authContext';
import { Form, Layout, Wrapper, Title, Input, ButtonSubmit } from '../components/styled';
import Footer from '../components/footer';
import fire from '../fire'

const LoginPage = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await fire
          .auth()
          .signInWithEmailAndPassword(email.value, password.value)
        history.push("/");
      } catch (error) {
        alert(error);
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
          />
          <ButtonSubmit type="submit">Login</ButtonSubmit>

        </Form>
        <Footer text='Don’t have an account yet? ' linkText="Register!" url="/sign" />
      </Wrapper>
    </Layout>
  )
}

export default withRouter(LoginPage)
