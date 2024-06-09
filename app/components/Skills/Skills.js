import React from 'react';
import Mar from '../Mar/Mar';

// Assuming you're importing icons data from a file


const Skills = () => {
    return (
        <div className="w-full overflow-hidden h-96 bg-black">
            <div className='justify-center text-center'><button className='text-white z-50 text-center justify-center font-bold bg-blue-500 px-5 py-1'>Skills</button> {/* Moved the heading here */}</div>

            <div className='mt-10 px-16'>
                <Mar />


            </div>
        </div>
    );
};

export default Skills;
