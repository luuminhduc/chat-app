import React, { useRef, useState } from "react";

const Chat = () => {
  const [arr, setArr] = useState([]);

  const chatContainer = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setArr([...arr, text]);
    chatContainer.current.scrollTop = chatContainer.current.scrollHeight;
  };

  const [text, setText] = useState("");

  return (
    <div className="chat">
      <div className="chat_header">
        <h3>Header</h3>
        <h3>Header</h3>

        <h3>Header</h3>

        <h3>Header</h3>

        <h3>Header</h3>
      </div>
      <div ref={chatContainer} className="chat_container">
        {arr.map((el) => (
          <div className="msg">{el}</div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="chat_form">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Type something"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
