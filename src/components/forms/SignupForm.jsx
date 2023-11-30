import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import axios from 'axios'
import { useState } from 'react'

import Input from '../input/Input'
import Button from '../input/Button'

import { signupSchema } from '../../../modules/user/user.schema'

const TelefoneConatiner = styled.div`
    display: flex;
    gap: 10px;
`

const LabelTel = styled.p`
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 5px;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

export default function SignupForm() {

    const { register, handleSubmit, formState: { errors }, setError } = useForm({
        resolver: joiResolver(signupSchema)
      })
    
      const [signupInfo, setSignupInfo] = useState(null)

      const handleForm = async (data) => {
        try {
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/api/user/signup`,
            data
          );
    
          if (response.status === 201) {
            const { createdAt, updatedAt, lastLogin } = response.data;
            setSignupInfo({ createdAt, updatedAt, lastLogin });
          }
        } catch (err) {
          if (err.response?.data?.code === 11000) {
            setError(err.response.data.duplicatedKey, {
              type: 'duplicated',
            });
          }
        }
      };
    return(
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
            {signupInfo && (
              <div>
                <p>Data de Criação: {signupInfo.createdAt}</p>
                <p>Data de Atualização: {signupInfo.updatedAt}</p>
                <p>Data do Último Login: {signupInfo.lastLogin}</p>
              </div>
            )}
        </Form>
    )
}