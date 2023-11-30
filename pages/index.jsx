import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'

import Input from '../src/components/input/Input'

import { signupSchema } from '../modules/user/user.schema'

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
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: joiResolver(signupSchema)
  })

  const handleForm = (data) => {
    console.log(data)
  }
  console.log(errors)

  return (
    <Form onSubmit={handleSubmit(handleForm)}>
      <Input label="Nome" {...register('nome')}/>
      <Input label="Email" {...register('email')}/>
      <Input label="Senha" {...register('senha')}/>
      <LabelTel>Telefone</LabelTel>
      <TelefoneConatiner>
          <Input placeholder="ddd" {...register('ddd')}/>
          <Input placeholder="telefone" {...register('telefone')}/>
      </TelefoneConatiner>
      <button type="submit">Enviar</button>
    </Form>
  )
}

export default HomePage