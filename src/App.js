import React from 'react';
import TakeCv from './components/takecv';
import TakeSearch from './components/takesearch';
import TakeList from './components/takelist';
import './App.css';

class App extends React.Component{
  render(){
    return(
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h1>quan li cong viec</h1>
            </div>
          </div>
          {/*them cv*/}
          <div className="row">
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <TakeCv />
            </div>
          {/*table cv*/}
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            
            {/*search cv*/}
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <button type="button" class="btn btn-primary">them cong viec</button>
                <button type="button" class="btn btn-warning">button</button>

                <TakeSearch />
              </div>
              {/*search cv*/}
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                
              </div>
            </div>
            <br></br>

            {/*table cv*/}
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <TakeList />
                </div>
              </div>
            </div>
          </div>
        </div>
      )
  }
}

export default App;
