import styled from 'styled-components'
import { useState } from 'react'

import SignupForm from '../src/components/forms/SignupForm'
import LoginForm from '../src/components/forms/LoginForm'

const FormsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 200px;
    justify-content: center;
    align-items: center;
    margin-top: 20px;

    @media (max-width: 650px) {
      gap: 80px;
      margin-top: 20px;
    }
`

const ButtonState = styled.p`
  color: blue;
  cursor: pointer;
`

function HomePage() {
  const [isSignup, setIsSignup] = useState(true)

  const toggleForm = () => {
    setIsSignup(!isSignup);
  }

  return (
    <FormsContainer>
      {isSignup ? <SignupForm /> : <LoginForm />}
      <ButtonState onClick={toggleForm}>{isSignup ? 'Já tem uma conta? Faça login' : 'Não tem uma conta? Cadastre-se'}</ButtonState>
    </FormsContainer>
  )
}

export default HomePage