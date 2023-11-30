import styled from "styled-components"
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import axios from 'axios'
import { useState } from "react"

import { loginSchema } from "../../../modules/user/user.schema"

import Input from "../input/Input"
import Button from "../input/Button"

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

export default function LoginForm() {

    const { register, handleSubmit, formState: { errors }, setError } = useForm({
        resolver: joiResolver(loginSchema)
     })

     const [loginInfo, setloginInfo] = useState(null)

     const onSubmit = async (data) => {
        try {
            const response = await axios.post(
              `${process.env.NEXT_PUBLIC_API_URL}/api/user/login`,
              data
            );
      
            if (response.status === 200) {
              const { createdAt, updatedAt, lastLogin } = response.data;
              setloginInfo({ createdAt, updatedAt, lastLogin });
            }
        } catch (err){
            if (err.response.data === 'password incorrect') {
                setError('senha', {
                    message: 'A senha está incorreta'
                })
            } else if (err.response.data === 'not found') {
                setError('email', {
                    message: 'Email não encontrado'
                })
            }
        }
     }

    return(
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Input label="Email" {...register('email')} error={errors.email}/>
            <Input  label="password" type="password" {...register('senha')} error={errors.senha}/>
            <Button>Entrar</Button>
        </Form>
    )
}