import styled, { keyframes } from 'styled-components'

const changeScale = keyframes`
  from {
    transform: scale(0.95);
  }
  to {
    transform: scale(1.05);
  }
`

const Box = styled.div`
  padding: 2em;
  background-color: rgba(0, 0, 0, 0.15);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.5);
`

const Title = styled.h2`
  font-size: 2.25em;
  color: #1c1c1c;
  text-shadow: 1px 1px 0 #f0f0f0, 2px 2px #1c1c1c;
  animation: ${changeScale} 1s linear infinite alternate;
`

const Amount = styled.p`
  margin: 0.25em 0;
  font-size: 3em;
  text-shadow: 1px 1px #f0f0f0, 1.5px 1.5px #1c1c1c;
  transform: scaleY(1.25);
  transition: 0.4s;
  color: ${(props) => (props.negative ? '#d9534f' : '#5cb85c')};
  transform: ${(props) => (props.negative ? 'skewX(10deg)' : 'skewX(-10deg)')};
`

const Info = styled(Amount)`
  font-size: 1.25em;
  transition: 0.4s;
  transform: ${(props) => (props.negative ? 'rotate(4deg)' : 'rotate(-4deg)')};
`

export { Box, Title, Amount, Info }
