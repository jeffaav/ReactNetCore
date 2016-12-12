'use strict';

import React from 'React'
 
class Button extends React.Component {
    constructor(props) {
        super(props);
        if (!props.type) 
            props.type = 'button';
        
        if (!props.class) 
            props.class = 'btn-default';
        
    }

    render () {
        return (
            <button id={this.props.id} type={this.props.type} className={`btn ${this.props.class}`} >
                {this.props.text}
            </button>
        );
    }
}