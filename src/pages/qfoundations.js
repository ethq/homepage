import React from 'react'
import PopLink from '../app/ui/PopLink.js'
import { BlockMath, InlineMath } from 'react-katex'

export default function(props) {

    const mismatch = <span>To be precise: we evolve quantum states under the Schrödinger equation <InlineMath>i\partial_t|\psi\rangle = H|\psi\rangle</InlineMath> until
                    the state is <em>measured</em>, at which point we evolve it according to the collapse postulate - <InlineMath>|\psi\rangle \to |o\rangle</InlineMath>,
                    where <InlineMath>|o\rangle</InlineMath> is some eigenstate of the quantity being measured. We can do this in the lab, because we know that sending
                    e.g. an electron through a magnetic field and smashing it into a screen is equivalent to measuring its spin. But it's not theoretically precise exactly
                    when or how the <em>measurement</em> occurs, so we can't trace the time evolution of the system.</span>;

    const drms = <span>So-called dynamical reduction models, wherein one achieves state reduction by adding a small non-linear term to the Shrödinger equation.
                    It is well known that deterministic non-linear Schrödinger equations cause enormous problems, such as faster-than-light communication, so to avoid this the added
                    term also involves a stochastic coupling. These theories are not very popular in general - both because it isn't clear whether the measurement problem
                    really is a problem, because there are simpler explanations if it is, and because they are &quot;ugly&quot;.
                     Usually fundamental equations in physics stem from some symmetry principle; here the added
                    term is justified by the ends it achieves.</span>

    return (
        <div>
            <div className="bodyHeader baseline">Quantum Foundations</div>
            <div className="bodyText">
                <div>
                    <span>
                    Quantum mechanics is well understood at a practical level, as evidenced by all the tech that uses it -
                    nuclear reactors, MRI machines, LED lights, to name some examples. But theoretically(and philosopically),
                    there are some disturbing points. One of the features of quantum theory is that systems are allowed
                    to exist in states of multiple potentialities. A quantum car may for example be in a state of either
                    being in Oslo or in Sydney. Exactly where it is located is undetermined until someone looks to check. A big
                    problem is that this is <b>not</b> how our cars behave! Another is that this <b>looking</b> is not precisely defined.
                    So - although you <b>can</b> look at the car and it turns up
                    in either Oslo or Sydney, you cannot calculate when it should appear. This sad <PopLink link="mismatch" content={mismatch}/> between
                    theory and practice is usually referred to as the measurement problem.
                    </span>

                    <span>
                    My thesis was concerned mainly with that problem, and with some strange <PopLink link="theories" content={drms}/> that claimed to solve it.
                    In essence, their idea was that to precisely define how a system is looked at, it has a small probability of being
                    looked at every single moment in time, the probability being in proportion to the size of the system itself.
                    Then we have a precise definition of 'looking', and it also solves related problems like the fact that everyday
                    cars cannot, in fact, be in two places at the same time - which regular quantum theory predicts.
                    Unfortunately, these solutions have serious drawbacks - for example, they continually infuse energy into the universe.
                    This necessitates the introduction of fundamentally new quantum fields, which have not yet been observed. While this
                    makes these theories less likely to be true, they remain a possibility. If you are curious, you can find more in my
                      <a target="_blank" rel="noopener noreferrer" href="/files/thesis.pdf"> thesis</a>.
                    </span>
                </div>
            </div>
        </div>
    );
};

/*
todo: fix footer. fix logo. fix title. add some poplinks here. then upload & done.
*/
