import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const EventDetails = () => {

    const { id } = useParams()
    const events = useLoaderData()
    const intId = parseInt(id)
    const [event, setEvent] = useState({})
    // console.log(typeof intId);

    useEffect(() => {
        const singelEvent = events.find(event => event.id === intId)
        setEvent(singelEvent)

    }, [events, intId])
    // console.log(events,event);




    const { title, picture, details, cost } = event
    return (
        <div className="container mx-auto py-10">

            <div className=" bg-white  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg w-full" src={picture} alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{details}</p>
                    <div className="flex justify-between items-center">
                    <p className='text-lg'>Event Cost: ${cost}</p>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Get Servises
                            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default EventDetails;