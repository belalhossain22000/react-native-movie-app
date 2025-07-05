import { useTime } from '@/hooks/useTime';
import { Text, View } from 'react-native';

export default function ClockWidget() {
  const time = useTime();
  return (
    <View className="items-center justify-center">
      <Text className="text-4xl font-bold">{time}</Text>
    </View>
  );
}