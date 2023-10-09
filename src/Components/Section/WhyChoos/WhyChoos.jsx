import video from "../../../assets/Wedding Invitation Without Text Free Download  Link in descriptionKM Creative Works.mp4";

const WhyChoos = () => {
  return (
    <div className="bg-lime-50 my-12">
      <div className="text-center py-5 space-y-2">
        <p className="text-sm font-poppins font-bold text-[#191717]">
          PLAY YOUR CARDS RIGHT SAMPLE VIDEO
        </p>
        <h1 className="text-4xl font-poppins font-extrabold">Why Choose Us?</h1>
        <p className="text-xl font-poppins font-medium text-[#191717]">
          Customize your invitation and choose send online to create your event.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mt-10">
        <div>
          {" "}
          <video controls src={video}></video>{" "}
        </div>

        <div className="ml-5 md:ml-8 lg:ml-16 space-y-8">
          <div>
            <h2 className="text-xl font-poppins font-medium text-[#191717]">
              Invite Gusts
            </h2>
            <p className="font-poppins">Via email, text messages & facebook </p>
          </div>

          <div>
            <h2 className="text-xl font-poppins font-medium text-[#191717]">
              Impress Gusts{" "}
            </h2>
            <p className="font-poppins">With beautiful animated experience </p>
          </div>

          <div>
            <h2 className="text-xl font-poppins font-medium text-[#191717]">
              Track RSVPs{" "}
            </h2>
            <p className="font-poppins">Message guests & manage your event </p>
          </div>

          <div>
            <h2 className="text-xl font-poppins font-medium text-[#191717]">
              Enjoy Extras{" "}
            </h2>
            <p className="font-poppins">
              Add maps, Gift, calendar links & more{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="text-center mt-9 mb-5">
        <button
          className="btn bg-red-700/10 uppercase text-blue-gray-900 shadow-lg "
          type="button"
        >
          Browse Invitations
        </button>
      </div>
    </div>
  );
};

export default WhyChoos;

// .About {
//     padding: 50px 100px;
//     background-color: gray;
//   }

//   .about_title {
//     color: #272727;
//     font-size: 40px;
//     font-weight: 800;
//     text-align: center;
//     margin-bottom: 50px;
//   }

//   .about_title span {
//     color: #e55473;
//   }

//   .About_content {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     gap: 70px;
//   }

//   .text_content {
//     width: 50%;
//     margin: auto;
//   }

//   .text_content h2 {
//     font-size: 45px;
//     font-weight: 800;
//     margin-bottom: 25px;
//   }

//   .text_content p {
//     font-size: 18px;
//     font-weight: 400;
//     width: 580px;
//   }

//   .text_content a{
//     color: #fff;
//   }

//   .About_content button {
//     margin-top: 30px;

//   }
