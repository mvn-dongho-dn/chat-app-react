import { Layout, Form, Input, Row, Col, Button, Typography, Avatar } from 'antd';
import { Comment, Tooltip, List } from 'antd';
import { SendOutlined, UserOutlined, AntDesignOutlined } from '@ant-design/icons';
import moment from 'moment';
const { Header, Footer, Content } = Layout;
const { TextArea } = Input;
const { Title, Text } = Typography;

const ChatMain = () => {
  const data = [
    {
      actions: [<span key="comment-list-reply-to-0">Reply to</span>],
      author: 'Han Solo',
      avatar: 'https://joeschmoe.io/api/v1/random',
      content: (
        <p>
          We supply a series of design principles, practical patterns and high quality design
          resources (Sketch and Axure), to help people create their product prototypes beautifully and
          efficiently.
        </p>
      ),
      datetime: (
        <Tooltip title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
          <span>{moment().subtract(1, 'days').fromNow()}</span>
        </Tooltip>
      ),
    },
    {
      actions: [<span key="comment-list-reply-to-0">Reply to</span>],
      author: 'Han Solo',
      avatar: 'https://joeschmoe.io/api/v1/random',
      content: (
        <p>
          We supply a series of design principles, practical patterns and high quality design
          resources (Sketch and Axure), to help people create their product prototypes beautifully and
          efficiently.
        </p>
      ),
      datetime: (
        <Tooltip title={moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm:ss')}>
          <span>{moment().subtract(2, 'days').fromNow()}</span>
        </Tooltip>
      ),
    },
  ];

  return (
    <Layout className="site-layout">
      <Header className="site-layout-background" style={{padding: '0 16px'}}>
        <Row align="middle" style={{height: '100%'}}>
          <Col>
            <Title style={{margin: 0, color: '#fff'}} level={4}>Frontend Room</Title>
          </Col>
          <Col style={{marginLeft: 'auto', display: 'flex', alignItems: 'center'}}>
            <Avatar.Group
              maxCount={2}
              size="large"
              maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
            >
              <Avatar src="https://joeschmoe.io/api/v1/random" />
              <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
              <Tooltip title="Ant User" placement="top">
                <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
              </Tooltip>
              <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
            </Avatar.Group>
          </Col>
        </Row>
      </Header>
      <Content style={{ margin: '0 16px', display: 'flex', alignItems: 'flex-end' }}>
        <List
          className="comment-list"
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <li>
              <Comment
                actions={item.actions}
                author={item.author}
                avatar={item.avatar}
                content={item.content}
                datetime={item.datetime}
              />
            </li>
          )}
        />
      </Content>
      <Footer>
        <Form>
          <Row wrap={false} align="middle">
            <Col flex="auto" style={{paddingRight: 10}}>
              <Form.Item style={{ marginBottom: 0 }}>
                <TextArea />
              </Form.Item>
            </Col>
            <Col flex="none">
              <Button type="primary" shape="circle">
                <SendOutlined />
              </Button>
            </Col>
          </Row>
        </Form>
      </Footer>
    </Layout>
  );
}

export default ChatMain;
