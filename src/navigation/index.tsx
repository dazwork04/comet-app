import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HeaderButton, Text } from '@react-navigation/elements';
import {
  createStaticNavigation,
  NavigationContainer,
  StaticParamList,
} from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native';
import bell from '../assets/bell.png';
import newspaper from '../assets/newspaper.png';
import { Home } from '../components/screens/Home';
import { Profile } from '../components/screens/Profile';
import { Settings } from '../components/screens/Settings';
import { Updates } from '../components/screens/Updates';
import { NotFound } from '../components/screens/NotFound';
import { Blank } from '../components/screens/Blank';
import ButtonTabNavigator from './ButtomTabNavigator';

const linking = {
  enabled: true,
  prefixes: ['helloworld://'],
  config: {
    screens: {
      Profile: {
        path: ':user(@[a-zA-Z0-9-_]+)',
        parse: {
          user: (value: string) => value.replace(/^@/, ''),
        },
        stringify: {
          user: (value: string) => `@${value}`,
        },
      },
      NotFound: '*', // Catch all undefined routes
    },
  },
};

const onReady = () => {
  SplashScreen.hideAsync();
};

type RootStackParamList = {
  Home: undefined;
  Profile: { user: string };
  Settings: undefined;
  Blank: undefined;
  NotFound: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = ({theme} : {theme:any}) => {
  return (
    <NavigationContainer theme={theme} linking={linking} onReady={onReady}>
      <RootStack.Navigator initialRouteName='Home'>
        <RootStack.Screen name="Home" component={ButtonTabNavigator} options={{ headerShown: false }} />
        <RootStack.Screen name="Profile" component={Profile} />
        <RootStack.Screen name="Settings" component={Settings} options={({ navigation }) => ({
          presentation: 'modal',
          headerRight: () => (
            <HeaderButton onPress={navigation.goBack}>
              <Text>Close</Text>
            </HeaderButton>
          ),
        })} />
        <RootStack.Screen name="Blank" component={Blank} options={{ title: 'Blank Stack' }} />
        <RootStack.Screen name="NotFound" component={NotFound} options={{ title: '404' }} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
