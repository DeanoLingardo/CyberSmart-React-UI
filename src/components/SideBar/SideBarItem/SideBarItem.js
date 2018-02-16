/* jshint esversion: 6*/
import React, { Component } from 'react';
import { Item, Icon } from 'semantic-ui-react';

export default class SideBarItem extends Component {
    render() {
        return (            
            <Item>
                <Item.Content verticalAlign='middle'>
                    <Item.Header>
                    <Icon name={this.props.icon} />
                    {this.props.title}
                    </Item.Header>
                </Item.Content>
            </Item>      
        )
    }
}
