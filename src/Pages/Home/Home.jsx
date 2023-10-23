import { useLoaderData } from "react-router-dom";
import Banner from "../../component/Banner/Banner";
import EventCard from "../../component/EventCard/EventCard";
import IncludesProducts from "../../component/IncludeProducts/IncludesProducts";
import LastedEvent from "../../component/LastedEvent/LastedEvent";
import Footer from "../../component/Footer/Footer";

const Home = () => {

    const events = useLoaderData()
    // console.log(events);
    return (
        <div>
            <Banner></Banner>
            <div className="container mx-auto py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {
                        events?.map(event => <EventCard key={event.id} event={event}></EventCard>)
                    }
                </div>
            </div>
            <div className="py-8 ">
                <div className="bg-pink-100">
                    <IncludesProducts></IncludesProducts>
                </div>
                <div className="container mx-auto">
                    <LastedEvent></LastedEvent>
                </div>
            </div>
            <div className="bg-neutral">
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;