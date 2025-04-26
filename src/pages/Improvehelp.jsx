import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";

function ImproveHelp() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1); // Go back
  };

  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handlePost = () => {
    if (!feedback.trim()) return;
    console.log('Feedback submitted:', feedback);
    setFeedback('');
    setSubmitted(true);
  };

  return (
    <div
      className="w-screen h-screen flex flex-col"
      style={{
        backgroundImage: `url('/salon.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Top Navbar */}
      <div className="w-full h-16 bg-pink-600 bg-opacity-80 text-white flex items-center justify-between px-4">
        <button onClick={handleBack} className="text-2xl font-bold">
          <IoMdArrowRoundBack />
        </button>
        <div className="flex-1 flex items-center justify-center  text-xs sm:text-sm md:text-base font-semibold text-center truncate px-1 ">
        <h1 className="text-xs sm:text-sm md:text-base font-semibold text-center truncate">
          Help Us Improve
        </h1>
        </div>
        <div className="w-6 h-6" /> {/* spacer */}
      </div>

      {/* Middle Section */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-8 space-y-6 overflow-y-auto">
        {!submitted ? (
          <div className="bg-white bg-opacity-90 p-6 rounded-2xl shadow-lg max-w-md text-center">
            <h2 className="text-2xl font-bold text-pink-600 mb-4">Thank You! 🙏</h2>
            <p className="text-gray-700 text-sm">
              We appreciate you taking the time to help us improve our services. 
              Your feedback and suggestions are very important to us!
            </p>
          </div>
        ) : (
          <div className="bg-white bg-opacity-90 p-6 rounded-2xl shadow-lg max-w-md text-center animate-pulse">
            <h2 className="text-3xl font-bold text-pink-600 mb-4">Thank You for Your Feedback! 🎉</h2>
            <p className="text-gray-700 text-sm">
              We value your opinion and will work hard to serve you better.
            </p>
          </div>
        )}
      </div>

      {/* Bottom Input Area */}
      {!submitted && (
        <div className="w-full px-4 py-3 flex items-center gap-2 bg-transparent border-t border-gray-400">
          <input
            type="text"
            placeholder="Type your feedback..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handlePost()}
            // className="flex-1 px-4 py-2 rounded-full border border-opacity-80 bg-transparent text-lg text-black placeholder-white font-semibold"
            className="flex-1 px-4 py-2 rounded-full border border-black text-lg text-black font-bold"
          />
          <button
            onClick={handlePost}
            className="bg-pink-500 bg-opacity-80 text-white px-4 py-2 rounded-full text-sm font-semibold"
          >
            Post
          </button>
        </div>
      )}
    </div>
  );
}

export default ImproveHelp;
