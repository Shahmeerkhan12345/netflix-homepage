 import React from 'react';

export default function About() {
  return (
    <main>
      <div className="w-full h-screen flex">
        <div className="bg-cover bg-center border-b-8 border-gray-800 w-full h-[90%] bg-[url('netflixteaser.png')]">
          <nav className="bg-transparent w-[90%] md:w-[75%] h-[10%] ml-[5%] md:ml-[10%] mt-[2%] flex items-center justify-between p-4">
            <img src="logg.jpg" alt="Netflix Logo" className="h-[50px] md:h-[70px]" />
            <button className="bg-red-600 text-white px-4 py-2 rounded">Sign In</button>
          </nav>
          <div className="text-white ml-[5%] md:ml-[18%] mt-[16%]">
            <h1 className="text-3xl md:text-6xl font-bold">Unlimited movies, TV shows, and more</h1>
            <h2 className="mt-2 md:mt-4 text-lg md:text-xl mb-4">Watch anywhere. Cancel anytime.</h2>
            <h2 className="text-lg md:text-xl">Ready to watch? Enter your email to create or start your membership</h2>
            <div className="flex flex-col md:flex-row items-center ml-0 md:ml-[0%] mt-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="p-3 w-64 md:w-96 rounded-l bg-transparent border border-white focus:outline-none mb-4 md:mb-0"
              />
              <button className="bg-red-600 text-white px-8 py-3 rounded-r w-full md:w-auto">Get Started</button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex bg-black w-full h-auto md:h-[500px] bg-cover bg-center border-b-8 border-gray-800 py-8 md:py-0 mt-[-7%]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-[5%] md:pl-[22%]">
          <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
            <h1 className="text-white text-3xl md:text-4xl font-bold">Enjoy on your TV</h1>
            <p className="text-white mt-4">Watch on smart TVs, PlayStation, Xbox, Chromecast, <br /> Apple TV, Blu-ray players, and more</p>
          </div>
          <div className="flex items-center justify-center md:justify-end">
            <img src="tv.png" alt="Netflix on TV" className="w-[80%] md:w-[100%] h-auto md:h-[70%]" />
          </div>
        </div>
      </div>

      <div className="flex bg-black w-full h-auto md:h-[500px] bg-cover bg-center border-b-8 border-gray-800 py-8 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-[5%] md:pl-[22%]">
          <div className="flex items-center justify-center md:justify-start">
            <img src="mob.jpg" alt="Netflix on TV" className="w-[80%] md:w-[100%] h-auto md:h-[70%]" />
          </div>
          <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
            <h1 className="text-white text-3xl md:text-4xl font-bold">Download your shows</h1> <br />
            <p className="text-white text-3xl md:text-4xl font-bold mt-[-15px]">to watch offline</p>
            <p className="text-white mt-4">Save your favorites easily and always have something <br />to watch.</p>
          </div>
        </div>
      </div>

      <div className="flex bg-black w-full h-auto md:h-[500px] bg-cover bg-center border-b-8 border-gray-800 py-8 md:py-0">
        <div className="flex flex-col items-center text-center pl-[5%] md:pl-[30%]">
          <h1 className="text-white text-3xl md:text-4xl font-bold">Watch <br /> Everywhere</h1>
          <p className="text-white mt-4">Stream unlimited movies TV <br />shows on your phone, tablet, laptop <br /> and TV.</p>
        </div>
      </div>

      <div className="flex bg-black w-full h-auto md:h-[500px] bg-cover bg-center border-b-8 border-gray-800 py-8 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-[5%] md:pl-[22%]">
          <div className="flex items-center justify-center md:justify-start">
            <img src="cart.png" alt="Netflix on TV" className="w-[80%] md:w-[100%] h-auto md:h-[70%]" />
          </div>
          <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
            <h1 className="text-white text-3xl md:text-4xl font-bold">Create profiles for kids</h1>
            <p className="text-white mt-4">Send kids on adventures with their favorite characters<br /> in a space made just for them free with your<br />membership.</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center bg-black w-full h-auto md:h-[600px] text-white p-4">
        <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
        
        <div className="w-full max-w-2xl space-y-4">
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <button className="w-full flex justify-between items-center text-left focus:outline-none" onClick={() => toggleAccordion('accordion1')}>
              Question 1
              <span className="accordion-icon">+</span>
            </button>
            <div id="accordion1" className="hidden mt-2">
              <p className="text-gray-300">Answer to question 1.</p>
            </div>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <button className="w-full flex justify-between items-center text-left focus:outline-none" onClick={() => toggleAccordion('accordion2')}>
              Question 2
              <span className="accordion-icon">+</span>
            </button>
            <div id="accordion2" className="hidden mt-2">
              <p className="text-gray-300">Answer to question 2.</p>
            </div>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <button className="w-full flex justify-between items-center text-left focus:outline-none" onClick={() => toggleAccordion('accordion3')}>
              Question 3
              <span className="accordion-icon">+</span>
            </button>
            <div id="accordion3" className="hidden mt-2">
              <p className="text-gray-300">Answer to question 3.</p>
            </div>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <button className="w-full flex justify-between items-center text-left focus:outline-none" onClick={() => toggleAccordion('accordion4')}>
              Question 4
              <span className="accordion-icon">+</span>
            </button>
            <div id="accordion4" className="hidden mt-2">
              <p className="text-gray-300">Answer to question 4.</p>
            </div>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <button className="w-full flex justify-between items-center text-left focus:outline-none" onClick={() => toggleAccordion('accordion5')}>
              Question 5
              <span className="accordion-icon">+</span>
            </button>
            <div id="accordion5" className="hidden mt-2">
              <p className="text-gray-300">Answer to question 5.</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10">Stay Updated</h2>
        <div className="mt-4 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-2">
          <input type="email" placeholder="Enter email" className="p-2 rounded-md p-3 w-full md:w-64 bg-transparent border border-white focus:outline-none" />
          <button className="bg-red-500 text-white p-2 rounded-md w-full md:w-auto">Get Started</button>
        </div>
      </div>
    </main>
  );
}
