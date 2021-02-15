// global & native css modules
/*
export const Control = ({ count, setCount }) => (
  <section className='control_box'>
    <h2 className='control_title'>control panel</h2>
    <div className='button_box'>
      <button className='button increment' onClick={() => setCount(count + 1)}>
        +
      </button>
      <button className='button decrement' onClick={() => setCount(count - 1)}>
        -
      </button>
      <button className='button reset' onClick={() => setCount(0)}>
        x
      </button>
    </div>
  </section>
)
*/

//
// inline styles example
/*
const buttonStyles = {
  margin: '0 0.5em',
  width: '2.25em',
  height: '2.25em',
  backgroundColor: 'none',
  border: 'none',
  outline: 'none',
  borderRadius: '4px',
  boxShadow: '0 1px 1px rgba(0, 0, 0, 0.5)',
  fontFamily: 'inherit',
  fontSize: '1.25em',
  color: '#f0f0f0',
  cursor: 'pointer',
  userSelect: 'none',
  transition: '0.2s'
}
*/

//
// react css modules
/*
import styles from './Control.module.css'

export const Control = ({ count, setCount }) => {
  const {
    control_box,
    title,
    button_box,
    button,
    increment,
    decrement,
    reset
  } = styles

  return (
    <section className={control_box}>
      <h2 className={title}>control panel</h2>
      <div className={button_box}>
        <button
          className={[button, increment].join(' ')}
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
        <button
          className={`${button} ${decrement}`}
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
        <button className={`${button} ${reset}`} onClick={() => setCount(0)}>
          x
        </button>
      </div>
    </section>
  )
}
*/

//
// styled-components
import {
  ControlBox,
  Title,
  ButtonBox,
  IncrementBtn,
  DecrementBtn,
  ResetBtn
} from './styles'

export const Control = ({ count, setCount }) => (
  <ControlBox>
    <Title>control panel</Title>
    <ButtonBox>
      <IncrementBtn onClick={() => setCount(count + 1)}>+</IncrementBtn>
      <DecrementBtn onClick={() => setCount(count - 1)}>-</DecrementBtn>
      <ResetBtn onClick={() => setCount(0)}>x</ResetBtn>
    </ButtonBox>
  </ControlBox>
)
