import React from "react";

const Chart = ({title, dataKey}) => {

    return(
        <div className="chart">
         <h3>{title}</h3>
         chart for {dataKey}
        </div>
    )
}

export default Chart