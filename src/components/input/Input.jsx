/* eslint-disable react/jsx-props-no-spreading */
import styled from 'styled-components'
import { forwardRef } from 'react'

const StytledInput = styled.input`
    padding: 6px 20px;
    border-radius: 10px;
    width: 200px;

    ${props => props.error && 'border: 2px solid red;'}

    & :focus{
        outline: none;
    }
`


const StyledLabel = styled.p`
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 5px;
`

const ErrorLabel = styled.span`
    color: red;
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 20px;
`

const ErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const errorMessage = {
    'string.empty': 'Este campo é obrigatório',
    'string.email': 'Digite um email válido',
    'number.base': 'Digite um número',
    'number.unsafe': 'Digite um número válido'
}

const Input = forwardRef(({ label, error, onChange, ...props }, ref) => {
    console.log(error)
    return(
        <>
            <StyledLabel>{label}</StyledLabel>
            <ErrorContainer>
                <StytledInput placeholder={label} error={error} {...props} onChange={onChange} ref={ref}/>
                {error && <ErrorLabel>{errorMessage[error.type] || error.message}</ErrorLabel>}
            </ErrorContainer>
        </>
    )
})

export default Input