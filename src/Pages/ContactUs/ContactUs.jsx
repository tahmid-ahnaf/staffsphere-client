import { MdOutlineMedicalInformation,MdCall  } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Button } from "flowbite-react";
const ContactUs = () => {
  return (
    <div className="max-w-[85%] mx-auto">
      <div className="flex flex-col gap-4 lg:flex-row">
        <div>
          <div className="bg-white dark:bg-gray-900">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                Contact Us
              </h2>
              <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                Got a technical issue? Want to send feedback about a beta
                feature? Need details about our Business plan? Let us know.
              </p>
              <form action="#" className="space-y-8">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="name@staffsphere.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Let us know how we can help you"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Leave a comment..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="py-8 lg:py-16 mx-auto max-w-screen-md">
          <div className="flex flex-col gap-4 justify-center items-center mb-8">
          <Button color="dark" disabled>
          <MdOutlineMedicalInformation className="text-4xl"></MdOutlineMedicalInformation>
          </Button>
          
          <h2 className="font-bold text-2xl">Company Information</h2>
          <p className="text-center text-gray-500 font-light text-xl">StaffSphere LLC</p>

          </div>
          <div className="flex flex-col gap-4 justify-center items-center mb-8">
          <Button color="dark" disabled>
          <FaLocationDot className="text-4xl"></FaLocationDot>
          </Button>
          
          <h2 className="font-bold text-2xl">Address:</h2>
          <p className="text-center text-gray-500 font-light text-xl">Silver Lake, Karwan Bazar, Kazi Nazrul Islam Avenue, Dhaka - 1200</p>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center mb-8">
            <Button color="dark" disabled>
            <MdCall className="text-4xl"></MdCall>
            </Button>
            <h2 className="font-bold text-2xl">Call us:</h2>
            <p className="text-center text-gray-500 font-light text-xl">Call us to speak to a member of our team. We are always happy to help.</p>
            <p className="text-center font-bold text-xl">+8801736865428</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
