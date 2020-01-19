import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state= { activeTab: 0};
  }

toggleCategories() {

  if(this.state.activeTab === 0){
    return(

      <div className ="projects-grid">

      {/*Project 1*/}

      <Card shadow={5} style= {{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '300px', background:
          'url(https://i.pinimg.com/originals/cd/a2/08/cda2081dfd2b1af5c0444a032294965c.png) center / cover'}}>
          StayFit Daily</CardTitle>

          <CardText>
            A Fitness app designed to help guide users through a variety of daily workouts.
          </CardText>

          <CardActions border>
            <Button colored a href = "https://github.com/b-devraj/stayFit" target="_blank">GitHub</Button>
          </CardActions>
      </Card>

<div> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; </div>

      {/*Project 2*/}

      <Card shadow={5} style= {{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '300px', background:
          'url(https://i.pinimg.com/originals/cd/a2/08/cda2081dfd2b1af5c0444a032294965c.png) center / cover'}}>
          Connect 4</CardTitle>

          <CardText>
            A two player Connect 4 game created for PC using Java.
          </CardText>

          <CardActions border>
            <Button colored a href = "https://github.com/b-devraj/connect4" target="_blank" >GitHub</Button>
          </CardActions>
      </Card>

<div> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  </div>

      {/*Project 3*/}

      <Card shadow={5} style= {{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '300px', background:
          'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBtg2SesPrw9p95hpAQ0bW5wq5hVBPOsZFn6yjaghMmYKmzB1s&s) center / cover'}}>
          Student Planner</CardTitle>

          <CardText>
            A planning app which helps students stay on top of their work.
          </CardText>

          <CardActions border>
            <Button colored a href = "https://github.com/b-devraj/studentPlanner" target="_blank" >GitHub</Button>
          </CardActions>
      </Card>


      </div>
    )
  }
}


  render() {
    return(
      <div className ="category-tabs">


        <section className = "projects-grid">
        <Grid>
            <Cell col={12}>
                <div className="content">{this.toggleCategories()}</div>
            </Cell>
        </Grid>
        </section>
      </div>
    )
  }
}

export default Projects;
