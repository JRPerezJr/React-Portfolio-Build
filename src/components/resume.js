import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
export default class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
              />
            </div>
            <h2 style={{paddingTop: '2em'}}>Your Name</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum hendrerit 
              justo. Sed felis elit, posuere nec mi euismod, scelerisque iaculis nibh. Sed eu leo 
              scelerisque, pellentesque mauris id, venenatis enim. Suspendisse a diam ut turpis 
              ultrices viverra. Quisque tortor ligula, facilisis sed nisi a, congue dignissim libero. 
              Nulla eget velit ut mi porttitor condimentum.
            </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>1 Hacker Way Menlo Park, 94025</p>
            <h5>Phone</h5>
            <p>(555) 555-1234</p>
            <h5>Email</h5>
            <p>yourname@example.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
              <Education
                startYear={2018}
                endYear={2018}
                schoolName="Coding Dojo"
                schoolDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum hendrerit 
                justo. Sed felis elit, posuere nec mi euismod, scelerisque iaculis nibh. Sed eu leo 
                scelerisque, pellentesque mauris id, venenatis enim. Suspendisse a diam ut turpis 
                ultrices viverra."
              />
              <Education
                startYear={2012}
                endYear={2013}
                schoolName="My University"
                schoolDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum hendrerit 
                justo. Sed felis elit, posuere nec mi euismod, scelerisque iaculis nibh. Sed eu leo 
                scelerisque, pellentesque mauris id, venenatis enim. Suspendisse a diam ut turpis 
                ultrices viverra."
              />
            <hr style={{borderTop: '3px solid #e22947'}}/>
            
            <h2>Experience</h2>
              <Experience
                startYear={2009}
                endYear={2012}
                jobName="First Job"
                jobDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum hendrerit 
                justo. Sed felis elit, posuere nec mi euismod, scelerisque iaculis nibh."
              />
              <Experience
                startYear={2012}
                endYear={2016}
                jobName="Second Job"
                jobDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum hendrerit 
                justo. Sed felis elit, posuere nec mi euismod, scelerisque iaculis nibh."
              />
            <hr style={{borderTop: '3px solid #e22947'}}/>
            
            <h2>Skills</h2>
              <Skills
                skill="JavaScript"
                progress={80}
              />
              <Skills
                skill="HTML5/CSS3"
                progress={90}
              />
              <Skills
                skill="NodeJS"
                progress={60}
              />
              <Skills
                skill="React"
                progress={25}
              />
          </Cell>
        </Grid>
      </div>
    )
  }
}


            