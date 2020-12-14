import React, { useCallback, useContext, useEffect } from 'react'
import { Redirect, withRouter } from 'react-router-dom';

import { AuthContext } from '../components/context/authContext';
import { Form, Layout, Wrapper } from '../components/styled';
import Button from '../components/button';
import Footer from '../components/footer';
import Input from '../components/input';
import Title from '../components/title';
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

  const { currentUser } = useContext(AuthContext)

  if (currentUser) {
    return <Redirect to="/" />
  }
  
  return (
    // context
    <>
      <Layout>
        <Wrapper>
          <Form onSubmit={handleLogin}>
            <Title title={'Login'} />
            <Input 
              placeholder="Email"
              name="email"
            />
            <Input 
              placeholder="Password"
              name="password"
            />
            <Button title="Login"/>

          </Form>
          <Footer text='Don’t have an account yet? ' linkText="Register!" url="/sign" />
        </Wrapper>
      </Layout>
    </>
  )
}

export default withRouter(LoginPage)
