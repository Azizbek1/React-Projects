// global & native css modules
// export const Title = () => <h1 className='app_title'>React Styles</h1>

//
// react css modules
// import styles from './Title.module.css'

// export const Title = () => <h1 className={styles.title}>React Styles</h1>

//
// styled-components
import styled from 'styled-components'

const StyledTitle = styled.h1`
  position: absolute;
  top: 0.5em;
  font-size: 3em;
  letter-spacing: 2px;
  text-shadow: 1px 1px 0 #f0f0f0, 2px 2px #1c1c1c;
  color: #337ab7;
`

export const Title = () => <StyledTitle>React Styles</StyledTitle>
