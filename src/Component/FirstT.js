import React from 'react';
const FirsT = (props) => {
    
    return(
        <div className="select-mode">
            <select defaultValue="default" 
                onChange={(event) =>{props.handleSelectValue(event)}}>
                <option value="default" disabled>
                Select mode ...
                </option>
            {props.data.map((mode, index) => (
                <option key={index} value={mode.modeName}>
                {mode.modeName}
                </option>
        ))}
            </select>
        </div>
    )
}
export default FirsT;