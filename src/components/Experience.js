import { useState } from 'react'
import Image from 'next/image'

import experienceData from '@/data/experience.json';

const Experience = () => {
    const [isExperience, setIsExperience] = useState(true);

    return (
    <div className="flex flex-col items-center p-8 bg-slate-800">

        <div>
            <button onClick={() => setIsExperience(false)}>Education</button>
            <button onClick={() => setIsExperience(true)}>Experience</button>
        </div>

        <div className= "flex flex-col items-center gap-4">
        { isExperience && experienceData.map((experience, index) => (
            <div className="w-[60vw] bg-slate-700 flex flex-row gap-4 p-4 rounded-md" key={index}>
                <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 shrink-0 relative z-10">
                        <Image
                            src={experience.img}
                            alt={`Logo for ${experience.company}`}
                            width={48}
                            height={48}
                            className="rounded-full border-2 border-slate-300 bg-slate-300 object-cover"
                        />
                    </div>

                    <div className="w-1 bg-slate-400 flex-grow" style={{ minHeight: '3rem' }} />
                </div>


                <div className="">
                    <h3>{experience.date}</h3>
                    <h2>{experience.company}</h2>
                    <h3>{experience.title}</h3>
                    <ul className="pl-4">
                        { experience.items.map((item, i) => (
                            <li className="list-disc" key={i}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        ))}
        </div>
    </div>
    )
}

export default Experience