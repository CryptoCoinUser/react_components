require('babel-polyfill');

import React from 'react';
import ReactDOM  from 'react-dom';


/* 1.1.6 2nd */

export class FlashCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            english: 'Grapefruit',
            french: 'Pamplemousse',
            selected: 'english'
        };
        this.onCardClick = this.onCardClick.bind(this);
    }

    onCardClick() {
        if (this.state.selected === 'english') {
            this.setState({
                selected: 'french'
            });
        }
        else {
            if (this.state.selected === 'french') {
                this.setState({
                    selected: 'english'
                });
            }
        }
    }

    render() {
        return <Card text={this.state[this.state.selected]}
                     onClick={this.onCardClick} />;
    }
}

export function Card(props) {
    const style = {
        border: '1px solid black',
        height: '100px',
        lineHeight: '100px',
        width: '300px',
        textAlign: 'center',
        fontSize: '2em'
    };
    return (
        <div onClick={props.onClick} style={style}>
            {props.text}
        </div>
    );
}

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(<FlashCard />, document.getElementById('app'))
);

 
