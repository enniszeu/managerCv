import React from 'react';
// import TakeCv from './components/takecv';


class TakeCv extends React.Component{
  render(){
    return(
              <div className="panel panel-warning">
                <div className="panel-heading">
                  <h3 className="panel-title">Them Cong Viec</h3>
                </div>
                <div className="panel-body">
                    <input type="text" name="" id="input" className="form-control"/>
                    <br></br>
                    <select name="" id="input" className="form-control">
                      <option value="0">kich hoat</option>
                      <option value="1">an</option>
                    </select>
                    <br></br>
                    <button type="button" className="btn btn-primary">them</button>
                  </div>
                </div>     
      )
  }
}

export default TakeCv;
