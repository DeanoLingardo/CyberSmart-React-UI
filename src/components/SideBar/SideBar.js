/* jshint esversion: 6*/
import React, { Component } from 'react';
import { Icon, Menu } from 'semantic-ui-react';

import { SideBarItem } from '../Exports/Exports';

export default class SideBar extends Component {
    render() {
        return (
            <div>
                <SideBarItem icon = 'dashboard' title = 'Dashboard' />
                <SideBarItem icon = 'home' title = 'Rooms' />
                <SideBarItem icon = 'home' title = 'Devices' />
                <SideBarItem icon = 'info' title = 'Help' />  
            </div>
        )
    }
}
