import { useLoaderData, useParams } from "react-router-dom";


const DetailsInfo = () => {
    const data = useLoaderData()
    const {id} = useParams();
    const idInt = parseInt(id);

    const details = data.find(detail => detail.id ===idInt);



    return (
        
    <div>
        <h2 className="text-3xl text-center font-poppins font-bold uppercase py-12">Service Details Page</h2>
        <div className="card shadow-xl">
        <figure className="px-10 pt-10">
          <img src={details.image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{details.name}</h2>
          <p className="text-sm text-black font-normal">{details.full_description}</p>
          <div className="card-actions mt-5">
            <button className="btn btn-ghost  bg-gray-500">Price: {details.price}</button>
            <button className="btn btn-ghost bg-gray-500">Package  install</button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default DetailsInfo;