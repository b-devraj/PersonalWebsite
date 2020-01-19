import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import MyPic from 'C:/Users/devra/Desktop/my-web-portfolio/src/circle-me.png';


class Contact extends Component {
  render() {
    return(
      <div className ="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
              <h2>Devraj Bhati</h2>
              <img
                  src={MyPic}
                  alt="avatar"
                  style={{height: '250px'}}
                  />

                  <p style={{ width: '75%' , margin: 'auto', paddingTop: '1em'}}>
                  I'm always willing to talk and meet new people! Feel free to reach out to me by
                  <a href="mailto:dbhati@uwaterloo.ca">&nbsp;sending me an email!</a>
                  </p>

          </Cell>

          <Cell col={6}>
            <h2>Contact</h2>
            <hr/>

            <div className= "contact-list">
            <List>
                <ListItem>
                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Lexend Exa'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                          (647) 550-8941
                    </ListItemContent>
                </ListItem>

                <ListItem>
                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Lexend Exa'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    dbhati@uwaterloo.ca
                    </ListItemContent>
                </ListItem>
          </List>
          </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
