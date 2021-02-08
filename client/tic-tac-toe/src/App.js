import { useState } from 'react'
import { Square, Board, Info, Status, List, Item, Button } from './styles'

function calcWin(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

function App() {
  const [state, setState] = useState({
    history: [{ squares: Array(9).fill(null) }],
    step: 0,
    isX: true
  })

  const click = (i) => {
    const { history, step, isX } = state

    const _history = history.slice(0, step + 1)
    const squares = [..._history[_history.length - 1].squares]

    if (calcWin(squares) || squares[i]) return

    squares[i] = isX ? 'X' : 'O'

    setState({
      history: _history.concat([{ squares }]),
      step: _history.length,
      isX: !isX
    })
  }

  const redirect = (step) => {
    setState({
      ...state,
      step,
      isX: !(step & 1)
    })
  }

  const { history, step } = state
  const { squares } = history[step]
  const winner = calcWin(squares)

  return (
    <>
      <Board>
        {squares.map((square, i) => (
          <Square key={i} onClick={() => click(i)}>
            {square}
          </Square>
        ))}
      </Board>
      <Info>
        <Status>
          {winner ? 'Win ' + winner : 'Next Player: ' + (state.isX ? 'X' : 'O')}
        </Status>
        <List>
          {history.map((_, i) => (
            <Item key={i}>
              <Button onClick={() => redirect(i)}>
                {i ? 'Step # ' + i : 'Start'}
              </Button>
            </Item>
          ))}
        </List>
      </Info>
    </>
  )
}

export default App
