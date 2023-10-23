import quat from "../../assets/quote_icon_sec8.png"
import couple from "../../assets/extra-Sec_image-1.jpg"


const LastedEvent = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="">
                <img className="rounded-tl-xl rounded-tr-3xl rounded-br-lg rounded-bl-3xl" src={couple} alt="" />
            </div>
            <div className="">
                <div className="space-y-8 p-8 ">
                    <div className="">
                        <img src={quat} alt="" />
                    </div>
                    <h2 className="text-4xl font-bold">Our Last Event</h2>
                    <p>WeddingWall, metal circles, design chair, furniture, beauty, tools, automotive. Diverse offerings spanning needs, interests, and lifestyles.</p>
                    <button className="text-lg font-semibold px-4 py-2 bg-pink-600 rounded-lg text-white">See Our last event</button>
                </div>
            </div>
        </div>
    );
};

export default LastedEvent;