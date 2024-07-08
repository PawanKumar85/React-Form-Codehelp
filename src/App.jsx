import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    street: "",
    city: "",
    state: "Delhi",
    zip: "",

    comment: false,
    candidate: false,
    offers: false,

    pushNotification: "",
  });

  const changeHandler = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const show = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="bg-primary flex items-center justify-center bg-gray-300 overflow-x-hidden overflow-y-auto pt-10 pb-10">
      <div className="bg-white w-[700px] shadow-lg rounded-lg p-7">
        <form autoCorrect="off" onSubmit={show}>
          <h1 className="flex justify-center text-3xl font-bold text-blue-500 p-3 underline underline-offset-8">
            React Form
          </h1>

          <div className="flex flex-col space-y-3 ">
            {/* Personal Data */}

            <label htmlFor="firstName" className="text-lg text-gray-700">
              First Name
            </label>
            <input
              type="text"
              placeholder="Pawan"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={changeHandler}
              className="capitalize p-2 border border-gray-400 rounded-lg outline-none focus:border-blue-500 placeholder:font-semibold placeholder:text-gray-300"
            />

            <label htmlFor="lastName" className="text-lg text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Kumar"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={changeHandler}
              className="capitalize p-2 border border-gray-400 rounded-lg outline-none focus:border-blue-500 placeholder:font-semibold placeholder:text-gray-300"
            />

            <label htmlFor="email" className="text-lg text-gray-700">
              Email ID
            </label>
            <input
              type="email"
              placeholder="xyz@gmail.com"
              name="email"
              id="email"
              value={formData.email}
              onChange={changeHandler}
              className="lowercase p-2 border border-gray-400 rounded-lg outline-none focus:border-blue-500 placeholder:font-semibold placeholder:text-gray-300"
            />

            <label htmlFor="country" className="text-lg text-gray-700">
              Country
            </label>
            <select
              name="country"
              id="country"
              value={formData.country}
              onChange={changeHandler}
              className="p-2 outline-none border border-gray-400 rounded-lg pe-4 focus:border-blue-500"
            >
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="Russia">Russia</option>
              <option value="China">China</option>
              <option value="Sri Lanka">Sri Lanka</option>
            </select>
          </div>

          <div className="flex flex-col space-y-3  mt-3">
            {/* Personal Address  */}

            <label htmlFor="street" className="text-lg text-gray-700">
              Street Address
            </label>
            <input
              type="text"
              placeholder="B-24C"
              name="street"
              id="street"
              value={formData.street}
              onChange={changeHandler}
              className="capitalize p-2 border border-gray-400 rounded-lg outline-none focus:border-blue-500 placeholder:font-semibold placeholder:text-gray-300"
            />

            <label htmlFor="city" className="text-lg text-gray-700">
              City
            </label>
            <input
              type="text"
              placeholder="Delhi"
              name="city"
              id="city"
              value={formData.city}
              onChange={changeHandler}
              className="capitalize p-2 border border-gray-400 rounded-lg outline-none focus:border-blue-500 placeholder:font-semibold placeholder:text-gray-300"
            />

            <label htmlFor="state" className="text-lg text-gray-700">
              State / Province
            </label>
            <select
              name="state"
              id="state"
              value={formData.state}
              onChange={changeHandler}
              className="p-2 outline-none border border-gray-400 rounded-lg pe-4 focus:border-blue-500"
            >
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Bihar">Bihar</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Madha Pradesh">Madha Pradesh</option>
              <option value="Delhi">Delhi</option>
            </select>

            <label htmlFor="zip" className="text-lg text-gray-700">
              ZIP / Postal Code
            </label>
            <input
              type="text"
              placeholder="231223"
              name="zip"
              id="zip"
              value={formData.zip}
              onChange={changeHandler}
              className="capitalize p-2 border border-gray-400 rounded-lg outline-none focus:border-blue-500 placeholder:font-semibold placeholder:text-gray-300"
            />
          </div>

          {/* checkbox */}
          <div className="border border-gray-400 bg-gray-200 p-3 mt-5 rounded-lg ">
            <h2 className="font-semibold pl-3 text-gray-600">By Email</h2>
            <div className="flex flex-col bg-white p-2 rounded-lg mt-2">
              <div className="flex gap-3">
                <input
                  type="checkbox"
                  name="comment"
                  id="comment"
                  checked={formData.comment}
                  onChange={changeHandler}
                />
                <label
                  htmlFor="comment"
                  className="flex flex-col justify-center"
                >
                  Comments
                </label>
              </div>
              <h4 className="text-xs text-gray-500 pl-6">
                Get notified when someone posts a comment on a posting
              </h4>
            </div>

            <div className="flex flex-col bg-white p-2 rounded-lg mt-2">
              <div className="flex gap-3">
                <input
                  type="checkbox"
                  name="candidate"
                  id="candidate"
                  checked={formData.candidate}
                  onChange={changeHandler}
                />
                <label
                  htmlFor="candidate"
                  className="flex flex-col justify-center"
                >
                  Candidates
                </label>
              </div>
              <h4 className="text-xs text-gray-500 pl-6">
                Get notified when a candidate applied for a job
              </h4>
            </div>

            <div className="flex flex-col bg-white p-2 rounded-lg mt-2">
              <div className="flex gap-3">
                <input
                  type="checkbox"
                  name="offers"
                  id="offer"
                  checked={formData.offers}
                  onChange={changeHandler}
                />
                <label htmlFor="offer" className="flex flex-col justify-center">
                  Offers
                </label>
              </div>

              <h4 className="text-xs text-gray-500 pl-6">
                Get notified when candidate accepts or rejects an offer
              </h4>
            </div>
          </div>

          {/* radio  */}
          <div className="border border-gray-400 bg-gray-200 p-3 mt-5 rounded-lg">
            <div>
              <h2 className="font-semibold pl-3 text-gray-600">
                Push Notification
              </h2>
              <h3 className="text-xs text-gray-500 pl-3">
                These are delivered via SMS to your mobile phone
              </h3>
            </div>

            <div className="flex flex-col mt-3">
              <div className="flex  gap-3">
                <input
                  type="radio"
                  name="pushNotification"
                  id="everything"
                  value="everything"
                  onChange={changeHandler}
                />
                <label
                  htmlFor="everything"
                  className="flex flex-col justify-center"
                >
                  Everything
                </label>
              </div>

              <div className="flex gap-3">
                <input
                  type="radio"
                  name="pushNotification"
                  id="sendEmail"
                  value="SendEmail"
                  onChange={changeHandler}
                />
                <label
                  htmlFor="sendEmail"
                  className="flex flex-col justify-center"
                >
                  Send as Email
                </label>
              </div>

              <div className="flex gap-3">
                <input
                  type="radio"
                  name="pushNotification"
                  id="notification"
                  value="NoPushNotification"
                  onChange={changeHandler}
                />
                <label
                  htmlFor="notification"
                  className="flex flex-col justify-center"
                >
                  No push Notifications
                </label>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <button className=" text-base font-semibold text-white bg-blue-500 py-2 px-5 rounded-lg hover:bg-blue-600 transition-all duration-200 w-full">
              Show
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
