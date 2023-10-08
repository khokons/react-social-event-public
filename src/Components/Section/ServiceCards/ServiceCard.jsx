/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const ServiceCard = ({card}) => {

    const { id, name, image, price, short_description, button } = card;

    return (
        <div className="relative flex w-[400px] flex-col rounded-xl bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 mt-4 h-[300px] overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img
            src={image}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6 grow">
          <div className="mb-2 flex items-center justify-between">
            <p className="block font-sans text-base leading-relaxed text-[#191717] antialiased font-extrabold">
              {name}
            </p>
            <p className="block font-sans text-base font-extrabold leading-relaxed text-[#191717] antialiased">
             {price}
            </p>
          </div>
          <p className="block font-sans text-sm font-medium leading-normal text-[#191717] antialiased opacity-75">
          {short_description}
          </p>
        </div>
        <div className="p-6 pt-0">
          <button
            className="block w-full select-none rounded-lg bg-red-700/10 py-3 px-6 text-center align-middle font-sans text-sm font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <Link to={`/card/${id}`}>{button}</Link>
          </button>
        </div>
      </div>
    );
};

export default ServiceCard;