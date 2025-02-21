
import testProfilePic from '../../../../public/images/Testimonial-profile.png'
import TestimonialCard from "@/components/organisations/profile/TestimonialCard"

export default function Testimonials() {

    const testimonials = [
        {
            name: 'Femi Adetuna',
            image: testProfilePic,
            testimonialText: 'Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by.',
            border: 'border-profileCardBg'
        },
        {
            name: 'Mark Spencer',
            image: testProfilePic,
            testimonialText: 'Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by.',
            border: 'border-testimonialHighlight'
        },
        {
            name: 'Femi Adetuna',
            image: testProfilePic,
            testimonialText: 'Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by.',
            border: 'border-profileCardBg'
        },
        {
            name: 'Mark Spencer',
            image: testProfilePic,
            testimonialText: 'Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by.',
            border: 'border-testimonialHighlight'
        },
    ]
    
    return (
        <div className='pt-8'>
            <h1 className='mb-6 text-lg'>What our clients say</h1>

            <div className='flex w-full gap-6 overflow-x-auto snap-x snap-mandatory pb-8'>
                {testimonials.map((testimonial, i) => (
                    <TestimonialCard
                        key={i}
                        imageSRC={testimonial.image}
                        headerName={testimonial.name}
                        paragraph={testimonial.testimonialText}
                        borderColor={testimonial.border}
                    />
                ))}
            </div>
        </div>
    )
}
