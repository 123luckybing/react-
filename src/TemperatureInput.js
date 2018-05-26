import React, { Component } from 'react';
class TemperatureInput extends Component {
  constructor() {
    super();
    this.changeValue = this.changeValue.bind(this);
  }

  //当input数据改变的时候
  changeValue(e) {
    this.props.onTemperatureChange(e.target.value);
  }
  render(){
    const scaleNames = {
      c: '摄氏度',
      f: '华式摄氏度',
    };
    const scale = this.props.scale;
    return(
      <div>
        <form style={{'margin':'20px'}}>
          <fieldset>
            <legend>请输入{scaleNames[scale]}温度</legend>
            <input type="text" style={{'margin': '10px'}} 
            value={this.props.temperature} 
            onChange={this.changeValue}
            />
            {/* 刚开始把value写成了defaultValue，不能实现数据同步 */}
          </fieldset>
        </form>
      </div>
    )
  }
}
export default TemperatureInput;