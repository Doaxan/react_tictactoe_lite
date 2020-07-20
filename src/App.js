import React from 'react'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: Array(9).fill(null),
      count: 0,
    }
    this.winnerLine = [
      // horizontal
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      // vertical
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      // diagonal
      [0, 4, 8],
      [2, 4, 6],
    ]
  }

  isWinner = (current) => {
    const currentSquares = this.state.squares
    this.winnerLine.forEach(line => {
      if (currentSquares[line[0]] === current && currentSquares[line[1]] ===
        current && currentSquares[line[2]] === current) {
        alert(current + ' win!')
        setTimeout(() => {
          this.setState({
            squares: Array(9).fill(null),
            count: 0,
          })
        }, 3000)
      }
    })
  }

  clickHandler = event => {
    const data = event.target.getAttribute('data')
    const currentSquares = this.state.squares
    if (!currentSquares[data]) {
      currentSquares[data] = this.state.count % 2 === 0 ? 'X' : 'O'
      this.setState({squares: currentSquares, count: this.state.count + 1})
    } else {
      alert('You can not do it this way')
    }
    this.isWinner(currentSquares[data])
  }

  render() {
    return (
      <div className="tic-tac-toe">
        {this.state.squares.map((square, index) =>
          <div className="ttt-grid"
               onClick={this.clickHandler} data={index} key={index}>{square}
          </div>,
        )}
      </div>
    )
  }
}

export default App
