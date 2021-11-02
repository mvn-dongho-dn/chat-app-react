import React from 'react';
import { Form, Input, Button, Typography, Divider, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
const { Title } = Typography;

const Register = () => {
  const auth = useAuth();

  const onFinish = (values) => {
    auth.register(values);
  };

  return (
    <div style={{maxWidth: '400px', padding: '50px 0', margin: '0 auto'}}>
      <Title level={2}>Register</Title>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item label="First Name" name="firstName">
          <Input type="text" />
        </Form.Item>
        <Form.Item label="Last Name" name="lastName">
          <Input type="text" />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input type="text" />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input type="password" />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="primary" block>Login</Button>
        </Form.Item>
        <Form.Item style={{textAlign: 'center'}}>
          Or<br/>
          <Link to="/auth/login">Login</Link>
        </Form.Item>
        <Divider />
        <Row gutter={20}>
          <Col span={12}>
            <Button block>Login with Facebook</Button>
          </Col>
          <Col span={12}>
            <Button block>Login with Facebook</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default Register;
