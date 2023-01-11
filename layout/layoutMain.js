import React, {useState} from "react";
import Navbar from "../components/MainComponents/Navbar";
import Footer from "../components/MainComponents/Footer";
function LayoutMain({children, setCategory}) {
  const [email, setEmail] = useState("");
  async function onSubmit() {
    await fetch(`http://localhost:8080/api/subscriber/add/?email=${email}`, {
      mode: "no-cors",
      method: "POST",
    });
  }
  return (
    <div className="bg-gradient-to-t from-white via-blue-500 to-blue-900  w-full overflow-hidden">
      <div className="flex justify-center items-center">
        <div className="px-6 sm:px-14">
          <Navbar setCategory={setCategory} />
        </div>
      </div>
      {children}
      <div className="px-10 pb-5 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">We are launching soon 🚀</h1>
        <h2 className="text-md lg:text-xl text-center font-semibold">
          We&apos;re creating something awesome. Please subscribe to get notified when it&apos;s
          ready!
        </h2>
        <div className="space-x-3 mt-5">
          <input
            className="rounded-md h-10 w-64 lg:w-96 outline-none p-2.5"
            type="email"
            onChange={(e) => setEmail(e.target.value)}

            //todo: delete after submit . Embarasada
          />
          <button
            className="rounded-md bg-white h-10 px-3 bg-gradient-to-r from-blue-400 to-indigo-400"
            onClick={() => {
              onSubmit();
            }}
          >
            Subscribe
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LayoutMain;
