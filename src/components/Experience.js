import { useState } from 'react'
import Image from 'next/image'

import experienceData from '@/data/experience.json';
import educationData from '@/data/education.json';

const Experience = () => {
    const [isExperience, setIsExperience] = useState(true);

    const dataToDisplay = isExperience ? experienceData : educationData;

    return (
    <div className="flex flex-col items-center p-8 gap-4 bg-slate-800">

        <div className="flex flex-row gap-12">
            <button className="w-32 p-2 rounded-sm bg-slate-900 border-slate-700 border-[2px]" onClick={() => setIsExperience(true)}>Experience</button>
            <button className="w-32 p-2 rounded-sm bg-slate-900 border-slate-700 border-[2px]" onClick={() => setIsExperience(false)}>Education</button>
        </div>

        <div className= "flex flex-col items-center gap-4">
        { dataToDisplay.map((experience, index) => (
            <div className="w-[60vw] bg-slate-700 flex flex-row gap-4 p-4 rounded-md" key={index}>
                <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 relative z-10 rounded-full overflow-hidden border-2 border-slate-300 bg-slate-300">
                        <Image
                            src={experience.img}
                            alt={`Logo for ${experience.company}`}
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="w-1 bg-slate-400 flex-grow" style={{ minHeight: '3rem' }} />
                </div>


                <div className="">
                    <h3>{experience.date}</h3>
                    <h2>{experience.company}</h2>
                    <h3>{experience.title}</h3>
                    <ul className="pl-4">
                        { experience.items && experience.items.map((item, i) => (
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