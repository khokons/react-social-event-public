import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const ServiceCards = () => {
  const cardInfo = useLoaderData();

  return (
    <div>
      <h2 className="text-2xl font-poppins text-center text-[#191717] uppercase my-10 font-extrabold">
        Our Services
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cardInfo.map((card) => (
          <ServiceCard key={card.id} card={card}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
