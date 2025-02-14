import MentorCard from "./MentorCard";
import MentorInfo from "./MentorInfo";
import mentorProfile1 from '../../../../public/images/mentorProfile1.png'
import mentorProfile2 from '../../../../public/images/mentorProfile2.png'
import mentorProfile3 from '../../../../public/images/mentorProfile3.png'
import mentorProfile4 from '../../../../public/images/mentorprofile4.png'
import mentorProfile5 from '../../../../public/images/mentorProfile5.png'
import mentorProfile6 from '../../../../public/images/mentorProfile6.png'


export default function Mentors() {
    const availableMentors = [
        {
            name: 'Chukwudi Eze',
            image: mentorProfile1,
            title: 'Lead Auditor',
            description: 'Eze has over 6 years experience managing local & distributed project/product teams and he is PMP Crertified.'
        },
        {
            name: 'Tosin Obisean',
            image: mentorProfile2,
            title: 'Lead Auditor',
            description: 'Eze has over 6 years experience managing local & distributed project/product teams and he is PMP Crertified.'
        },
        {
            name: 'Ade Adeola',
            image: mentorProfile3,
            title: 'Lead Auditor',
            description: 'Eze has over 6 years experience managing local & distributed project/product teams and he is PMP Crertified.'
        },
        {
            name: 'Mary Johnson',
            image: mentorProfile4,
            title: 'Lead Auditor',
            description: 'Eze has over 6 years experience managing local & distributed project/product teams and he is PMP Crertified.'
        },
        {
            name: 'Lucy Ogbodo',
            image: mentorProfile5,
            title: 'Lead Auditor',
            description: 'Eze has over 6 years experience managing local & distributed project/product teams and he is PMP Crertified.'
        },
        {
            name: 'Olumide Olusan',
            image: mentorProfile6,
            title: 'Lead Auditor',
            description: 'Eze has over 6 years experience managing local & distributed project/product teams and he is PMP Crertified.'
        },
    ]
    
    return(
       <div className="mt-6 w-full flex gap-4">
            <div className="flex flex-wrap gap-4 w-[75%]">
                {availableMentors.map((availableMentor, i) => (
                    <MentorCard 
                        key={i}
                        name={availableMentor.name}
                        imageSRC={availableMentor.image}
                        title={availableMentor.title}
                        description={availableMentor.description}
                    />
                ))}
            </div>
            <MentorInfo/>
       </div>
    )
}