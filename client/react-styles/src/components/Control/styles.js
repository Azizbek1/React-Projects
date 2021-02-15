import styled, { keyframes } from 'styled-components'

const changeOpacity = keyframes`
  from {
    opacity: 0.1;
  }
  to {
    opacity: 0.9;
  }
`

const ControlBox = styled.div`
  padding: 2em;
  background-color: rgba(255, 255, 255, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
`

const Title = styled.h2`
  margin-bottom: 1em;
  font-size: 2em;
  color: #1c1c1c;
  text-shadow: 1px 1px #f0f0f0, 2px 2px #1c1c1c;
  animation: ${changeOpacity} 1s linear infinite alternate;
`

const ButtonBox = styled.div`
  display: inline-block;
  padding: 1.25em;
  background-color: rgba(255, 255, 255, 0.25);
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.25);
`

const BaseButton = styled.button`
  margin: 0 0.5em;
  width: 2.25em;
  height: 2.25em;
  background-color: none;
  border: none;
  outline: none;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
  font-family: inherit;
  font-size: 1.25em;
  color: #f0f0f0;
  cursor: pointer;
  user-select: none;
  transition: 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    box-shadow: none;
  }
`

const IncrementBtn = styled(BaseButton)`
  background-color: #5cb85c;
`
const DecrementBtn = styled(BaseButton)`
  background-color: #f0ad4e;
`
const ResetBtn = styled(BaseButton)`
  background-color: #d9534f;
`

export { ControlBox, Title, ButtonBox, IncrementBtn, DecrementBtn, ResetBtn }
