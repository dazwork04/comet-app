import { Button, Text } from '@react-navigation/elements';
import { StyleSheet, View } from 'react-native';

export function Extra() {
  return (
    <View style={styles.container}>
      <Text>Extra Screen</Text>
      <Text>EXTRAAAAAAAAAAAAA</Text>
      <Button screen="Blank">Go to Blank Page</Button>
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
