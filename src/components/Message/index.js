import React from "react";
import { Comment, Avatar, Card } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Message = (props) => {

  const { userName, message, className, id } = props;

  return (
    <Card id={id} style={{ width: 300, marginBottom: 15, marginLeft: `${className === 'right' ? 'auto': '0'}` }}>
      <Comment
        author={userName}
        avatar={
          className !== 'right' ?
            (<Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />):
            (<Avatar
              src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
              alt={userName}
            />)
        }
        content={
          <p>
            {message}
          </p>
        }
      />
    </Card>
  )
};

export default Message;