import React, { Component } from "react";
import 'react-gallery-carousel/dist/index.css';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

export class carusel extends Component {
    render() {
        return (
            
            <div className="overlay">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 col-md-offset-2 intro-text">
                  <div class= "carusel">
                  

<AwesomeSlider>
    
    <div claaName="caruselimg"data-src="img/sase3.png" />
    <div data-src="img/SASE2.png" />
    <div data-src="img/sase5.png" />
    <div data-src="img/sase6.png" />
    

</AwesomeSlider>

                  </div>
                </div>
              </div>
            </div>
            </div>
         
            
        );
    }
}
export default carusel;