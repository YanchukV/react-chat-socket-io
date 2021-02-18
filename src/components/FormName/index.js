import React from "react";
import { Input, Button } from 'antd';

const FormName = (props) => {

  const { handleSetName, setUserName, userName } = props;

  return (
    <>
      <h3>Назовите ваше имя:</h3>
      <div className="chat__input">
        <Input
          onChange={e => setUserName(e.target.value)}
          value={userName}
          type="text"
          placeholder="Ваше имя"
        />
        <Button type="primary" onClick={handleSetName}>
          Отправить
        </Button>
      </div>
    </>
  )
};

export default FormName;