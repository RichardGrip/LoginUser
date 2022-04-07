import React from "react";
import { useState } from "react";
import { Form, Input, Button, Spin } from "antd";
import { useNavigate } from "react-router-dom";
import "antd/dist/antd.css";
import "./Login.css";

const Login = () => {
  const [form] = Form.useForm();
  const [state, setState] = React.useState(false);
  const navigate = useNavigate();
  const [requiredMark, setRequiredMarkType] = useState("required");

  const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue);
  };

  const onFinish = () => {
    setState(!state);
    localStorage.setItem("isLogin", true);
    setTimeout(() => navigate("/"), 2000);
  };

  return (
    <div className="wrapper">
      <div className="container">
        <span className="avtorization">Авторизация</span>
        <Form
          form={form}
          layout="vertical"
          initialValues={{
            requiredMarkValue: requiredMark,
          }}
          onValuesChange={onRequiredTypeChange}
          requiredMark={requiredMark}
          action=""
          onFinish={onFinish}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Пожалуйста введите свою почту" },
              { type: "email", message: "Введите валидную почту" },
            ]}
            hasFeedback
          >
            <Input placeholder="input email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Пожалуйста введите свой пароль" },
              { whitespace: true },
              {
                pattern: new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z]).{8,}$/),
                message: "Введите валидный пароль",
              },
            ]}
            hasFeedback
          >
            <Input.Password placeholder="input password" />
          </Form.Item>
          <Form.Item>
            <div className="button_spin">
              <Button type="primary" htmlType="submit">
                Авторизация
              </Button>
              <Spin spinning={state} />
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
