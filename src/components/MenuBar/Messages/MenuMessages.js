/* jshint esversion: 6*/
import React, { Component } from 'react';

import { Message } from 'semantic-ui-react';

export default class MenuMessages extends Component {
    render() {
        return (
            <Message>            
                <p>
                    {this.props.message}
                </p>
            </Message>
        )
    }
}
