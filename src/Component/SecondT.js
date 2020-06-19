import React from 'react';
const SecondT = ({modeName, handleSelect}) => {
    console.log(modeName.id)
    console.log("props")
    return(
        <div className="select">
            {modeName.length === 0 ? (
        ""
        ) : (
            <select defaultValue="default" onChange={(event) =>{handleSelect(event)}}>
            <option value="default" disabled>
                Choose a Line ... 
                </option>
            {modeName.map((line , index) => (
                <option key={index} value={line.name}>
                {line.name}
                </option>
            ))}
            </select>
        )}
        </div>
    )
}
export default SecondT;