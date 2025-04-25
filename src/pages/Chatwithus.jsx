import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { IoMdArrowRoundBack } from "react-icons/io";
import { BiSolidHome } from "react-icons/bi";

function ChatWithUs() {

  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1); // navigate back to the previous page
  };

  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi there! How can we help you today?' },
  ]);
  const [input, setInput] = useState('');
 

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: 'user', text: input }]);
    setInput('');
    setTimeout(() => {
      setMessages((prev) => [...prev, { from: 'bot', text: 'Thanks! We’ll get back to you.' }]);
    }, 1000);
  };

  return (
    <div
      className="w-screen h-screen flex flex-col relative"
      style={{
        backgroundImage: `url('/salon.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Header */}
      <div className="w-full h-16 bg-pink-600 bg-opacity-80 text-white flex items-center justify-between px-3 pr-2">
        <button onClick={handleBack} className="text-2xl font-bold"><IoMdArrowRoundBack /></button>
        <h1 className="text-xs sm:text-sm md:text-base font-semibold  ">Chat with Us</h1>
        <div className="w-6 h-6" />
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`max-w-[75%] px-4 py-2 rounded-xl text-sm ${
              msg.from === 'bot'
                ? 'bg-white bg-opacity-80 text-gray-800 self-start'
                : 'bg-pink-500 text-white self-end ml-auto'
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="w-full px-4 py-3 bg-pink-600 bg-opacity-80 border-t flex items-center gap-2 bg-transparent ">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          className="flex-1 px-4 py-2 rounded-full border border-black text-lg text-black font-bold"
        />
        <button
          onClick={handleSend}
          className="bg-pink-600 text-white px-4 py-2 rounded-full text-sm"
        >
          Send
        </button>
      </div>

      
    </div>
  );
}

export default ChatWithUs;






// import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// import { FaUserAlt } from "react-icons/fa";
// import { IoMdArrowRoundBack } from "react-icons/io";

// function ChatWithUs() {
//   const [messages, setMessages] = useState([
//     { from: 'bot', text: 'Hi there! How can we help you today?' },
//   ]);
//   const [input, setInput] = useState('');


//   const handleSend = () => {
//     if (!input.trim()) return;
//     setMessages([...messages, { from: 'user', text: input }]);
//     setInput('');
//     // Simulate bot reply
//     setTimeout(() => {
//       setMessages((prev) => [...prev, { from: 'bot', text: 'Thanks! We’ll get back to you.' }]);
//     }, 1000);
//   };

//   return (
//     <div className="w-screen h-screen bg-white flex flex-col">
//       {/* Header */}
//       <div className="w-full h-16 bg-pink-500 text-white flex items-center justify-between px-4">
//         {/* <button className="text-2xl font-bold">&larr;</button> */}
//         <button className="text-2xl font-bold"><IoMdArrowRoundBack /></button>
//         <h1 className="text-lg font-semibold">Chat with Us</h1>
//         <div className="w-6 h-6"></div> {/* spacer */}
//       </div>

//       {/* Chat area */}
//       <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50">
//         {messages.map((msg, idx) => (
//           <div
//             key={idx}
//             className={`max-w-[75%] px-4 py-2 rounded-lg text-sm ${
//               msg.from === 'bot'
//                 ? 'bg-gray-200 text-gray-800 self-start'
//                 : 'bg-pink-200 text-gray-900 self-end ml-auto'
//             }`}
//           >
//             {msg.text}
//           </div>
//         ))}
//       </div>

//       {/* Input area */}
//       <div className="w-full p-4 border-t flex items-center gap-2">
//         <input
//           type="text"
//           placeholder="Type your message..."
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={(e) => e.key === 'Enter' && handleSend()}
//           className="flex-1 px-4 py-2 border rounded-full text-sm text-gray-700 border border-pink-900 font-"
//         />
//         <button
//           onClick={handleSend}
//           className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm"
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ChatWithUs;
