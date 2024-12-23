
import Greeting from '@/components/molecules/Greeting'
import ChartContainer from '@/components/molecules/ChartContainer'
import React from 'react'
function DashBoardPage() {
    return (
        <div className='p-4 flex-col items-center '>
            <Greeting />
            <div className='px-2 justify-center '><ChartContainer /></div>
        </div>
    )
}

export default DashBoardPage