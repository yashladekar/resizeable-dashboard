import React from 'react'
import { Button } from '@/components/ui/button'
import { DatePickerWithRange } from '@/components/atoms/date-picker-with-range'
import { PlusCircle } from 'lucide-react'
function Greeting() {
    return (
        <div className="flex flex-1 flex-col gap-4 ">
            <div className=" h-auto w-full rounded-lg border" >
                <div className='flex p-4 justify-between items-center' >
                    <div>
                        <div className="text-lg font-semibold ">Welcome to the dashboard</div>
                        <div className="text-sm font-semibold ">Today is 12th of December 2021</div>
                    </div>
                    <div className="flex gap-4 items-center">
                        <DatePickerWithRange />
                        <div>
                            <Button>Export <PlusCircle /></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Greeting