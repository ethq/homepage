import React from 'react'
import ToggleImage from '../app/ui/ToggleImage.js'
import PopLink from '../app/ui/PopLink.js'
import { BlockMath, InlineMath } from 'react-katex'
import ReactMarkdown from 'react-markdown/with-html'




export default function(props) {
    const gpeImage = ['/images/gpe2-static.gif', '/images/gpe2.gif'];
    const gpeImageAlt = ['Vortex generation in a superfluid', 'Vortex generation in a superfluid'];

    const vortexImage = ['/images/vortices-static.gif', '/images/vortices.gif'];
    const vortexAlt = ['Vortex motion', 'Vortex motion'];

    const quantizedVortexDesc = <span>This follows from the demand that the superfluid state <InlineMath>\psi</InlineMath> be
        univalued. To see that, it's useful to write the state in polar rep - <InlineMath>\psi = \rho e^\phi</InlineMath>.
        We take the Lagrangian to be that of a massive <InlineMath>\phi^4</InlineMath> field and
        find that global <InlineMath>U(1)</InlineMath> invariance yields a symmetry current
        <InlineMath>\ j \propto \nabla\phi</InlineMath>.
        e.g. the superfluid velocity is proportional to the gradient of the phase(we could also just appeal to the probability
        current). If we now calculate the vorticity <InlineMath>\omega</InlineMath> around some closed curve <InlineMath>\Gamma</InlineMath>, we find
        <InlineMath>\ \omega \propto \oint_\Gamma \nabla\phi\ ds \propto \phi(a) - \phi(a+2\pi) = 2\pi n</InlineMath>, where the last
        equality follows precisely because the phase can differ only by an integer multiple of <InlineMath>2\pi</InlineMath> at some point <InlineMath>a\ </InlineMath>
        if the state <InlineMath>\psi</InlineMath> is to be univalued. </span>

    const onsagerArgument = <span>In condensed form: vortices in a two-dimensional domain can be modelled as a hamiltonian system,
                    with position coordinates<InlineMath>\ x</InlineMath> and <InlineMath>y\ </InlineMath> as conjugate variables.
                    If the vortices are constrained to a volume A, then
                    the total available phase space must be finite. In a finite phase space there must be
                    a point of maximal disorder. If we start with a low-energy configuration and add energy,
                    the vortices will creep towards this maximally disordered state - as expected from the
                    second law of thermodynamics. But if we pass it, the disorder must decrease, and it does this
                    by clustering together vortices that spin in the same direction.</span>;

    return (
        <div>
            <div className="bodyHeader baseline">Quantum Turbulence</div>
            <div className="bodyText">
                <div>
                    <span>
                    Turbulence is probably most related to terrible moments midair. But it is also an unsolved
                    problem in <a target="_blank" rel="noopener noreferrer" href="http://www.ihes.fr/~ruelle/PUBLICATIONS/%5B29%5D.pdf">physics</a> and
                     <a target="_blank" rel="noopener noreferrer" href="https://terrytao.wordpress.com/2007/03/18/why-global-regularity-for-navier-stokes-is-hard/"> math</a>.
                    In short, what makes turbulence hard is the butterfly effect - small changes in the initial data changes the
                    solution dramatically further along in time. Quantum turbulence is a subject where turbulent flows are
                    studied in <i>superfluids</i> - liquids that flow with almost zero resistance(it might as well be called superfluid turbulence - the
                    reason one uses quantum turbulence is that superfluidity is a quantum phenomenon).
                    </span>

                    <span>
                    <ToggleImage className="fr" image={gpeImage} imageAlt={gpeImageAlt} />
                    Although there are of course
                    many reasons to study quantum turbulence, one hope is that it may be used to gain understanding about classical turbulence as well.
                    The benefit of studying the quantum version is that it is easier - at least for fluids cooled close to absolute zero.
                    In that case, the entire fluid will have so little energy as to be in a single state, which can be described
                    by a set of complex numbers - one at each point in space. This description <PopLink link="shows " content={quantizedVortexDesc}/>
                     that the angular momentum(how much the fluid
                    rotates) is quantized. These two features make the model a lot more tractable to work with than classical turbulence, though
                    the governing equations are still nonlinear.
                    To the right you can see an animation of a superfluid being stirred by a quantum spoon. In its wake you see the formation of
                    <i> vortices</i> - quanta of angular momentum. The color denotes fluid density, with red being the most dense. The large
                    ripples are sound waves.
                    </span>


                    <div className="clearMe"/>

                    <span>
                    <ToggleImage className="fl" image={vortexImage} imageAlt={vortexAlt} />
                    During my time as a doctoral student, I spent a lot of time with these superfluids. In particular I looked
                    at the emergence of large-scale structures in fluids confined to some given volume, as predicted by L. Onsager.
                    He gave an elegant <PopLink link="argument " content={onsagerArgument} /> that there must exist an energy threshold above which the <i>order</i> of the
                    fluid must increase. If you look at the animation shown to the left, you see a collection of vortices
                    moving about - each color spinning either clockwise or counter-clockwise. As time goes on, equal vortices(i.e. those that spin in the same direction)
                    gather and create larger vortices - possibly showing the emergence of classical turbulence.

                    </span>
                </div>
            </div>
        </div>
    );
};
