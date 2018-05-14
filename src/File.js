import React, { Component } from 'react';
class File extends Component {
  render() {
    return(
      <div>
        请选择您要上传的文件: <input type="file"/>
      </div>
    )
  }
}
export default File;