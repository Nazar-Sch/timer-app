import React, { useCallback } from 'react'
import { withRouter } from "react-router";

import Footer from '../components/footer';
import { Form, Layout, Wrapper, Title, Input, ButtonSubmit } from '../components/styled';
import fire, { db } from '../fire';

const SignPage = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password, firstname, lastname } = event.target.elements

    try {
      await fire
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then(({ user }) => {
          db
            .ref(`users/${user.uid}`)
            .set(
              {
                firstname: firstname.value,
                lastname: lastname.value,
                email: email.value,
                timeDesktop: 0,
                timeMobile: 0,
              },
            )
        })
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  
  return (
    <Layout>
      <Wrapper>
        <Form onSubmit={handleSignUp}>
          <Title>Sign</Title>
          <Input 
            placeholder="Email"
            name="email"
          />
          <Input 
            placeholder="Password" 
            name="password"
          />
          <Input 
            placeholder="Firstname" 
            name="firstname"
          />
          <Input 
            placeholder="Lastname"
            name="lastname"
          />
          <ButtonSubmit type="submit">Sign</ButtonSubmit>
        </Form>
        <Footer text='Don’t have an account yet? ' linkText="Login!" url="/login" />
      </Wrapper>
    </Layout>
  )
}

export default withRouter(SignPage)
