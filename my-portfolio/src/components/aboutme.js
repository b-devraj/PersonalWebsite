import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'react-mdl';
import HikingPic from 'C:/Users/devra/Desktop/my-web-portfolio/my-portfolio/src/hiking2.jpg';
import VolleyballPic from 'C:/Users/devra/Desktop/my-web-portfolio/my-portfolio/src/volleyball.jpg';
import FamilyPic from 'C:/Users/devra/Desktop/my-web-portfolio/my-portfolio/src/Family.jpg';
import EatingPic from 'C:/Users/devra/Desktop/my-web-portfolio/my-portfolio/src/eating.jpg';

class About extends Component {
  render() {
    return(

      <div className ="projects-grid">

      <div className="top-element-formatting" style= {{marginTop: 575}}> </div>



      <Card shadow={5} style= {{minWidth: '450', margin: 'auto' , background: 'white'}}>
      <CardTitle className="vball-title" style={{align: 'right'}}> I &#60;3 Volleyball </CardTitle>
          <CardTitle style={{color: 'black', height: '300px', background: 'white'}}>
          <img
              src={VolleyballPic}
              alt="avatar"
              style={{height: '250px'}}
              />
          </CardTitle>
          <CardText className="vball-text">
            I have been playing competitive volleyball since the age of 8 and don't plan on stopping anytime soon! I love bonding with my teammates and
            training hard to compete.
          </CardText>
      </Card>



      <Card shadow={5} style= {{minWidth: '450', margin: 'auto' , background: 'white'}}>
      <CardTitle className="explore-title" style={{align: 'right'}}> I &#60;3 Exploring the Outdoors </CardTitle>
          <CardTitle style={{color: 'black', height: '375px', background: 'white'}}>
          <img
              src={HikingPic}
              alt="avatar"
              style={{height: '250px'}}
              class="rotateimg180"
              align= "center"
              />
          </CardTitle>
          <CardText className="explore-text">
          I enjoy going out into the wild and exploring! The picture above is from my trek in the Himalayas this past summer.
          </CardText>
      </Card>


      <Card shadow={5} style= {{minWidth: '450', margin: 'auto' , background: 'white'}}>
      <CardTitle className="family-title" style={{align: 'right'}}> I &#60;3 Family </CardTitle>
          <CardTitle style={{color: 'black', height: '300px', background: 'white'}}>
          <img
              src={FamilyPic}
              alt="avatar"
              style={{height: '250px'}}
              width="95%"
              />
          </CardTitle>
          <CardText className="family-text">
            Nothing makes me happier than spending time with my family and friends. I love experiencing new things with them and having a good laugh.
          </CardText>
      </Card>


      <Card shadow={5} style= {{minWidth: '450', margin: 'auto' , background: 'white'}}>
      <CardTitle className="food-title" style={{align: 'right'}}> I &#60;3 Food </CardTitle>
          <CardTitle style={{color: 'black', height: '320px', background: 'white'}}>
          <img
              src={EatingPic}
              alt="avatar"
              style={{height: '250px'}}
              width="100%"
              class="rotateimg180"
              align= "center"
              />
          </CardTitle>
          <CardText className="food-text">
            If you ever wondered what gift you should get me, don't. Food is more than enough!
          </CardText>
      </Card>


      </div>
    )
  }
}

export default About;
