import React from "react";
import { Layout, Divider, Typography } from 'antd';
import './chat.css';
import Message from "../Message";
import FormMessage from "../FormMessage";
import FormName from "../FormName";
import useChat from "../useChat";


const Chat = () => {

  const { name, userName, message, messages, handleSubmit, handleSetName, setUserName, setMessage } = useChat();

  return (
    <Layout className="layout" style={{height: '100vh'}}>
      <Layout.Content style={{padding: '0 50px', margin: '0 auto', maxWidth: 700, width: '100%'}}>
        <Divider>Чат</Divider>
        <div className="chat-wrapper">
          {!name && (
            <FormName
              handleSetName={handleSetName}
              userName={userName}
              setUserName={setUserName}
            />
           )}
          {name && (
            <p>Привет, <Typography.Text strong>{name}!</Typography.Text></p>
          )}
        </div>
          <div className="card-body overflow-auto">
            {messages.map((msg, index) => (
              <Message
                id={msg.id}
                className={userName === msg.userName ? 'right' : 'left'}
                key={index}
                userName={msg.userName}
                message={msg.message}
              />
            ))}
          </div>
        {name && ( <div className="chat-wrapper">
          <FormMessage
            handleSubmit={handleSubmit}
            setMessage={setMessage}
            message={message}
          />
        </div>)}
      </Layout.Content>
      <Layout.Footer style={{ textAlign: 'center' }}>Created by Yanchuk</Layout.Footer>
    </Layout>
  )
};

export default Chat;