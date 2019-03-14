import React from 'react';

class Banner extends React.Component{
    render(){
        return(
            <div>
                <img className="ui large rounded image" src="./assets/Banner.jpg" alt="באנר סניף אשדוד" style={{margin: "auto"}} />
            </div>
        )
    };
};

export default Banner;