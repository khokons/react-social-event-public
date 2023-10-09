const Reviews = () => {
  return (
    <div className="bg-[#a29061] grid lg:grid-cols-2 pl-3 lg:pl-12">
      {/* Rating_card_1 */}
      <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-white shadow-noneF">
        <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
            alt="tania andrew"
            className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
          />
          <div className="flex w-full flex-col gap-0.5">
            <div className="flex items-center justify-between">
              <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Mahmud-ul
              </h5>
              <div className="5 flex items-center gap-0">
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>
            </div>
            <p className="block font-sans text-base font-extrabold leading-relaxed text-blue-gray-900 antialiased">
              Birthday Review
            </p>
          </div>
        </div>
        <div className="mb-6 p-0">
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            Thank you so much for the most incredible event for Scarlette’s
            3rdbirthday. The day was amazing and so brilliantly organised. We
            enjoyed just being able to sit back and watch our daughter enjoy
            every single moment rather than have to run around like we have in
            previous years.
          </p>
        </div>
      </div>
      {/* Rating_card_2 */}
      <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-white shadow-noneF">
        <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
            alt="tania andrew"
            className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
          />
          <div className="flex w-full flex-col gap-0.5">
            <div className="flex items-center justify-between">
              <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Bristi
              </h5>
              <div className="5 flex items-center gap-0">
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-3"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-3"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-3"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-3"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-3"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                </div>
              </div>
            </div>
            <p className="block font-sans font-extrabold text-base  leading-relaxed text-blue-gray-900 antialiased">
              Wedding Review
            </p>
          </div>
        </div>
        <div className="mb-6 p-0">
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            I want to thank you so much for all of your help coordinating the
            wedding! Everything went amazingly well that day and I cannot
            express how appreciative we are for everything that you guys did for
            us! You have a hard job and you both do it very well! I will be sure
            to recommend you to others in the future!
          </p>
        </div>
      </div>
      {/* Rating_card_3 */}
      <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-white shadow-noneF">
        <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
            alt="tania andrew"
            className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
          />
          <div className="flex w-full flex-col gap-0.5">
            <div className="flex items-center justify-between">
              <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Tania Andrew
              </h5>
              <div className="5 flex items-center gap-0">
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>
            </div>
            <p className="block font-sans text-base font-extrabold leading-relaxed text-blue-gray-900 antialiased">
              Anniversary Review
            </p>
          </div>
        </div>
        <div className="mb-6 p-0">
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            Thank you for being a part of our special day. · We appreciate you
            coming to celebrate with us. · Our wedding was so special, and your
            presence
          </p>
        </div>
      </div>
      {/* Rating_card_4 */}
      <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-white shadow-noneF">
        <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
            alt="tania andrew"
            className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
          />
          <div className="flex w-full flex-col gap-0.5">
            <div className="flex items-center justify-between">
              <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Arnob Hasan
              </h5>
              <div className="5 flex items-center gap-0">
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>
            </div>
            <p className="block font-sans text-base font-extrabold leading-relaxed text-blue-gray-900 antialiased">
              Graduation Review
            </p>
          </div>
        </div>
        <div className="mb-6 p-0">
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            After you are showered with gifts, money, love, and support, show
            your gratitude with the perfect sayings for graduation thank you
            cards.
          </p>
        </div>
      </div>
      {/* Rating_card_5 */}
      <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-white shadow-noneF">
        <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
            alt="tania andrew"
            className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
          />
          <div className="flex w-full flex-col gap-0.5">
            <div className="flex items-center justify-between">
              <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Khokon sarkar
              </h5>
              <div className="5 flex items-center gap-0">
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>
            </div>
            <p className="block font-sans text-base font-extrabold leading-relaxed text-blue-gray-900 antialiased">
              Retirement Review
            </p>
          </div>
        </div>
        <div className="mb-6 p-0">
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            I found solution to all my design needs from Creative Tim. I use
            them as a freelancer in my hobby projects for fun! And its really
            affordable, very humble guys
          </p>
        </div>
      </div>
      {/* Rating_card_6 */}
      <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-white shadow-noneF">
        <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
            alt="tania andrew"
            className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
          />
          <div className="flex w-full flex-col gap-0.5">
            <div className="flex items-center justify-between">
              <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Tania Andrew
              </h5>
              <div className="5 flex items-center gap-0">
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>
            </div>
            <p className="block font-sans text-base font-extrabold leading-relaxed text-blue-gray-900 antialiased">
              Engagement review
            </p>
          </div>
        </div>
        <div className="mb-6 p-0">
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            I found solution to all my design needs from Creative Tim. I use
            them as a freelancer in my hobby projects for fun! And its really
            affordable, very humble guys
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
