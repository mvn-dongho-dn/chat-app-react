import { Layout, Menu, Row, Col, Avatar, Modal, Form, Input } from 'antd';
import {
  PlusSquareOutlined,
  TeamOutlined
} from '@ant-design/icons';
import { useState } from 'react';

const { Sider } = Layout;
const { SubMenu } = Menu;
const { TextArea } = Input;

const ChatSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onCollapse = collapsed => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };

  const handleAddNew = () => {
    setIsModalVisible(true);
    console.log('Hanndle add New');
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Modal title="Add Room" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Form layout="vertical">
          <Form.Item label="Room Name">
            <Input />
          </Form.Item>
          <Form.Item label="Description">
            <TextArea />
          </Form.Item>
        </Form>
      </Modal>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <Row align="middle" style={{padding: '14px 10px'}}>
          <Col>
            <Avatar src="https://joeschmoe.io/api/v1/random" />
          </Col>
          <Col style={{color: '#fff', paddingLeft: 10}}>
            Ho Van Dong
          </Col>
        </Row>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Rooms">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<PlusSquareOutlined />} onClick={handleAddNew}>
            Add new room
          </Menu.Item>
        </Menu>
      </Sider>
    </>
  );
}

export default ChatSidebar;
