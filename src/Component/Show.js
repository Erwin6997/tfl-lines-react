import React from 'react';

const Body = ({showFetch, eventFirst, eventSecond}) => {
    console.log(showFetch)
    console.log("khar");
    if (showFetch === ""){
        return <div>Loading ...</div>
    }else{
    return(
        <div>{showFetch.httpStatusCode === 404 ? 
        (
            <div>
                <h4> "Sorry we didn't found any destination"</h4>
            </div>
        ) : 
        (   <div>
                <h3>Mode Name: {eventFirst}</h3>
                <h3>Line :{eventSecond}</h3>
            <div className="row">
                <div className="blue">
                    <h3>Start of the line :</h3>
                    <br />
                    <div> {showFetch.routeSections[0].originationName}</div>
                </div>
                <div className="blue">
                    <h3>End of the line:</h3>
                    <br />
                    <div>{showFetch.routeSections[0].destinationName}</div>
                </div>
            </div>
            </div>
        )}
        </div>
    )
}
}
export default Body;