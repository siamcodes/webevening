import React, {Component} from 'react';

export default class Home extends Component{
  render(){

    return(
       <div>
        <h1>Home</h1>
        
        <div className="responsive">
           <div className="gallery">     
              <img src="../../assets/pic1.jpg" width="300" height="200"/>
              <div className="desc">
                  รายละเอียดรูปภาพ
              </div>
           </div>
        </div>

        <div className="responsive">
          <div className="gallery">     
              <img src="https://www.sdtc.ac.th/public/activity/small/32786.jpg" width="300" height="200"/>
              <div className="desc">
                  รายละเอียดรูปภาพ
              </div>
           </div> 
        </div>

        <div className="responsive">
          <div className="gallery">     
              <img src="https://www.sdtc.ac.th/public/activity/small/32786.jpg" width="300" height="200"/>
              <div className="desc">
                  รายละเอียดรูปภาพ
              </div>
           </div>  
        </div>

       </div>
    )
  }
}