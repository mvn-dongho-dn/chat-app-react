import { Layout } from 'antd';
import ChatSidebar from './ChatSidebar';
import ChatMain from './ChatMain';

const ChatRoom = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <ChatSidebar />
      <ChatMain />
    </Layout>
  );
}

export default ChatRoom;
