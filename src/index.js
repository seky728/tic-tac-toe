import React from "react";
import ReactDOM from "react-dom/client"
import "./index.css"

// prostě classa Board dědí z React.Component (proč? prostě to tak je)
class Board extends React.Component {
    // i je pojmenována jako props do které chodí nějaká hodnota, tady jen int
    renderSquare(i) {
      return <Square value={i} />;
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
    render(){
        return(
            <button className="square">{this.props.value}</button>
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