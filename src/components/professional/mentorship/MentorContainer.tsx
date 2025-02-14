import MentorRegister from "./MentorRegister";
import Mentors from "./Mentors";

export default function MentorContainer(){
    return(
        <div className="w-[75%] rounded-xl overflow-y-auto h-[75vh] pb-6">
            <MentorRegister/>
            <Mentors/>
        </div>
    )
}