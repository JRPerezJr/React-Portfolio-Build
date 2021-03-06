import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
        <Cell col={6}>
          <h2>Your Name</h2>
          <img
            src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
            alt="avatar"
            style={{height: '250px'}}
            />
            <p
              style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum hendrerit justo. Sed felis elit, posuere nec mi euismod, scelerisque iaculis nibh. Sed eu leo scelerisque, pellentesque mauris id, venenatis enim. Suspendisse a diam ut turpis ultrices viverra.</p>
        </Cell>
        <Cell col={6}>
          <h2>Contact Me</h2>
          <hr/>
          <div className="contact-list">
          <List>
            <ListItem>
              <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                <i className="fa fa-phone-square" aria-hidden="true"/>
                (555) 555-1234
              </ListItemContent>
            </ListItem>
            <ListItem>
              <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                <i className="fa fa-fax" aria-hidden="true"/>
                (555) 555-1234
              </ListItemContent>
            </ListItem>
            <ListItem>
              <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                <i className="fa fa-envelope" aria-hidden="true"/>
                yourname@example.com
              </ListItemContent>
            </ListItem>
            <ListItem>
              <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                <i className="fa fa-skype" aria-hidden="true"/>
                MySkypeID
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
