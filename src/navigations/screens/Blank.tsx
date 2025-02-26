import { Button, Text } from '@react-navigation/elements';
import { StyleSheet, View } from 'react-native';

export function Blank() {
  return (
    <View style={styles.container}>
      <Text>Blank Screen</Text>
      <Text>BLANK AND EMPTY</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
});
