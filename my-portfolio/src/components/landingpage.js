import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
import MyPic from 'C:/Users/devra/Desktop/my-web-portfolio/my-portfolio/src/circle-me.png';
import Pdf from './Resume.pdf';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
          <Grid className="landing-grid">
            <Cell col={12}>
              <img
                src={MyPic}
                alt="avatar"
                className="avatar-img"/>

                <div className="banner-text">
                  <h1>Web & App Developer</h1>

                  <hr/>

                  <p> Android Studio | HTML / CSS  | Java </p>

                  <div className="social-links">

                  {/* LinkedIn*/}
                    <a href="http://linkedin.com/in/devrajsinh-bhati-8a770a168" rel= "noopener noreferrer" target="_blank">
                      <i className ="fa fa-linkedin-square" aria-hidden="true" />
                    </a>

                  {/* GitHub */}
                    <a href="http://google.com" rel= "noopener noreferrer" target="_blank">
                      <i className ="fa fa-github-square" aria-hidden="true" />
                    </a>


                    <a href = {Pdf} target="_blank" rel="noopener noreferrer">
                    <i class="fa fa-file" aria-hidden="true"/> </a>

                  </div>

                </div>
            </Cell>
          </Grid>
      </div>
    )
  }
}

export default Landing;
