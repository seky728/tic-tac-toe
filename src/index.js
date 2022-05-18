import React from "react";
import ReactDOM from "react-dom/client"
import "./index.css"

// prostě classa Board dědí z React.Component (proč? prostě to tak je)
class Board extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        squares: Array(9).fill(null)
      }
    }

    handleClick(i){ // definovaná funkce pro classu Board
      const squares = this.state.squares.slice()
      squares[i] = 'X'
      this.setState({squares: squares})
    }


    // i je pojmenována jako props do které chodí nějaká hodnota, tady jen int
    renderSquare(i) {
      return <Square value={this.state.squares[i]} 
        onClick={()=>this.handleClick(i)} //zavolám metodu handleClick - this - je klasicky ta vlastní classa... jako v JAVě
      />
    }
    // nastyluji si hrací pole, zatím to jak to má vypadat
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  


// moje komponenta - prostě ve stylu tlačítek (klasik button)
class Square extends React.Component{
  constructor(props){
    super(props) // nevim co znamená tento super?
    this.state = {
      value: null,
    }
  }

    render(){
        return(
            <button 
            className="square" 
            onClick={()=>{this.props.onClick()}} // nechám onlick aby obstarala ta vlastní classa která tohle vyrenderuje
            >
            {this.props.value}
            </button>
        )
    }
}

// holder na stav, který vykresluje (vrací) hrací pole
class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board /> {// Tohle prostě vytvoří objekt Board a spustí metodu render? (asi ano)
            }
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root")); //definuji root pozici v html stránce - root - prostě nějaká definovaná komponenata dle reactu
  root.render(<Game />); // říkám co chci vyrenderovat do "root" elementu který je definován jako #root