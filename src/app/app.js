import React from 'react'
import {
    Switch,
    Route,
    Link,
    withRouter
} from 'react-router-dom'
import Helmet from 'react-helmet'

import Me from '../pages/me.js'
import QuantumFoundations from '../pages/qfoundations.js'
import QuantumTurbulence from '../pages/qturbulence.js'
import ReactP from '../pages/learningreact.js'
import Rendering from '../pages/rendering.js'

import Footer from './footer.js'

class Button extends React.Component
{
    render()
    {
        return (
            <div className={"button " + this.props.className} onClick={this.props.onClick}>
                {this.props.name}
            </div>
        )
    }
}


class Subnav extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state =
        {
            isSingular: props.links.length === 1
        };
    }

    render()
    {
        const links = this.props.links.map(link =>
            <li key={link.href}><Link to={link.href}>{link.text}</Link></li>
        );

        const subnavContent = (this.props.isExtended && !this.state.isSingular ?
            <ul className="subNavContent">{links}</ul> : null);


        return (
            <div className="subNav noselect">
                <Button
                    onClick={this.props.onClick}
                    name={this.props.buttonName}
                    className={this.props.isExtended ? "buttonSelected" : "buttonUnselected"}
                />
                {subnavContent}
            </div>
        )
    }
}

class Nav extends React.Component
{
    constructor(props)
    {
        super(props);

        this.navClicked = this.navClicked.bind(this);
        this.subnavClicked = this.subnavClicked.bind(this);

        this.state = {
            isExtended: {
                "Me": false,
                "Physics": false,
                "Projects": false
            }
        };



    }

    subnavClicked(extKey)
    {
        this.setState((state, props) => {
            let newExtState = {};
            for(const [key] of Object.entries(state.isExtended))
            {
                if (key === extKey) {
                    newExtState[key] = !state.isExtended[key]
                }
                else newExtState[key] = false;
            }
            return { isExtended: newExtState };
        });
    }

    navClicked(extKey, href)
    {
        this.props.history.push('/');
        this.subnavClicked(extKey);
    }

    render()
    {
        const physicsLinks = [
            {
                href: "/physics/quantum-foundations",
                text: "Quantum foundations"
            },
            {
                href: "/physics/quantum-turbulence",
                text: "Quantum turbulence"
            },
        ];

        const projectsLinks = [
            {
                href: "/projects/3d-rendering",
                text: "3D Rendering",
            },
            {
                href: "/projects/react",
                text: "React"
            },
        ];

        const meLinks = [
            {
                href: "/",
                text: "Me"
            },
        ];

        return (
            <nav>
                <Subnav buttonName="Me"
                        key="Me"
                        links={meLinks}
                        isExtended={this.state.isExtended["Me"]}
                        onClick={() => this.navClicked("Me", meLinks.href)}
                />
                <Subnav buttonName="Physics"
                        key="Physics"
                        links={physicsLinks}
                        isExtended={this.state.isExtended["Physics"]}
                        onClick={() => this.subnavClicked("Physics")}
                />
                <Subnav buttonName="Projects"
                        key="Projects"
                        links={projectsLinks}
                        isExtended={this.state.isExtended["Projects"]}
                        onClick={() => this.subnavClicked("Projects")}
                />
            </nav>
        )
    }
}
Nav = withRouter(Nav);

class Body extends React.Component
{
    render()
    {
        return (
            <div id='body'>
            <Switch>
                <Route exact path="/" component={Me}/>
                <Route exact path="/physics/quantum-foundations" component={QuantumFoundations}/>
                <Route path="/physics/quantum-turbulence">
                    <QuantumTurbulence />
                </Route>
                <Route path="/projects/3d-rendering">
                    <Rendering />
                </Route>
                <Route path="/projects/react">
                    <ReactP />
                </Route>
            </Switch>
            </div>
        )
    }
}

export default class App extends React.Component
{
    componentDidMount()
    {
        const url = "//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css";
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = url;
        document.getElementsByTagName('head')[0].appendChild(
            link
        );
    }

    render()
    {
        return (
            <>
                <Helmet>
                    <title>The Dismal Downs</title>
                </Helmet>
                <Nav />
                <Body />
                <Footer />
            </>
        )
    }
};
