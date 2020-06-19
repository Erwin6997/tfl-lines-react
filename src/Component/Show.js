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
                    <h3> {showFetch.routeSections[0].originationName}</h3>
                </div>
                <div>
                    <img alt="image" className="logo-img" src="https://imageog.flaticon.com/icons/png/512/25/25426.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" ></img>
                </div>
                <div className="blue">
                    <h3>End of the line:</h3>
                    <br />
                    <h3>{showFetch.routeSections[0].destinationName}</h3>
                </div>
            </div>
            </div>
        )}
        </div>
    )
}
}
export default Body;