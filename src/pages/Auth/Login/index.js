import React from 'react';
import { Form, Input, Button, Typography, Divider, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { getAuth ,signInWithEmailAndPassword } from 'firebase/auth';
const { Title } = Typography;

const Login = () => {

  const onFinish = (values) => {
    const auth = getAuth();
    const {email, password} = values;
    signInWithEmailAndPassword(auth, email, password).then(e => {
      console.log(e);
    }).catch(err => {
      console.log(err);
    });
  };

  return (
    <div style={{maxWidth: '400px', padding: '50px 0', margin: '0 auto'}}>
      <Title level={2}>Login</Title>
      <Form layout="vertical" onFinish={onFinish}>
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
          <Link to="">Register</Link>
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

export default Login;
