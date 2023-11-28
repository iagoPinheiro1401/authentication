/* eslint-disable react/jsx-props-no-spreading */
import styled from 'styled-components'

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

export default function Input({ label, onChange, ...props }) {
    return(
        <>
            <StyledLabel>{label}</StyledLabel>
            <StytledInput placeholder={label} {...props} onChange={onChange}/>
        </>
    )
}

