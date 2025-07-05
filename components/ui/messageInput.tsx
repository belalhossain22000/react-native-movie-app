import { useState } from 'react';
import { TextInput, TouchableOpacity, View, Text } from 'react-native';
export const MessageInput = ({ onSend }: { onSend: (text: string) => void }) => {
  const [text, setText] = useState('');
  return (
    <View className="flex-row items-center border-t border-gray-300 p-2">
      <TextInput
        className="flex-1 border rounded p-2"
        placeholder="Type a message..."
        value={text}
        onChangeText={setText}
      />
      <TouchableOpacity
        className="bg-blue-500 px-4 py-2 ml-2 rounded"
        onPress={() => {
          onSend(text);
          setText('');
        }}>
        <Text className="text-white">Send</Text>
      </TouchableOpacity>
    </View>
  );
};