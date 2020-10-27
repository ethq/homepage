// Minimal lazyloading component, prevents reflow on load.

import React, {useState, useEffect} from 'react'

export default function({src, alt, width, height}) {

    const getGcd = (a,b) => {
        if (b === 0) return a;
        return getGcd(b, a % b);
    }

    const gcd = getGcd(width, height);

    const ratioW = width / gcd;
    const ratioH = height / gcd;

    // Note urlescaping of <># etc. Set style="background: %23484a59" to make viewbox visible, but more elegant to not have it there I think.
    const placeholder = `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 ${ratioW} ${ratioH}"%3E%3C/svg%3E`;
    const [source, setSource] = useState(placeholder);
    const [fade, setFade] = useState('lazyimage');

    const fadeIn = () =>
    {
        setSource(src);
        setFade('fadein');
    }

    useEffect(() => {
        const img = new Image(); // Basically createElement
        img.src = src;
        img.onload = () => fadeIn();
    }, [src]);
    // Optimization. Effects run on re-render, and so this might run even if image is loaded. If [src] is unchanged between renders(as it will be), effect is not re-run. Effectively just componentDidMount.

    return (
        <>
            <img className={fade} src={source} alt={alt} />
        </>
    );
}
