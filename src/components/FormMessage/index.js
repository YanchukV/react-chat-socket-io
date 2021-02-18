import React from "react";
import { Form, Input, Button } from 'antd';

const FormMessage = (props) => {

  const { handleSubmit, setMessage, message } = props;

  return (
    <div>
      <h3>Введите ваше сообщение:</h3>
      <Form.Item>
        <Input.TextArea
          rows={4}
          onChange={e => {
            setMessage(e.target.value)
          }}
          value={message} />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" onClick={handleSubmit} type="primary">
          Отправить сообщение
        </Button>
      </Form.Item>
    </div>
  )
};

export default FormMessage;