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
                <p>Mode Name: {eventFirst}</p>
                <p>Line :{eventSecond}</p>
            <div className="row">
                <div className="blue">
                    <p>Start of the line :</p>
                    <br />
                    <div> {showFetch.routeSections[0].originationName}</div>
                </div>
                <div className="blue">
                    <p>End of the line:</p>
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