import React, { Component } from 'react';
import classNames from 'classnames';

class Button extends Component{
    render(){
        const btnClass = classNames({
            'is-small': this.props.isSmall,
            'is-danger': this.props.isDanger,
            'is-success': this.props.isSuccess,
            'is-rounded my-class': (this.props.isSmall && this.props.isDanger),
            'button': true
        })
        return(
            <div>
                <button className={btnClass}>{this.props.children}</button>
            </div>
        );
    }
}


export default Button;