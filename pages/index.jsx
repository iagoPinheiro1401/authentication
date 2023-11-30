import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import axios from 'axios'

import Input from '../src/components/input/Input'
import Button from '../src/components/input/Button'

import { signupSchema } from '../modules/user/user.schema'

const FormsContainer = styled.div`
    display: flex;
    gap: 200px;
    justify-content: center;
    margin-top: 20px;
`

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
  const { register, handleSubmit, formState: { errors }, setError } = useForm({
    resolver: joiResolver(signupSchema)
  })

  const handleForm = async (data) => {
    try {
      const { status } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/user/signup`, data)
      if ( status === 201) {

      }
    } catch (err){
      if (err.response.data.code === 11000) {
        setError(err.response.data.duplicatedKey, {
          type: 'duplicated'
        })
      }
    }
  }

  return (
    <FormsContainer>
    <Form onSubmit={handleSubmit(handleForm)}>
        <h3>Signup</h3>
        <Input label="Nome" {...register('nome')} error={errors.nome}/>
        <Input label="Email" {...register('email')} error={errors.email}/>
        <Input  type="password" label="Senha" {...register('senha')} error={errors.senha}/>
        <LabelTel>Telefone</LabelTel>
      <TelefoneConatiner>
          <Input placeholder="ddd" {...register('ddd')} error={errors.ddd}/>
          <Input placeholder="telefone" {...register('telefone')} error={errors.telefone}/>
      </TelefoneConatiner>
      <Button type="submit">Cadastrar</Button>
    </Form>

    <Form>
        <h3>Login</h3>
        <Input label="Email"/>
        <Input label="Senha" type="password"/>
        <Button type="submit">Entrar</Button>
    </Form>
    </FormsContainer>
  )
}

export default HomePage