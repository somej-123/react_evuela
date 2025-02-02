// src/pages/Chat.tsx
import React, { useState } from "react";

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<{ user: string; ai: string }[]>([]);
  const [inputValue, setInputValue] = useState("");

  const sendMessage = async () => {
    const userMessage = inputValue.trim();
    if (!userMessage) return;

    // 사용자 메시지 추가
    setMessages((prevMessages) => [
      ...prevMessages,
      { user: userMessage, ai: "" },
    ]);
    setInputValue("");

    try {
      const response = await fetch("http://localhost:3001/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();

      // AI 응답 추가
      setMessages((prevMessages) =>
        prevMessages.map((msg, index) =>
          index === prevMessages.length - 1
            ? { ...msg, ai: data.response }
            : msg
        )
      );
    } catch (error) {
      console.error("Error:", error);
      setMessages((prevMessages) =>
        prevMessages.map((msg, index) =>
          index === prevMessages.length - 1
            ? { ...msg, ai: "오류가 발생했습니다." }
            : msg
        )
      );
    }
  };

  return (
    <div
      id="chat-container"
      style={{ width: "80%", maxWidth: "800px", margin: "20px auto" }}
    >
      <div
        id="messages"
        style={{
          height: "400px",
          border: "1px solid #ccc",
          overflowY: "auto",
          padding: "10px",
          marginBottom: "10px",
        }}
      >
        {messages.map((msg, index) => (
          <div key={index}>
            <p>
              <strong>나:</strong> {msg.user}
            </p>
            {msg.ai && (
              <p>
                <strong>AI:</strong> {msg.ai}
              </p>
            )}
          </div>
        ))}
      </div>
      <div id="input-container" style={{ display: "flex", gap: "10px" }}>
        <input
          type="text"
          id="message-input"
          placeholder="메시지를 입력하세요"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
          style={{ flexGrow: 1, padding: "5px" }}
        />
        <button onClick={sendMessage}>전송</button>
      </div>
    </div>
  );
};

export default Chat;
