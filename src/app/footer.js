import React from 'react'
import { BlockMath, InlineMath } from 'react-katex'

export default class Footer extends React.Component
{
    render()
    {
        return (
            <div id="footer">
                <div><InlineMath>i\partial_t\psi = H\psi</InlineMath></div>
            </div>
        );
    }
}
