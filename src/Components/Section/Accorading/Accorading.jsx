const Accorading = () => {
  return (
    <div>
      <h2 className="text-center mb-5 font-extrabold font-poppins text-2xl">
        Frequently asked questions{" "}
      </h2>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <div className="collapse-title text-xl font-medium">
          Are online invitations eco-friendly?
        </div>
        <div className="collapse-content">
          <p>
            Yes, compared to traditional paper invitations, online invitations
            are more eco-friendly since they dont require physical materials or
            transportation.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Can I track RSVPs with online invitations?
        </div>
        <div className="collapse-content">
          <p>
            Yes, one of the benefits of online invitations is that you can
            easily track RSVPs.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          How do online invitations work?
        </div>
        <div className="collapse-content">
          <p>
            Frequently asked questions Yes, Silvuple theme offer a range of
            customizable templates, fonts, colors, and layout options to match
            your events or personal style. Yes, compared to traditional paper
            invitations, online invitations are more eco-friendly since they do
            nott require physical materials or transportation. Yes, one of the
            benefits of online invitations is that you can easily track RSVPs.
            Online invitations are digital invites sent via email. You create an
            invitation, input the details of the event, add recipients email
            addresses, and then send it electronically. Recipients receive the
            invitation and can RSVP directly through the link provided.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accorading;
