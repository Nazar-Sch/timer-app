import React, { useCallback, useContext, useEffect } from 'react'
import { withRouter } from "react-router";

import Button from '../components/button';
import Footer from '../components/footer';
import Input from '../components/input';
import { Form, Layout, Wrapper } from '../components/styled';
import Title from '../components/title';
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
          <Title title="Sign" />
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
          <Button title="Sign"/>
        </Form>
        <Footer text='Don’t have an account yet? ' linkText="Login!" url="/login" />
      </Wrapper>
    </Layout>
  )
}

export default withRouter(SignPage)
