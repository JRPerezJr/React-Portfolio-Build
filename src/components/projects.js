import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '350px', background:
          'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center / cover'}}>React Project #1</CardTitle>
          <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum hendrerit justo. Sed felis elit, posuere nec mi euismod, scelerisque iaculis nibh. Sed eu leo scelerisque, pellentesque mauris id, venenatis enim. Suspendisse a diam ut turpis ultrices viverra.
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>CodePen</Button>
            <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '350px', background:
          'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center / cover'}}>React Project #1</CardTitle>
          <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum hendrerit justo. Sed felis elit, posuere nec mi euismod, scelerisque iaculis nibh. Sed eu leo scelerisque, pellentesque mauris id, venenatis enim. Suspendisse a diam ut turpis ultrices viverra.
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>CodePen</Button>
            <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '350px', background:
          'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center / cover'}}>React Project #1</CardTitle>
          <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum hendrerit justo. Sed felis elit, posuere nec mi euismod, scelerisque iaculis nibh. Sed eu leo scelerisque, pellentesque mauris id, venenatis enim. Suspendisse a diam ut turpis ultrices viverra.
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>CodePen</Button>
            <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        
        </div>
      )
    }else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: 'black', height: '350px', background:
          'url(https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg) center / cover'}}>Angular Project #2</CardTitle>
          <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum hendrerit justo. Sed felis elit, posuere nec mi euismod, scelerisque iaculis nibh. Sed eu leo scelerisque, pellentesque mauris id, venenatis enim. Suspendisse a diam ut turpis ultrices viverra.
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>CodePen</Button>
            <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: 'black', height: '350px', background:
          'url(https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg) center / cover'}}>Angular Project #2</CardTitle>
          <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum hendrerit justo. Sed felis elit, posuere nec mi euismod, scelerisque iaculis nibh. Sed eu leo scelerisque, pellentesque mauris id, venenatis enim. Suspendisse a diam ut turpis ultrices viverra.
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>CodePen</Button>
            <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: 'black', height: '350px', background:
          'url(https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg) center / cover'}}>Angular Project #2</CardTitle>
          <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum hendrerit justo. Sed felis elit, posuere nec mi euismod, scelerisque iaculis nibh. Sed eu leo scelerisque, pellentesque mauris id, venenatis enim. Suspendisse a diam ut turpis ultrices viverra.
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>CodePen</Button>
            <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        </div>
      )
    }else if(this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: 'black', height: '220px', background:
          'url(https://spring.io/img/homepage/icon-spring-cloud.svg) center / cover'}}>Java Project #3</CardTitle>
          <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum hendrerit justo. Sed felis elit, posuere nec mi euismod, scelerisque iaculis nibh. Sed eu leo scelerisque, pellentesque mauris id, venenatis enim. Suspendisse a diam ut turpis ultrices viverra.
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>CodePen</Button>
            <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: 'black', height: '220px', background:
          'url(https://spring.io/img/homepage/icon-spring-cloud.svg) center / cover'}}>Java Project #3</CardTitle>
          <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum hendrerit justo. Sed felis elit, posuere nec mi euismod, scelerisque iaculis nibh. Sed eu leo scelerisque, pellentesque mauris id, venenatis enim. Suspendisse a diam ut turpis ultrices viverra.
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>CodePen</Button>
            <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: 'black', height: '220px', background:
          'url(https://spring.io/img/homepage/icon-spring-cloud.svg) center / cover'}}>Java Project #3</CardTitle>
          <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum hendrerit justo. Sed felis elit, posuere nec mi euismod, scelerisque iaculis nibh. Sed eu leo scelerisque, pellentesque mauris id, venenatis enim. Suspendisse a diam ut turpis ultrices viverra.
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>CodePen</Button>
            <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        </div>
      )
    }else if(this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: 'black', height: '350px', background:
          'url(https://cdn-images-1.medium.com/max/449/1*NRCOyVBY6Jiqr4Q9A1zoaQ.png) center / cover'}}>MongoDB Project #4</CardTitle>
          <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum hendrerit justo. Sed felis elit, posuere nec mi euismod, scelerisque iaculis nibh. Sed eu leo scelerisque, pellentesque mauris id, venenatis enim. Suspendisse a diam ut turpis ultrices viverra.
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>CodePen</Button>
            <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: 'black', height: '350px', background:
          'url(https://cdn-images-1.medium.com/max/449/1*NRCOyVBY6Jiqr4Q9A1zoaQ.png) center / cover'}}>MongoDB Project #4</CardTitle>
          <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum hendrerit justo. Sed felis elit, posuere nec mi euismod, scelerisque iaculis nibh. Sed eu leo scelerisque, pellentesque mauris id, venenatis enim. Suspendisse a diam ut turpis ultrices viverra.
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>CodePen</Button>
            <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: 'black', height: '350px', background:
          'url(https://cdn-images-1.medium.com/max/449/1*NRCOyVBY6Jiqr4Q9A1zoaQ.png) center / cover'}}>MongoDB Project #4</CardTitle>
          <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum hendrerit justo. Sed felis elit, posuere nec mi euismod, scelerisque iaculis nibh. Sed eu leo scelerisque, pellentesque mauris id, venenatis enim. Suspendisse a diam ut turpis ultrices viverra.
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>CodePen</Button>
            <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        </div>
      )
    }

  }
  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
        <Tab>React</Tab>
        <Tab>Angular</Tab>
        <Tab>Java</Tab>
        <Tab>MongoDB</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
          <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    )
  }
}