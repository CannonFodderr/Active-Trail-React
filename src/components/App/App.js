import React from 'react';
import Helmet from 'react-helmet';
import Content from '../Content/Content';

class App extends React.Component{
    render(){
        return(
            <div>
                <Helmet title="חלילית הרשמה לסניף אשדוד" />
                <div className="ui container">
                    <Content />
                </div>
            </div>
        )
    }
}


export default App;