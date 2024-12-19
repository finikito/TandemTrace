import React from 'react'

import Chart from '@components/Chart'
import FilterBar from '@components/FilterBar'
import SearchableList from '@components/SearchableList'


const Home = () => {


    return(
    <div>
        <FilterBar/>
        <div>
            <Chart title="Total Events Over Time" dataKey="totalEvents" />
            <Chart title="Unique SourceIP Over Time" dataKey="sourceIPs" />
            <Chart title="Unique DestinationIP Over Time" dataKey="destinationIP" />
            <Chart title="Unique DestinationPort Over Time" dataKey="destinationPort" />
        </div>
        <div>                
            <SearchableList title="SourceIp" dataKey="SourceIp" />
            <SearchableList title="DestinationIp" dataKey="DestinationIp" />
            <SearchableList title="DestinationPort" dataKey="DestinationPort" />
        </div>
    </div>
    )
}

export default Home