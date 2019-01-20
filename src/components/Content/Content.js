import React from 'react';
import RegForm from '../Form/Form';
import Details from '../Details/Details';
import Banner from '../Banner/Banner';
import Contract from '../Contract/Contract';

class Content extends React.Component{
    render(){
        return(
            <div style={{ direction: "rtl"}}>
                <Banner />
                <Details />
                <RegForm />
                <Contract />
            </div>
        )
    }
}

export default Content;