import React, { Component } from 'react';
import Square from './Square';
class Board extends Component {

  constructor() {
    super();
    this.state = {
      squares: Array(9).fill(null),
      // 数组9个元素，每个元素赋值为空
      Flag: true,
    }
  }
  click (i) {
    const squares = this.state.squares.slice();
    // slice（）浅拷贝一份
    if(calculateWinner(squares)) {
      return;
    }
    // 如果已经有赢家的话，对方不能够再下棋了
    this.state.Flag ? squares[i] = 'X': squares[i] = 'O';
    //  X先下棋
    this.setState({
      squares,
      Flag: !this.state.Flag,
    });
    // 每点击一次重新渲染一次squares
  }
  renderSquare(i) {
    return <Square btClick = {() => this.click(i)} value={this.state.squares[i]}/>;
    // 箭头函数传参数，不立即调用
    // 注意不能写成 btnClick={this.onClick(i)} 
    // 否则 this.onClick 方法会在 Square 组件渲染时被直接触发
    // 而不是等到 Board 组件渲染完成时通过点击触发 所以用箭头函数
  }
  render() {
    const winner = calculateWinner(this.state.squares);
    // winner输出的是赢家名字 X或 O
    let status;
    if(winner) {
       status = 'Winner is:' + winner;
    } else {
       status = 'Next player:' + (this.state.Flag ? 'X' :'O');
    }
    return (
      <div>
        <div style={{marginBottom:'20px'}}>{status}</div>
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
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
    // lines中的数组中的三项是否都为一个数，如果是的话，则为胜利方
  }
  return null;
}
//  判断赢家函数  function全局组件～写在最外面
export default Board;