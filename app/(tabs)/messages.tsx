import { FlatList, View } from 'react-native';


import { MessageInput } from '@/components/ui/messageInput';
import { useMessages } from '@/hooks/useMessages';
import { MessageBubble } from '@/components/MessageBubble';

export default function MessagesScreen() {
  const { messages, sendMessage } = useMessages();
  return (
    <View className="flex-1 p-4">
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MessageBubble {...item} />}
      />
      <MessageInput onSend={sendMessage} />
    </View>
  );
}
