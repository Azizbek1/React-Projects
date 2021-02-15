// global & native css modules
/*
export const Counter = ({ count }) => (
  <section className='counter_box'>
    <h2 className='counter_title'>counter value:</h2>
    <p className={`counter_content ${count < 0 ? 'negative' : 'positive'}`}>
      {count}
    </p>
    <p className='counter_info'>
      ({count < 0 ? 'negative' : 'positive'} {count & 1 ? 'odd' : 'even'})
    </p>
  </section>
)
*/

//
// react css modules
/*
import styles from './Counter.module.css'

export const Counter = ({ count }) => {
  const { box, title, content, negative, positive, info } = styles

  return (
    <section className={box}>
      <h2 className={title}>counter value:</h2>
      <p className={`${content} ${count < 0 ? negative : positive}`}>{count}</p>
      <p className={info}>
        ({count < 0 ? 'negative' : 'positive'} {count & 1 ? 'odd' : 'even'})
      </p>
    </section>
  )
}
*/

//
// styled-components
import { Box, Title, Amount, Info } from './styles'

export const Counter = ({ count }) => {
  const negative = count < 0

  return (
    <Box>
      <Title>counter value:</Title>
      <Amount negative={negative}>{count}</Amount>
      <Info negative={negative}>
        ({negative ? 'negative' : 'positive'} {count & 1 ? 'odd' : 'even'})
      </Info>
    </Box>
  )
}
