import PlantManage from "../PlantManage";

const EventPlaning = () => {
  return (
    <div className="mb-7">
      <PlantManage></PlantManage>

      <div
        className="hero min-h-screen relative"
        style={{
          backgroundImage: "url(https://i.postimg.cc/sfS9qm69/planing-img.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 absolute top-0 left-0 w-1/2"></div>
        <div className="hero-content text-center text-neutral-content absolute lg:left-32">
          <div className="max-w-md">
            <h1 className="mb-5 text-2xl font-bold">
              DEDICATED EVENT MANAGERS FOR THE PERFECT EVENT PLANNING
            </h1>
            <p className="mb-5">
              -------- <br /> Throughout the event planning period prior to an
              event, during the event itself and after the event you will deal
              with a committed, skilled event manager who will carefully manage
              and deploy our extensive resources to your benefit. This unique
              partnership allows us to deliver the quality and calibre of events
              that our clients demand and expect. Our dedicated event managers
              will tailor your event to your specific requirements. Attention to
              detail, teamwork and carrying out our client’s needs are the basis
              of our success and have placed Ragasaan at the forefront of event
              management in London. Tradition and etiquette all add to the
              success of an event, and we ensure that organization and
              co-ordination is the order of the day so that you can enjoy the
              event.
            </p>
            <button className="btn bg-white">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPlaning;
