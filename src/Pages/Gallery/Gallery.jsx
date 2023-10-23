import wedding1 from "../../assets/wedding-1.png"
import wedding2 from "../../assets/wedding-3.jpg"
import anniversary1 from "../../assets/anniversary-1.jpg"
import anniversary2 from "../../assets/anniversary-2.jpg"
import birthday1 from "../../assets/birthday-1.jpg"
import birthday2 from "../../assets/birthday-2.jpg"
import engagement1 from "../../assets/engagement-1.jpg"
import engagement2 from "../../assets/engagement.jpg"
import retairment2 from "../../assets/retairment-2.jpg"
import retairment1 from "../../assets/retirement-1.jpg"
import babyshower1 from "../../assets/baby-shower-1.jpg"
import babyshower2 from "../../assets/baby_shower_2.jpg"
const Gallery = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-center text-6xl font-bold py-6">Gallery</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 py-10">
                <img className="h-full w-full" src={wedding2} alt="" />
                <img className="h-full w-full" src={wedding1} alt="" />
                <img className="h-full w-full" src={anniversary1} alt="" />
                <img className="h-full w-full" src={anniversary2} alt="" />
                <img className="h-full w-full" src={birthday1} alt="" />
                <img className="h-full w-full" src={birthday2} alt="" />
                <img className="h-full w-full" src={engagement1} alt="" />
                <img className="h-full w-full" src={babyshower2} alt="" />
                <img className="h-full w-full" src={retairment2} alt="" />
                <img className="h-full w-full" src={retairment1} alt="" />
                <img className="h-full w-full" src={babyshower1} alt="" />
                <img className="h-full w-full" src={engagement2} alt="" />
                
            </div>
        </div>
    );
};

export default Gallery;