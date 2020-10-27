import React from 'react'
import ToggleImage from '../app/ui/ToggleImage.js'

export default function(props) {
    const cubeImage = ['/images/cubes-static.png', '/images/cubes.gif'];
    const cubeImageAlt = ['Vortex generation in a superfluid', 'Vortex generation in a superfluid'];

    return (
        <div>
            <div className="bodyHeader baseline">Rendering</div>
            <div className="bodyText">
                <div>
                    <span><ToggleImage className="fr" image={cubeImage} imageAlt={cubeImageAlt} width={339} height={171} />
                    I always enjoy deepening my understanding. I also really like making games. Years ago, I made
                    these in Flash. When I felt I had exhausted the possibilities of Flash, I was tempted to learn
                    how to write my own rendering code. Back then, it was too tough for me. But in the last year I
                    thought it was time to pick it up again, and this time I've had more success. To the right you can see
                    a demo of my rendering engine, showing dynamic point light shadows.

                    Unfortunately, that's where it stopped, as the bottomless pit of features I wanted for my game
                    led me to Unity, which in turn led me to design art assets. I am a terrible artist, so that has
                    put a momentary stop to things.
                    </span>
                </div>
            </div>
        </div>
    );
};
