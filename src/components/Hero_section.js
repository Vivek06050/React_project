import React from 'react'
import FirstWidget from './FirstWidget'
import SecondWidget from './SecondWidget'
import Line from './Line'

const Hero_section = () => {
    return (
        <div
            className="flex-col w-[680px] h-[520px] lg:ml-[50px] lg:mb-[37px] lg:mt-0 mt-[50px] mb-[90px] "
        >
            <FirstWidget />
            <Line />
            <SecondWidget />
            <Line />
        </div>
    )
}

export default Hero_section
