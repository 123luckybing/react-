import React, { Component } from 'react';
class And extends Component {
  render() {
    const message = ["hello","this","is","a","bird"];
    return(
     <div>
     <div>hello</div>
     {
      message.length>0 && <h6>您有{message.length}条消息未读</h6>
     }
     </div>
    )
  }
}
export default And;