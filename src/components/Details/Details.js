import React from 'react';

class Details extends React.Component{
    renderDetails = () => {
        return (
            <div style={{textAlign: "center"}}>
                <h1>חלילית מגיעה לאשדוד!</h1>
                <h3>קבלו <span style={{color: "#db012d", fontFamily: "arial"}}>30%</span> הנחה בשבוע הפתיחה של <span style={{color: "#db012d", fontWeight: "800", fontSize: "1.5rem", fontFamily: "arial"}}>סניף אשדוד</span></h3>
                <p style={{fontSize: "1.2rem"}}> בשבועות הקרובים ייפתח הסניף החדש <span style={{color: "#db012d", fontWeight: "800", fontSize: "1.5rem", fontFamily: "arial"}}>בגן העיר</span> ואנו מזמינים אתכם לקבל הטבה בלעדית לשבוע ההשקה .</p>
                <p style={{fontSize: "1.2rem", fontWeight: "800"}}>הרשמו עכשיו ונעדכן אתכם עם תחילת המבצע</p>
            </div>
        )
    }
    render(){
        return(
            <div>
                {this.renderDetails()}
            </div>
        )
    };
};

export default Details;