import React, {Component} from 'react';
import axios from 'axios';

export default class Faq extends Component{

  constructor(props){
    super(props);
    this.state={
      products:[]
    };
  }

  componentDidMount(){
    axios.get('http://localhost:9000/products')
    .then( res => {
      const products = res.data.slice(0,20); 
      this.setState({ products });
    })
  }

  render(){
    return(
       <div>
          <h1>Faq</h1>
          {this.state.products.map(p => 
           <div className="responsive">
             <div className="gallery">
               <img src={ p.url } />
               <h2>{ p.title }</h2>
               <div className="desc">
                  { p.detail }
                </div>
             </div>
           </div>
         )}
           
       </div>
    )
  }
}