import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
           <Cell col={4}>
              <div style={{textAlign: 'center'}}>
                <img
                  src="http://murch.one/wp-content/uploads/2016/01/ChibiAvatar.png"
                  alt="avatar"
                  style={{height: '200px'}}
                />
              </div>

              <h2 style={{paddingTop: '2em'}}>Devraj Bhati</h2>
              <h4 style={{color: 'grey'}}>Programmer</h4>
              <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
              <p>Mhmmmmmm</p>
              <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
              <h5>Address</h5>
              <p>1 Hacker Way Menlo Park, 94025</p>
              <h5>Phone</h5>
              <p>(647) 500 - 8941</p>
              <h5>Email</h5>
              <p>dbhati@uwaterloo.ca</p>
              <h5>Web</h5>
              <p>mywebsite.com</p>
              <hr style = {{borderTop: '3px solid #833fb2', width: '50%'}}/>
           </Cell>
           <Cell className= "resume-right-col" col={8}>
              <h2>&emsp;Education</h2>


              <Education
                startYear={2019}
                endYear={2023}
                schoolName="University of Waterloo"
                schoolDescription="Computer Science"
                  />




                    <hr style = {{borderTop: '3px solid #e22947'}} />

                    <h2>&emsp;Skills</h2>

                  <Experience
                    jobName="First Job"
                    jobDescription="*Languages: Java, C, HTML, CSS"
                    />

                    <Experience

                    jobName="First Job"
                    jobDescription="I was gone"
                    />
                    <hr style = {{borderTop: '3px solid #e22947'}} />

                    <h2>Skills</h2>

                    <Skills/>

           </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
