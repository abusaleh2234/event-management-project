import chair from "../../assets/chair.jpg"
import weddingWall from "../../assets//weddingwalls.jpg"
import metal_circel from "../../assets/metal_circles-2.jpg"
import catering from "../../assets/catering.jpg"
import Design_element from "../../assets/Design_element.png"

const IncludesProducts = () => {
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6  my-8 p-8 ">
                <div className="flex justify-center items-center" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                    <div className="space-y-8 p-8 text-center">
                        <div className="flex justify-center">
                        <img src={Design_element} alt="" />
                        </div>
                        <h2 className="text-4xl font-bold">Includes Various Product Categories</h2>
                        <p>WeddingWall, metal circles, design chair, furniture, beauty, tools, automotive. Diverse offerings spanning needs, interests, and lifestyles.</p>
                        <button className="text-lg font-semibold px-4 py-2 bg-pink-600 rounded-lg text-white">Read More</button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                    <div className="p-3 bg-white space-y-3">
                        <img src={chair} alt="" />
                        <h2 className="text-center text-xl font-semibold"> Design Chair</h2>
                    </div>
                    <div className="p-3 bg-white space-y-3">
                        <img src={weddingWall} alt="" />
                        <h2 className="text-center text-xl font-semibold">WeddingWall</h2>
                    </div>
                    <div className="p-3 bg-white space-y-3">
                        <img src={catering} alt="" />
                        <h2 className="text-center text-xl font-semibold">Catering</h2>
                    </div>
                    <div className="p-3 bg-white space-y-3">
                        <img src={metal_circel} alt="" />
                        <h2 className="text-center text-xl font-semibold">Metal Circles</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IncludesProducts;