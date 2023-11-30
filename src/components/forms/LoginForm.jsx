import styled from "styled-components"

import Input from "../input/Input"
import Button from "../input/Button"

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const handleForm = () => {
    console.log("entrou")
    event.preventDefault()
}

export default function LoginForm() {
    return(
        <Form>
            <Input label="Email" />
            <Input  type="password" label="Senha"/>
            <Button onClick={handleForm}>Entrar</Button>
        </Form>
    )
}