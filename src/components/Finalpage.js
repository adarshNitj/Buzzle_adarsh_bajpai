import React, { Component } from 'react';
import Listone from './Listone';
import Listtwo from './Listtwo';
import Mainpage from './Mainpage';
import Pages from './Pages';

export class Finalpage extends Component {
  render() {
    return (
       <>
       <div class="d-inline-flex p-1 bg-light">
       <div class="p-1 m-1 bg-dark text-white">
           <Pages/>
           <br/>
           Recommended Rooms
           <Listone/>
           <br/>
           Recommended Creators
           <Listtwo/>
           <br/>
       </div>
       <div class="p-1 m-1 bg-dark text-white">
       <div className="container">
        <Mainpage />
      </div>
      <div className="container">
        <Mainpage />
      </div>
      <div className="container">
        <Mainpage />
      </div>
      <div className="container">
        <Mainpage />
      </div>
       </div>
       </div>
       </> 
       
    )
  }
}

export default Finalpage;
