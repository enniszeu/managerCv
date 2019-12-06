import React from 'react';


class TakeList extends React.Component{
  render(){
    return(
        <table className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>stt</th>
                    <th>cv</th>
                    <th>active</th>
                    <th>hanh dong</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>di boi</td>
                    <td>
                      <button type="button" className="btn btn-warning aa">kich khoat</button>
                    </td>
                    <td>
                      <button type="button" className="btn btn-success hd">sua</button>&nbsp;
                      <button type="button" className="btn btn-warning hd">xoa</button>
                    </td>
                  </tr>
                </tbody>
        </table>
      )
  }
}

export default TakeList;
