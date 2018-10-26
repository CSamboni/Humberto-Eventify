import React from 'react';

const Eventify = 'https://res.cloudinary.com/cristiansam/image/upload/v1540509059/Eventify/Eventif' +
        'y.png';
const Header = () => {
    return (
        <header className="uk-margin" uk-margin="true">
            <div className="uk-text-center">
                <img
                    style={{
                    'width': '15%',
                    'height': '15%'
                }}
                    src={Eventify}
                    alt="Eventify logo presentation"/>
            </div>
            <h1 className="uk-text-center">Eventify</h1>
        </header>
    );
};
export default Header;
