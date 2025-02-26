import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { HeaderButton, Text } from '@react-navigation/elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ButtonTabNavigator from './ButtomTabNavigator';
import { Profile } from './screens/Profile';
import { Settings } from './screens/Settings';
import { Blank } from './screens/Blank';
import { NotFound } from './screens/NotFound';
import * as SplashScreen from 'expo-splash-screen';

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
  Main: undefined;
  Profile: { user: string };
  Settings: undefined;
  Blank: undefined;
  NotFound: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
  return (
    <NavigationContainer linking={linking} onReady={onReady}>
      <RootStack.Navigator>
        <RootStack.Screen name="Main" component={ButtonTabNavigator} options={{ headerShown: false }} />
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
