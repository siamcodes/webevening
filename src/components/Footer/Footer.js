import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Footer extends Component{
  render(){
    return(
       <div>
           CopyRight@2018 โดย อาจารย์สมเกียรติ  ใจดี
           <br/>
           <Link to="/"> Home </Link> |
           <Link to="/about"> About </Link> |
           <Link to="/faq"> Faq </Link> |
           <Link to="/contact"> Contact </Link> |
       </div>
    )
  }
}