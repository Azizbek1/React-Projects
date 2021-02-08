import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
body {
  font: 14px 'Century Gothic', Futura, sans-serif;
  margin: 20px;
}

#root {
  display: flex;
}
`

const Square = styled.button`
  padding: 0;
  margin-right: -1px;
  margin-top: -1px;
  background: none;
  border: 1px solid #999;
  outline: none;
  font-size: 2em;
  font-weight: bold;
  text-align: center;
`

const Board = styled.div`
  width: 120px;
  height: 120px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
`

const Info = styled.div`
  text-align: center;
`

const Status = styled.p`
  text-align: center;
`

const List = styled.ul`
  list-style: none;
`

const Item = styled.li`
  text-align: center;
`

const Button = styled.button`
  text-align: center;
`

export { GlobalStyle, Square, Board, Info, Status, List, Item, Button }
