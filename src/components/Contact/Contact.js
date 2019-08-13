import React, {Component} from 'react';
import axios from 'axios';

export default class Contact extends Component{

  constructor(props){
    super(props);
    this.state={
      members:[]
    };
  }

  componentDidMount(){
    axios.get('http://localhost:9000/members')
    .then( res => {
      const members = res.data; 
      this.setState({ members });
    })
  }

  render(){
    return(
       <div>
           <h1>Contact</h1>
            {this.state.members.map(mem => 
              <div>
                 {mem.firstname}  {mem.lastname}
              </div>
            )}
       </div>
    )
  }
}