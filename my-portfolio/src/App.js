import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import Pdf from './components/Resume.pdf';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>


        <Header className="header-color" href="Devraj Bhati" scroll>
        <h> <a className = "my-name" href = "/" stlye="color: white"> Devraj Bhati </a> </h>

            <Navigation>
                {/*<Link to="/resume">Resume</Link>*/}
                <div>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
      &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</div>
                <a href = {Pdf} className="resume-title" target="_blank" rel="noopener noreferrer">Resume</a>
                <Link to="/projects" className="project-title">Projects</Link>
                <Link to="/aboutme" className="about-title">About Me</Link>
                <Link to="/contact" className="contact-title">Contact</Link>
            </Navigation>

        </Header>

        <Drawer title="Devraj Bhati">
            <Navigation>
                <a href = {Pdf} className="resume-title" target="_blank" rel="noopener noreferrer">Resume</a>
                <Link to="/projects">Projects</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
