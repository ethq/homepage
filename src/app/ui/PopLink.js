import React from 'react'

export default class PopLink extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            show: false
        }

        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseOut = this.onMouseOut.bind(this);
    }

    onMouseOut(e)
    {
        this.setState(state => ({show: false}));
    }

    onMouseOver(e)
    {
        this.setState(state => ({show: true}));
    }

    render()
    {
        return (
            <div className="popLink">
                <a
                    href="#"
                    onMouseOver={this.onMouseOver}
                    onMouseOut={this.onMouseOut}
                >
                     {this.props.link}
                </a>
                <span className={"popContent " + (this.state.show ? "showing" : "hidden")}>{this.props.content}</span>
            </div>
        );
    }
}
