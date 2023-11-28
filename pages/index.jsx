import styled from 'styled-components'

import Input from '../src/components/input/Input'

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const TelefoneConatiner = styled.div`
    display: flex;
    gap: 10px;
`

const LabelTel = styled.p`
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 5px;
`
function HomePage() {
  return (
    <Form>
      <Input label="Nome"/>
      <Input label="Email"/>
      <Input label="Senha"/>
      <LabelTel>Telefone</LabelTel>
      <TelefoneConatiner>
          <Input placeholder="ddd"/>
          <Input placeholder="telefone"/>
      </TelefoneConatiner>
    </Form>
  )
}

export default HomePage