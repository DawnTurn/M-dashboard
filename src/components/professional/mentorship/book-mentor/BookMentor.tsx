

const BookMentor = () => {
    return (
        <main className="w-[75%] rounded-xl overflow-y-auto h-[75vh] pb-6">
            <div className="flex gap-4 h-[39.5rem]">
                <div className="w-[65%] h-full rounded-3xl overflow-hidden">
                    <img src={'/images/mentorProfile1.png'} className="w-full h-fit object-cover object-top" alt="a Mentor profile picture"></img>
                </div>
                <div className="w-[35%] h-full">
                    <div className="bg-white w-full rounded-lg px-3 py-4">
                        <div className="flex justify-between items-center text-[.75rem]">
                            <p>Availabily Status</p>
                            <p className="text-green-600">Yes</p>
                        </div>
                        <div className="mt-8">
                            <h1 className="text-3xl">Mary Johnson</h1>
                            <p className="w-[70%] text-[.7rem]">Eze has over 6 years experience managing local & distributed project/product teams and he is PMP Crertified.</p>
        
                            <h3 className="mt-6 text-xl">Available time slot</h3>
                            <div className="text-[.75rem] flex items-end justify-between mt-1">
                                <div className="flex gap-4">
                                    <p><span>Mon</span><br /><span>9:00am</span></p>
                                    <p><span>Wed</span><br /><span>12:00pm</span></p>
                                    <p><span>Fri</span><br /><span>4:00pm</span></p>
                                </div>
                                <p className="font-bold">CAT</p>
                            </div>

                            <div className="mt-6">
                                <h2 className="text-xl">Available Time Duration</h2>
                                <p className="text-[.75rem]">30 Minutes</p>
                            </div>

                            <div className="flex p-6 bg-cyan-700 text-white justify-between items-center rounded-2xl mt-6">
                                <h2 className="text-xl">Training fee</h2>
                                <h2 className="text-4xl font-[400]">$200</h2>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4">
                        <div className="flex gap-4 w-full">
                            <div className="bg-white px-4 py-6 flex justify-between items-center rounded-xl w-1/2 cursor-pointer">
                                <div className="flex items-center gap-2">
                                    <i className='bx bx-user-voice text-3xl'></i>
                                    <p className="text-[.75rem]">Sessions</p>
                                </div>
                                <i className="bx bx-chevron-right text-2xl"></i>
                            </div>

                            <div className="bg-white px-4 py-6 flex justify-between items-center rounded-xl w-1/2 cursor-pointer">
                                <div className="flex items-center gap-2">
                                    <i className='bx bx-time text-3xl'></i>
                                    <p className="text-[.75rem]">Select time</p>
                                </div>
                                <i className="bx bx-chevron-right text-2xl"></i>
                            </div>
                        </div>

                        <div className="bg-white px-4 py-6 flex justify-between items-center rounded-xl w-full mt-4 cursor-pointer">
                            <div className="flex items-center gap-2">
                                <i className='bx bx-calendar text-3xl'></i>
                                <p className="text-[.75rem]">Select dates</p>
                            </div>
                            <i className="bx bx-chevron-right text-2xl"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6">
                <div className="flex gap-4">
                    <div className="w-[45%] flex flex-col">
                        <label>Session title</label>
                        <input type="text" />
                    </div>
                    <div className="w-[55%] flex flex-col">
                        <label>Leave a message</label>
                        <textarea name="message" id=""/>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default BookMentor