import React, { useState } from 'react';
import { FaHeadphones, FaPaperPlane } from 'react-icons/fa';
import {Button} from '@mui/material';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: '🎉 Welcome to GiftGrove – your online destination for birthday gifts!' },
    { from: 'bot', text: 'How can I assist you today? 😊' },
  ]);
  const [input, setInput] = useState('');
  const [isAwaitingOrderId, setIsAwaitingOrderId] = useState(false);

  const options = [
    'About Store',
    'Contact Details',
    'Track Delivery',
    'Return Policy',
    'Offers & Discounts',
    'Birthday Gift Ideas',
    'Store Location',
    'Payment Methods',
    'Customer Reviews',
    'Cancel Order',
  ];

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = async (text) => {
    if (!text.trim()) return;

    setMessages(prev => [...prev, { from: 'user', text }]);
    setInput('');

    let botReply = '';

    if (isAwaitingOrderId) {
      botReply = `📦 Order ID ${text} will be delivered on **April 7, 2025**, between 10:00 AM and 2:00 PM.`;
      setIsAwaitingOrderId(false);
    } else {
      switch (text.toLowerCase()) {
        case 'about store':
          botReply = '🎁 We are an online store specializing in birthday gifts, party decorations, and surprises for your loved ones!';
          break;
        case 'contact details':
          botReply = '📞 You can reach us at +91-1234567890 or email us at support@giftgrove.com';
          break;
        case 'track delivery':
          botReply = '🚚 Please enter your **Order ID** to track your delivery.';
          setIsAwaitingOrderId(true);
          break;
        case 'return policy':
          botReply = '🔄 You can return items within 7 days of delivery. Terms apply.';
          break;
        case 'offers & discounts':
          botReply = '💸 Enjoy up to 60% off on birthday gift combos. Don’t miss out!';
          break;
        case 'birthday gift ideas':
          botReply = '🎂 Popular birthday gifts include personalized mugs, LED photo frames, surprise boxes, and cakes!';
          break;
        case 'store location':
          botReply = '📍 We operate online, but our main warehouse is located in Ahmedabad, Gujarat.';
          break;
        case 'payment methods':
          botReply = '💳 We accept UPI, Credit/Debit Cards, Netbanking, and Cash on Delivery.';
          break;
        case 'customer reviews':
          botReply = '📝 Our store has a 4.8★ rating from 1,200+ happy customers!';
          break;
        case 'cancel order':
          botReply = '❌ To cancel your order, contact support@giftgrove.com within 24 hours of placing the order.';
          break;
        default:
          botReply = '🤖 Sorry, I didn’t catch that. Please choose an option or try rephrasing!';
          break;
      }
    }

    setMessages(prev => [...prev, { from: 'bot', text: botReply }]);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 font-sans">
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="bg-[#7d0492] flex items-center gap-1 !text-[12px] text-white !py-2 px-5 rounded-full shadow-xl hover:brightness-110 transition"
        >
       <FaHeadphones className='text-[13px]'/> Chat with Us
        </button>
      )}

      {isOpen && (
        <div className="w-80 sm:w-72 h-[480px] bg-white  rounded shadow-lg flex flex-col overflow-hidden">
          <div className="bg-[#7d0492] text-white p-2 flex justify-between items-center">
            <span className="font-[600]">FAQ Bot</span> 
            <Button onClick={toggleChat} className="!text-white !text-[16px]">✖</Button>
          </div>

          <div className="flex-1 p-2 overflow-scroll space-y-2">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`px-3 py-1 rounded text-[12px] whitespace-pre-line ${
                    msg.from === 'user' ? '!bg-[#7d0492] text-white' : 'bg-gray-200'
                  } `}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Options */}
          <div className="flex flex-wrap gap-1 py-1 px-2">
            {options.map((opt, i) => (
              <button
                key={i}
                className="!text-[12px] !px-2 py-2 bg-gray-400 !text-white !font-[400] rounded hover:bg-gray-500 transition"
                onClick={() => handleSend(opt)}
              >
                {opt}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(input);
            }}
            className="flex items-center  border border-gray-300 mx-2 mb-1 p-1"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 text-sm px-2 py-1 outline-none"
            />
            <button type="submit" className="!text-[#7d0492] hover:brightness-110 p-1">
              <FaPaperPlane  className='!text-[#7d0492]'/>
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
