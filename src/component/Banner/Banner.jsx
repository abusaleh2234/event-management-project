import bgImg1 from "../../assets/bg-1-1.jpg"
import bgImg2 from "../../assets//bg-2-1.jpg"
import bgImg3 from "../../assets/bg-3.jpg"
import bgImg4 from "../../assets/bg-4.jpg"
const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <div className="hero min-h-screen" style={{ backgroundImage: `url(${bgImg1})` }}>
                    <div className="hero-overlay bg-opacity-70"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-5xl space-y-5">
                            <p className="text-3xl font-bold">We are the Event Management Specialists</p>
                            <h1 className="text-6xl font-bold">CELEBRATE YOUR EVENTSTHAT LASTS LONGER</h1>
                            <p className="text-base md:max-w-3xl mx-auto">From Wedding Functions to Birthday Parties or Corporate Events to Musical Functions,
                                We offer full range of Events Management Services that scale to your needs & budget.</p>
                            <div className="flex gap-5 justify-center">
                                <p className="text-lg font-semibold px-4 py-2 bg-pink-600 rounded-lg inline">Get More Info</p>
                                <p className="text-lg font-semibold px-4 py-2 bg-indigo-700 rounded-lg inline">Get Start</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle bg-black opacity-40 border-none text-white hover:text-black">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-black opacity-40 border-none text-white hover:text-black">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className="hero min-h-screen" style={{ backgroundImage: `url(${bgImg2})` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-5xl space-y-5">
                            <p className="text-3xl font-bold">We are the Event Management Specialists</p>
                            <h1 className="text-6xl font-bold">CELEBRATE YOUR EVENTSTHAT LASTS LONGER</h1>
                            <p className="text-base md:max-w-3xl mx-auto">From Wedding Functions to Birthday Parties or Corporate Events to Musical Functions,
                                We offer full range of Events Management Services that scale to your needs & budget.</p>
                            <div className="flex gap-5 justify-center">
                                <p className="text-lg font-semibold px-4 py-2 bg-pink-600 rounded-lg inline">Get More Info</p>
                                <p className="text-lg font-semibold px-4 py-2 bg-indigo-700 rounded-lg inline">Get Start</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle bg-black opacity-40 border-none text-white hover:text-black">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-black opacity-40 border-none text-white hover:text-black">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className="hero min-h-screen" style={{ backgroundImage: `url(${bgImg3})` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-5xl space-y-5">
                            <p className="text-3xl font-bold">We are the Event Management Specialists</p>
                            <h1 className="text-6xl font-bold">CELEBRATE YOUR EVENTSTHAT LASTS LONGER</h1>
                            <p className="text-base md:max-w-3xl mx-auto">From Wedding Functions to Birthday Parties or Corporate Events to Musical Functions,
                                We offer full range of Events Management Services that scale to your needs & budget.</p>
                            <div className="flex gap-5 justify-center">
                                <p className="text-lg font-semibold px-4 py-2 bg-pink-600 rounded-lg inline">Get More Info</p>
                                <p className="text-lg font-semibold px-4 py-2 bg-indigo-700 rounded-lg inline">Get Start</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle bg-black opacity-40 border-none text-white hover:text-black">❮</a>
                    <a href="#slide4" className="btn btn-circle bg-black opacity-40 border-none text-white hover:text-black">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <div className="hero min-h-screen" style={{ backgroundImage: `url(${bgImg4})` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-5xl space-y-5">
                            <p className="text-3xl font-bold">We are the Event Management Specialists</p>
                            <h1 className="text-6xl font-bold">CELEBRATE YOUR EVENTSTHAT LASTS LONGER</h1>
                            <p className="text-base md:max-w-3xl mx-auto">From Wedding Functions to Birthday Parties or Corporate Events to Musical Functions,
                                We offer full range of Events Management Services that scale to your needs & budget.</p>
                            <div className="flex gap-5 justify-center">
                                <p className="text-lg font-semibold px-4 py-2 bg-pink-600 rounded-lg inline">Get More Info</p>
                                <p className="text-lg font-semibold px-4 py-2 bg-indigo-700 rounded-lg inline">Get Start</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle bg-black opacity-40 border-none text-white hover:text-black">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-black opacity-40 border-none text-white hover:text-black">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;