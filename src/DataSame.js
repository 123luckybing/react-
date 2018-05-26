import React, { Component } from 'react';
import TemperatureInput from './TemperatureInput';
import BoilingVerdict from './BoilingVerdict';
class DataSame extends Component {
  constructor () {
    super();
    this.state = {
      temperature: '',
      scale: '',
    }
    this.huashiChange = this.huashiChange.bind(this);
    this.change = this.change.bind(this);
  }
  // c 摄氏度  f 华式摄氏度
  change(temperature) {
    this.setState({
      temperature,
      scale: 'f',
      // temperature: temperature 简写成 temperature
    });
  }
  huashiChange(temperature) {
    this.setState({
      temperature,
      scale: 'c',
    });
  }
  render() {
    function toCelsius(fahrenheit) {
      return (fahrenheit - 32) * 5 / 9;
    }
    
    function toFahrenheit(celsius) {
      return (celsius * 9 / 5) + 32;
    }

    function tryConvert(temperature, convert) {
      const input = parseFloat(temperature);
      if (Number.isNaN(input)) {
        return '';
      }
      const output = convert(input);
      const rounded = Math.round(output * 1000) / 1000;
      return rounded.toString();
    }

    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    return(
      <div>
        <div>需求:在提供摄氏度输入的基础之上，再提供一个华氏温度输入，并且它们能保持同步。下面显示水是否能烧开。</div><br/>
        <div>思路：在React中，状态分享是通过将state数据提升至离需要这些数据的组件最近的父组件来完成的。
          将公用的state上升至离他们最近的、公共的父组件。实现state的同步。
        </div>
        <TemperatureInput 
        scale='f'
        temperature = {fahrenheit} 
        onTemperatureChange = {this.huashiChange}
        />
        <TemperatureInput 
        scale='c' 
        temperature = {celsius} 
        onTemperatureChange = {this.change}
        />
        <BoilingVerdict temperature = {this.state.temperature} />
      </div>
    );
  }
}
export default DataSame;