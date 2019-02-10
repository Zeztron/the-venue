import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe 
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d428881.3359680187!2d-97.28450996175197!3d32.881363869974585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c2761a12909ad%3A0x4f1a339a454692ad!2sDallas+Aquarium+Kings!5e0!3m2!1sen!2sus!4v1549816847051" 
                width="100%" 
                height="500px" 
                frameBorder="0"  
                allowFullScreen>
            </iframe>
            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;