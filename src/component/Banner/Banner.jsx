
import bgImg4 from "../../assets/bg-4.jpg"
const Banner = () => {

    return (
        <div className="">
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${bgImg4})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-5xl space-y-5">
                        <p className="text-base md:text-xl lg:text-3xl font-bold">We are the Event Management Specialists</p>
                        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">CELEBRATE YOUR EVENTSTHAT LASTS LONGER</h1>
                        <p className="text-sm lg:text-base md:max-w-3xl mx-auto">From Wedding Functions to Birthday Parties or Corporate Events to Musical Functions,
                            We offer full range of Events Management Services that scale to your needs & budget.</p>
                        <div className="flex gap-5 justify-center">
                            <p className="text-lg font-semibold px-4 py-2 bg-pink-600 rounded-lg inline">Get More Info</p>
                            <p className="text-lg font-semibold px-4 py-2 bg-indigo-700 rounded-lg inline">Get Start</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Banner;


