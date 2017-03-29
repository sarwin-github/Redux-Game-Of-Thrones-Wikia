import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';


class Sidebar extends Component{
  render(){
    return(
    <StickyContainer style={{zIndex: 3}}>
      <Sticky>
        <img src="http://tvshowfanz.com/wp-content/uploads/2016/04/iPhone-6-6-Plus-6S-3D-Print-Cases-%E2%80%93-Game-Of-Thrones-350x350.jpg" className="image-responsive thumbnail" style={{'width': '300px'}}/>
      </Sticky>
      <Sticky>
        <img src="http://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/U-AAAOSwHMJYIPHy/$_1.JPG" className="image-responsive thumbnail" style={{'width': '300px'}}/>
      </Sticky>
      <Sticky>
        <img src="http://is1.mzstatic.com/image/thumb/Music6/v4/42/b5/2d/42b52d07-b2c4-66ed-8fc1-2747253a2149/source/400x400-75.jpg" className="image-responsive thumbnail" style={{'width': '300px'}}/>
      </Sticky>
    </StickyContainer>
    );
  }
}

export default Sidebar;

