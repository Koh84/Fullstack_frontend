import React, {Component} from 'react';
import Header from '../Common/Header';
import image from '../assets/img/header-bg.jpg';

// Re-usable components
import Services from '../Common/Services';
import Portfolio from '../Common/Portfolio';
import About from '../Pages/About';

class Home extends Component {

    render() {
        return(
            <div>
                <Header 
                    title="Welcome To Our Studio!"
                    subtitle="IT'S NICE TO MEET YOU"
                    buttonText="Tell me more"
                    link="/services"
                    showButton={true}
                    image={image}
                />
                <Services/>
                <Portfolio/>
                <About/>
            </div>
        )
    }
}

export default Home