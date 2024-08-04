import "./App.css";
import { useState } from "react";
import { run } from "./ai";
import ReactMarkdown from "react-markdown";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false); // State to track loading status

  const handleSend = async () => {
    if (input.trim() === "") return; // Prevent sending empty input
    setLoading(true); // Activate spinner
    const response = await run(input);
    setMessages([
      ...messages,
      { text: input, isUser: true },
      { text: response, isUser: false },
    ]);
    setInput("");
    setLoading(false); // Deactivate spinner after response is received
  };

  return (
    <div className="App">
      <div className="chat">
        {messages.map((message, index) => (
          <div key={index} className={message.isUser ? "user-message" : "bot-message"}>
            <ReactMarkdown>{message.text}</ReactMarkdown>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSend} className="buttonload">
          {loading ? <i className="fa fa-spinner fa-spin"></i> : "Send"}
        </button>
      </div>
    </div>
  );
}

export default App;
