import React from 'react';
import ShoulderSquatPress from "./exercises/ShoulderSquatPress";
import CurlandExtension from "./exercises/CurlandExtension";

function WorkoutOptions() {
    return (
        <div className="container-fluid">
            <div className="row">
                <ShoulderSquatPress />
                <CurlandExtension />
            </div>            
        </div>        
    )
}

export default WorkoutOptions;