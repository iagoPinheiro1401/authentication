/* eslint-disable react/jsx-props-no-spreading */
import styled from 'styled-components'
import { forwardRef } from 'react'

const StytledInput = styled.input`
    padding: 6px 20px;
    border-radius: 10px;
    width: 200px;
`


const StyledLabel = styled.p`
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 5px;
`

const Input = forwardRef(({ label, onChange, ...props }, ref) => {
    return(
        <>
            <StyledLabel>{label}</StyledLabel>
            <StytledInput placeholder={label} {...props} onChange={onChange} ref={ref}/>
        </>
    )
})

export default Input