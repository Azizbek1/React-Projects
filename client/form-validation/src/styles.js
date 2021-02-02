import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    min-height: 100vh;
    display: grid;
    place-items: center;
    background-color: #1c1c1c;
    font-family: 'Comfortaa', cursive;
    font-size: 14px;
    letter-spacing: 1px;
    color: #f0f0f0;
  }
`

const StyledTitle = styled.h1`
  margin: 1em;
  color: orange;
`

const StyledForm = styled.form`
  margin: 0 auto;
  width: 320px;
  font-size: 1.2em;
  text-align: center;
`

const Label = styled.label`
  margin: 0.5em;
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  text-align: left;
`

const BaseInput = styled.input`
  padding: 0.5em 0.75em;
  font-family: inherit;
  font-size: 0.9em;
  letter-spacing: 1px;
  outline: none;
  border: none;
  border-radius: 4px;
`

const RegularInput = styled(BaseInput)`
  background-color: #f0f0f0;
  box-shadow: inset 0 0 2px orange;

  &:focus {
    background-color: #1c1c1c;
    color: #f0f0f0;
    box-shadow: inset 0 0 4px yellow;
  }
`

const SubmitInput = styled(BaseInput)`
  margin: 1em 0.5em;
  background-image: linear-gradient(yellow, orange);
  cursor: pointer;

  &:active {
    box-shadow: inset 0 1px 3px #1c1c1c;
  }
`

const BaseText = styled.p`
  font-size: 1.1em;
  text-align: center;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.25);
`

const ErrorText = styled(BaseText)`
  font-size: ${(props) => (props.small ? '0.8em' : '1.1em')};
  color: red;
`

const SuccessText = styled(BaseText)`
  color: green;
`

export {
  GlobalStyle,
  StyledTitle,
  StyledForm,
  Label,
  RegularInput,
  SubmitInput,
  ErrorText,
  SuccessText
}
