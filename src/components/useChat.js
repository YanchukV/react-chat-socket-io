import { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
const socket = socketIOClient("http://localhost:8080");

const useChat = () => {

  const [userName, setUserName] = useState("")
  const [name, setName] = useState(null)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([])

  useEffect(() => {
    socket.on("message", message => {
      setMessages([...messages, message])
    })
    return () => {
      socket.off("message");
    };
  }, [messages]);

  const handleSetName = (e) => {
    if (!name) {
      setName(userName)
    }
  };

  const handleSubmit = () => {
    const msg = {
      id: Math.random() * 10,
      message,
      userName: name,
    }
    setMessages([...messages, msg]);
    setMessage("");
    socket.emit("message", msg);
  };

  return { name, userName, message, messages, handleSubmit, handleSetName, setUserName, setMessage };
};

export default useChat;