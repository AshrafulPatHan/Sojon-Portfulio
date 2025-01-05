import React, { useEffect, useState } from 'react';
import skills from './Data.json';


const Skills = () => {
    const [skill,setskill] = useState([])
    
    useEffect( () =>{
        setskill(skills);
        fetch (skills)
        .then (res => res.json() )
        .then (data => setskill(data))
    } , [] )

    return (
        <div className='flex flex-col items-center mt-3 mb-8'>
            <div className='bitter-Title'>
                <h2 className='text-lg md:text-2xl font-semibold text-green-600 '>
                    Skills
                </h2>
            </div>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-7   '>
                    {
                        skill.map( skill =>(
                            <div key={skill.id}  >
                                <div className="card bg-base-100 mt-4 mb-4 w-[290px] md:w-96 shadow-xl">
                                    <figure>
                                        <img
                                            className='h-[260px]'
                                            src={skill.image}
                                            alt="Shoes" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{skill.Skill}</h2>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;