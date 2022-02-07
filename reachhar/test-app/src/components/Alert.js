import React from 'react';

function Alert({alert}) {
    // const capitalize =  (word)=>{
    //     const lower = word.toLowerCase
    //     return str.chartAt(0).toUppercase + lower.slice(1)
    // } 
    return (

        alert&&<div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
            <strong>{alert.type}:{alert.msg}</strong> 
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    );
}

export default Alert;
