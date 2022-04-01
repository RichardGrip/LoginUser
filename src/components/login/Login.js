import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Form, Input, Button } from "antd";
import "antd/dist/antd.css";
import "./Login.css";

const Login = () => {
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState("required");

  const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue);
  };
  return (
    <div className="wrapper">
      <div className="container">
        <span>Авторизация</span>
        <Form
          form={form}
          layout="vertical"
          initialValues={{
            requiredMarkValue: requiredMark,
          }}
          onValuesChange={onRequiredTypeChange}
          requiredMark={requiredMark}
          onSubmit
          action=""
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Please enter a valid email" },
            ]}
            hasFeedback
          >
            <Input placeholder="input email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Please enter your password" },
              { whitespace: true },
              { min: 8 },
            ]}
            hasFeedback
          >
            <Input.Password placeholder="input password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Авторизация
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
