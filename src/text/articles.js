export default function (props) => {
    return (
        <div>
            <div className="bodyHeader">Me</div>
            <div className="bodyText">
                <div>
                    <p>
                    50% nerd, 50% outdoor maniac. Physics usually tickles my fancy, in particular various aspects
                    of quantum theory. As examples, I like quantum computation, foundational aspects(which I wrote
                    my thesis on) and particle physics. I also find the power of programming fun - whether it's to
                    help me solve problems or to realize ideas. If not stuck in front of a PC, I prefer to spend my
                     time with various kinds of torture devices. Specifically various kinds of bikes, skis, kayaks,
                     tents and sleeping bags.
                    </p>
                    <img src="imgs/eg.jpg" alt="Zak Laberg" />
                </div>
            </div>
        </div>
    );
}

const qfoundations = (props) => {
    return (
        <div>
            <div className="bodyHeader">Me</div>
            <div className="bodyText">
                <div>
                    <p>
                    Quantum mechanics is well understood at a practical level, as evidenced by all the tech that uses it -
                    nuclear reactors, MRI machines, LED lights, to name some examples. But theoretically(and philosopically),
                    there are some disturbing points. One of the features of quantum theory is that systems are allowed
                    to exist in states of multiple potentialities. A quantum car may for example be in a state of either
                    being in Oslo or in Sydney. Exactly where it is located is undetermined until someone looks to check. A big
                    problem is that this looking is not precisely defined theoretically. So - although you can look at the car and it turns up
                    in either Oslo or Sydney, you cannot calculate when it should appear. This sad mismatch between
                    theory and practice is usually referred to as the measurement problem.
                    </p>

                    <p>
                    My thesis was concerned mainly with that problem, and with some pretty unorthodox(read odd) proposed solutions.
                    In essence, the idea was that to precisely define how a system is looked at, it has a small probability of being
                    looked at every single moment in time, the probability being in proportion to the size of the system itself.
                    Then we have a precise definition of 'looking', and it also solves related problems like the fact that everyday
                    cars are not, in fact, in two places at the same time - which vanilla quantum theory in principle allows for.
                    Unfortunately, these solutions have serious drawbacks - for example, they continually infuse energy into the universe.
                    This necessitates the introduction of new quantum fields in nature - which have not been observed - and things get shaky.
                     If you are curious, you can read more in my thesis here.
                    </p>
                </div>
            </div>
        </div>
    );
};

const qturbulence = (props) => {

}

export const articles =
{
    me: me,
    qfoundations: qfoundations,
    qturbulence: qturbulence,
};
