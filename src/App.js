

import React, { Component } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
import Features from './components/features';
import About from './components/about';
import Services from './components/services';
import Gallery from './components/gallery';
import Testimonials from './components/testimonials';
import Team from './components/Team';
import Contact from './components/contact';
import JsonData from './components/data/data.json';
import {Parallax} from "react-parallax/@types/index";

export class App extends Component {
    state = {
        landingPageData: {},
    }
    getlandingPageData() {
        this.setState({landingPageData : JsonData})
    }

    componentDidMount() {
        this.getlandingPageData();
    }

    render() {
        return (
            <div>
                <Navigation />

                <Header data={this.state.landingPageData.Header} />
                <Parallax blur={10} bgImage="012.jpg" bgImageAlt="the cat" strength={200}>
                <Features data={this.state.landingPageData.Features} />
                <About data={this.state.landingPageData.About} />
                <Services data={this.state.landingPageData.Services} />
                <Gallery />

                <Team data={this.state.landingPageData.Team} />
                <Contact data={this.state.landingPageData.Contact} />
                </Parallax>
            </div>
        )
    }
}

export default App;



