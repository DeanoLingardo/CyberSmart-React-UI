/* jshint esversion: 6 */
import React, { Component } from 'react';

import { Dropdown } from 'semantic-ui-react';

export default class MenuIcon extends Component {
    render() {
        return (
            <Dropdown.Item icon = {this.props.icon} text = {this.props.title} />
        )
    }
}
