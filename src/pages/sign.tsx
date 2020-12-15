import React, { useCallback } from 'react'
import { withRouter } from "react-router"

import { 
  Form, 
  Layout, 
  Wrapper, 
  Title, 
  Input, 
  ButtonSubmit, 
  FooterWrapper 
} from '../components/styled'
import fire, { db } from '../fire'

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
        });
      history.push("/")
    } catch (error) {
      alert(error)
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
            type="email"
          />
          <Input 
            placeholder="Password" 
            name="password"
            type="password"
          />
          <Input 
            placeholder="Firstname" 
            name="firstname"
            type="text"
          />
          <Input 
            placeholder="Lastname"
            name="lastname"
            type="text"
          />
          <ButtonSubmit type="submit">Sign</ButtonSubmit>
        </Form>
        <FooterWrapper to="/login">Already registered? <span>Log in!</span></FooterWrapper>
      </Wrapper>
    </Layout>
  )
}

export default withRouter(SignPage)
