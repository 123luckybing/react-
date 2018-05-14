import React,{ Component } from 'react';
import MapItems from './MapItems';
class MapComponent extends Component {
  render() {
    const num = [1,2,3,4,5]; 
    return(
      <div>
        <MapItems value={num} key={num}/>
        {/* key在这里声明 */}
      </div>
    )
  }
}
export default MapComponent;