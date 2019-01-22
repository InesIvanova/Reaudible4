import React, { Component } from 'react';
import Cards from '../Cards';
import Overview from '../Overview';

class Homepage extends Component {
  
  render() {
   
    return (
     <div>
        <Overview></Overview>
        <Cards></Cards>        
     </div>
    );
  }
}

export default Homepage;
