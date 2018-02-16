/* jshint esversion: 6*/
import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import { AreaChart, Area } from 'recharts';

export default class Device extends Component {
    render() {
        const data = [
            {name: '13:00', kwh: 2400},
            {name: '13:30', kwh: 1398},
            {name: '14:00', kwh: 9800},
            {name: '14:30', kwh: 3908},
            {name: '15:00', kwh: 4800},
            {name: '15:30', kwh: 3800},
            {name: '16:00', kwh: 4300},
        ];
        
        return (
            <Card>
                <Card.Content>                    
                    <Card.Header>
                    {this.props.name}
                    </Card.Header>
                    <Card.Meta>
                    State: {this.props.state}
                    </Card.Meta>
                    <Card.Description>
                        <AreaChart width={260} height={50} data={data}>
                            <Area type="monotone" dataKey="kwh" stroke="#82ca9d" fillOpacity={0.5} fill="#82ca9d" />
                        </AreaChart>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                    <Button basic color='green'>ON</Button>
                    <Button basic color='red'>OFF</Button>
                    </div>
                </Card.Content>
            </Card>
        )
    }
}
