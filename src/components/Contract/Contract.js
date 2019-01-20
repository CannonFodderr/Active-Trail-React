import React from'react';

class Contract extends React.Component{
    render(){
        return(
            <div className="ui list celled" style={{width: "fit-content"}}>
                    <h5>תקנון</h5>
                    <li className="item">30% על כל המוצרים מלבד מוצרים ב-Sale Outlet או מהתצוגה.</li>
                    <li className="item">ההטבה תקפה לסניף אשדוד בלבד בשבוע ההשקה.</li>
                    <li className="item"><a href="https://www.halilit.com/contract">בהתאם לתקנון אתר חלילית</a>.</li>
                    <li className="item">ט.ל.ח.</li>
            </div>
        )
    }
}

export default Contract;