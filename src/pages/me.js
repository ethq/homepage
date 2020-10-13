import React from 'react'

export default function(props) {
    return (
        <div>
            <div className="bodyHeader baseline">Me</div>
            <div className="bodyText">
                <div>
                    <span className="fl">
                    50% nerd, 50% outdoor maniac. Physics usually tickles my fancy, in particular various aspects
                    of quantum theory. As examples, I like quantum computation, foundational aspects(which I wrote
                    my thesis on) and particle physics. I also find the power of programming fun - whether it's to
                    help me solve problems(artificial and otherwise) or to realize my ideas. If not stuck in front of a PC, I prefer to spend my
                     time with various kinds of torture devices. Specifically various kinds of bikes, skis, kayaks,
                     tents and sleeping bags.
                    </span>
                    <img className="fr" src="/images/eg.jpg" alt="Zak Laberg" />

                    <span>If you'd like to get in touch, you can reach me at <b>zak.laberg@gmail.com</b> or <b>902 38 791</b>.</span>
                </div>
            </div>
        </div>
    );
};
