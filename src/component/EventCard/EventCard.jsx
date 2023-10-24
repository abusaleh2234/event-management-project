import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const EventCard = ({event}) => {

    const {title, picture, details, id, cost} = event
    return (
        <div>
            <div className=" w-full bg-gray-100  rounded-lg" >
                <figure><img className="rounded-lg h-[275px] mb-2" src={picture} alt="Shoes" /></figure>
                <div className="px-3 space-y-3">
                    <h2 className="text-2xl font-semibold">{title}</h2>
                    {
                        details.length > 200 ? <p>{details?.slice(0,100)} <Link to={`/event/${id}`}> See More...</Link></p> : <p>{details}</p>
                    }
                    
                    <div className="card-actions justify-between items-center pb-3">
                        <p className='text-lg'>Event Cost: ${cost}</p>
                        <button className='btn bg-indigo-700 text-white hover:text-black'><Link to={`/event/${id}`}>Details</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};


EventCard.propTypes = {
    event:PropTypes.object.isRequired
}
export default EventCard;