import React from 'react';


class TakeSearch extends React.Component{
  render(){
    return(
        <div className="input-group">
                  <input type="text" name="" id="input" className="form-control"/>
                
                  <span className="input-group-btn">
                    <button type="button" className="btn btn-primary">search</button>
                  </span>
       </div>
      )
  }
}

export default TakeSearch;
