import React from 'react';

const Body = ({showFetch, eventFirst, eventSecond}) => {
    if(!showFetch){
        return null;
    }else{       
    return(
        <div>
            <p>Mode Name: {eventFirst}</p>
            <p>Line :{eventSecond}</p>
            <div className="row">
            <div className="blue">
                <p>Start of the line :</p>
                <br />
                <p> {showFetch.name}</p>
            </div>

            <div className="blue">
                <p>End of the line:</p>
                <br />
                {/* <p>{showFetch.created}</p> */}
            </div>
            </div>
        </div>
    )}
}
export default Body;