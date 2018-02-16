/* jshint esversion: 6*/
import React, { Component } from 'react';
import { Sidebar, Segment, Menu, Card } from 'semantic-ui-react';
import { Scrollbars } from 'react-custom-scrollbars';

//Custom imports
import { MenuBar, CustomSideBar, DeviceWidget } from './components/Exports/Exports';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false }
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility() {
      this.setState({ visible: !this.state.visible })
  }

  render() {
    return (     
        <div className = "App">        
            <MenuBar toggleVisibility = {this.toggleVisibility} />   
            <Scrollbars 
              autoHeight
              autoHeightMax={1000}>       
                <Sidebar.Pushable as={ Segment }>        
                  <Sidebar as={Menu} animation='slide out' direction='left' width='wide' visible={this.state.visible} icon='labeled' vertical inverted>            
                    <CustomSideBar />          
                  </Sidebar>
                  <Sidebar.Pusher>             
                        <header className="App-header">
                          <Card.Group>
                            <DeviceWidget name = "Living Room Light" state = "OFF"/>
                            <DeviceWidget name = "Kitchen Light" state = "ON"/>
                          </Card.Group>
                        </header>
                  </Sidebar.Pusher>
                </Sidebar.Pushable> 
            </Scrollbars>     
        </div> 
      
    );
  }
}

export default App;
