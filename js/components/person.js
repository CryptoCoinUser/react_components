import React from 'react';


/* 1.1.4 Sateful
export default class Person extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            highlight: false
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            highlight: !this.state.highlight
        });
    }

    render() {
        const classes = `person ${this.state.highlight ? 'highlight' : ''}`;
        return (
            <div className={classes} onClick={this.onClick}>
                <div className="person-name">{this.props.name}</div>
                <img className="person-img" src={this.props.imageUrl} />
                <div className="person-job">
                    {this.props.job}
                </div>
            </div>
        );
    }
}
*/

/* 1.1.4 with props */
export default function Person(props) {
    return (
        <div className="person">
            <div className="person-name">{props.name}</div>
            <img className="person-img" src={props.imageUrl} />
            <div className="person-job">
                {props.job}
            </div>
        </div>
    );
}


/* 1.1.3
export default function Person(props) {
    const name = 'CryptoCoinUser';
    const imageUrl = "https:\//avatars3.githubusercontent.com/u/6550474?v=3&s=460";  
    const job = 'user of crypto coins';
    return (
        <div className="person">
            <div className="person-name">{name}</div>
            <img className="person-img" src={imageUrl} />
            <div className="person-job">
                {job}
            </div>
        </div>
    );
}
*/

Person.defaultProps = {
    imageUrl: 'http:\//www.gravatar.com/avatar/?d=identicon'
};