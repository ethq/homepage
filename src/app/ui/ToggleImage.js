import React from 'react'

/* todo: add loading for gifs */

export default class ToggleImage extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            currentState: this.props.currentState ? this.props.currentState : 1,
            buttonText: this.props.buttonText ? this.props.buttonText : ['start', 'stop']
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick()
    {
        this.setState((state, props) => ({currentState: (state.currentState + 1) % 2}));
    }

    render()
    {
        return (
            <div className={"toggleImage " + this.props.className}>
                <img src={this.props.image[this.state.currentState]} alt={this.props.imageAlt[this.state.currentState]} />
                <div
                    className={this.state.currentState ? 'buttonOn' : 'buttonOff'}
                    onClick={this.handleClick}
                >
                    {this.state.buttonText[this.state.currentState]}
                </div>
            </div>
        );
    }
}
