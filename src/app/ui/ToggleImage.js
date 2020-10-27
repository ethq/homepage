import React from 'react'
import LazyImage from './LazyImage.js'

/* todo: add loading for gifs */

export default class ToggleImage extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            currentState: this.props.currentState ? this.props.currentState : 0,
            buttonText: this.props.buttonText ? this.props.buttonText : ['start', 'stop']
        };

        this.handleClick = this.handleClick.bind(this);

        this.preload();
    }

    preload()
    {
        const im = new Image();
        im.src = this.props.image[(this.state.currentState + 1) % 2];
        im.onload = () => console.log('Preloaded image: ' + im.src);
    }

    handleClick()
    {
        this.setState((state, props) => ({currentState: (state.currentState + 1) % 2}));
    }

    render()
    {
        return (
            <div className={"toggleImage " + this.props.className}>
                <LazyImage src={this.props.image[this.state.currentState]} alt={this.props.imageAlt[this.state.currentState]} width={this.props.width} height={this.props.height} />
                <div
                    className={this.state.currentState ? 'noselect buttonOn' : 'noselect buttonOff'}
                    onClick={this.handleClick}
                >
                    {this.state.buttonText[this.state.currentState]}
                </div>
            </div>
        );
    }
}
