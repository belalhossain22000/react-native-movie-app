import { Text, View } from 'react-native';

export const MessageBubble = ({ text, sender }: { text: string; sender: string }) => (
  <View className={`p-3 my-1 rounded-lg max-w-[80%] ${sender === 'me' ? 'bg-blue-500 self-end' : 'bg-gray-200 self-start'}`}>
    <Text className={`${sender === 'me' ? 'text-white' : 'text-black'}`}>{text}</Text>
  </View>
);
