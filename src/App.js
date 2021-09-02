import dance_img from "./images/illustration-hero.svg";
import music_icon from "./images/icon-music.svg";
import "./App.css";

function App() {
  return (
    <div className="2xl:container font-body h-screen bg-pattern bg-no-repeat bg-contain bg-svg-bkg flex justify-center items-center">
      <div className="w-80 h-3/4 bg-white rounded-2xl shadow-black">
        <img className="rounded-t-2xl" src={dance_img} alt="dance" />
        <div className="flex flex-col p-8 text-center h-70perc items-center justify-between">
          <h2 className="font-extrabold text-xl">Order Summary</h2>
          <p className="text-desaturated-blue text-xs">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
          <section className="flex h-16 w-full bg-svg-bkg bg-opacity-30 text-xs justify-between items-center p-4 rounded-md">
            <img className="w-9 mr-4" src={music_icon} alt="music" />
            <div className="flex flex-col text-left flex-grow justify-center">
              <p className="font-black text-dark-blue">Annual Plan</p>
              <p className="text-desaturated-blue">$59.99/year</p>
            </div>
            <p className="font-extrabold text-bright-blue underline hover:text-opacity-60 cursor-pointer">
              Change
            </p>
          </section>
          <button className="bg-bright-blue w-full text-white p-2.5 text-xs font-bold rounded-lg shadow-blue hover:bg-opacity-60">
            Proceed to Payment
          </button>
          <p className="text-xs font-extrabold text-desaturated-blue">
            Cancel order
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
