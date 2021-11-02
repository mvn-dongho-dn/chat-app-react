import { Layout, Menu, Row, Col, Avatar, Modal, Form, Input } from 'antd';
import {
  PlusSquareOutlined,
  TeamOutlined,
  LogoutOutlined
} from '@ant-design/icons';
import { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import { addDoc, collection, onSnapshot, query, where } from '@firebase/firestore';
import db from './../../../../firebase/config';
import { useDispatch } from 'react-redux';
import { update } from '../../../../store/room';

const { Sider } = Layout;
const { SubMenu } = Menu;
const { TextArea } = Input;

const ChatSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const auth = useAuth();
  const [form] = Form.useForm();
  const [rooms, setRooms] = useState([]);
  const dispatch = useDispatch();

  const onCollapse = collapsed => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };

  const handleAddNew = () => {
    setIsModalVisible(true);
    // form.resetFields();
  };

  useEffect(() => {
    const q = query(collection(db, 'rooms'), where('members', 'array-contains', auth.user.uid))
    const unsub = onSnapshot(q, (querySnapshot) => {
      const gatherRooms = [];
      querySnapshot.forEach((doc) => {
        gatherRooms.push({...doc.data(), id: doc.id});
        console.log(doc.id, " => ", doc.data());
      });

      setRooms(gatherRooms);
    });

    return unsub;
  }, [auth.user.uid]);

  const handleOk = () => {
    // if (form.isFieldsValidating()) {
      setIsModalVisible(false);
      const data = form.getFieldsValue();
      addDoc(collection(db, 'rooms'), {
        ...data,
        members: [auth.user.uid]
      }).then(e => {
        console.log(e);
      });
    // }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleLogout = () => {
    auth.logout();
  };

  return (
    <>
      <Modal title="Add Room" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Form layout="vertical" form={form}>
          <Form.Item
            label="Room Name"
            name="name"
            rules={[
              {
                required: true,
                message: 'Please input your Room Name'
              }
            ]}>
            <Input />
          </Form.Item>
          <Form.Item label="Description" name="description"
            rules={[
              {
                required: true,
                message: 'Please input your Room Name'
              }
            ]}>
            <TextArea />
          </Form.Item>
        </Form>
      </Modal>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <Row align="middle" style={{padding: '14px 10px'}}>
          <Col>
            <Avatar src={auth.user.photoURL} />
          </Col>
          <Col style={{color: '#fff', paddingLeft: 10}}>
            {auth.user.displayName}
          </Col>
        </Row>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Rooms">
            {
              rooms.map(e => <Menu.Item onClick={() => dispatch(update(e))} key={e.id}>{e.name}</Menu.Item>)
            }
          </SubMenu>
          <Menu.Item key="9" icon={<PlusSquareOutlined />} onClick={handleAddNew}>
            Add new room
          </Menu.Item>
          <Menu.Item key="10" icon={<LogoutOutlined />} onClick={handleLogout}>
            Logout
          </Menu.Item>
        </Menu>
      </Sider>
    </>
  );
}

export default ChatSidebar;
