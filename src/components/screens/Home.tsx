import { Button, Text } from '@react-navigation/elements';
import { StyleSheet, View } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { toggleTheme } from '../../redux/slices/themeSlice';
import { ToggleButton } from 'react-native-paper';

export function Home() {

  const dispatch = useAppDispatch();
  const isThemeDark = useAppSelector((state) => state.theme.isThemeDark);
  
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Text>Open up 'src/App.tsx' to start working on your app!</Text>
      <Button screen="Profile" params={{ user: 'jane' }}>
        Go to Profile
      </Button>
      <Button screen="Settings">Go to Settings</Button>
      <View>
        <Text>Current Theme: {isThemeDark ? 'Dark' : 'Light'}</Text>
        <ToggleButton  onPress={() => dispatch(toggleTheme())} icon={'theme-light-dark'}  />
      </View>
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
