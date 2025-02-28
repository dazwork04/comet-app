import { BottomTabNavigationOptions, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Image } from 'react-native';
import TestButton from "../components/testButton";
import bell from '../assets/bell.png';
import newspaper from '../assets/newspaper.png';
import { Ionicons } from '@expo/vector-icons';
import { Home } from "../components/screens/Home";
import { Extra } from "../components/screens/Extra";
import { Updates } from "../components/screens/Updates";

const HomeTabs = createBottomTabNavigator();

const screenOptions: BottomTabNavigationOptions = {
  tabBarActiveTintColor: 'tomato',
}

const ButtonTabNavigator = () => {
  return (
    <HomeTabs.Navigator screenOptions={screenOptions}>
      <HomeTabs.Screen
        name="Main"
        component={Home}
        options={{
          title: 'Feed',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image
              source={newspaper}
              tintColor={color}
              style={{
                width: size,
                height: size,
              }}
            />
          ),
        }}
      />
      <HomeTabs.Screen
        name="Extra"
        component={Extra}
        options={{
          title: 'Ems Extra',
          headerRight: () => (
            <TestButton/>
          ),
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ribbon" size={size} color={color}/>
          ),
        }}
      />
      <HomeTabs.Screen
        name="Updates"
        component={Updates}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={bell}
              tintColor={color}
              style={{
                width: size,
                height: size,
              }}
            />
          ),
        }}
      />
    </HomeTabs.Navigator>
  );
};

export default ButtonTabNavigator;

// const HomeTabs_x = createBottomTabNavigator({
//   screens: {
//     Home: {
//       screen: Home,
//       options: {
//         title: 'Feed',
//         headerShown: false,
//         tabBarIcon: ({ color, size }) => (
//           <Image
//             source={newspaper}
//             tintColor={color}
//             style={{
//               width: size,
//               height: size,
//             }}
//           />
//         ),
//       },
//     },
//     Extra: {
//       screen: Extra,
//       options: {
//         title: 'Ems Extra',
//         headerRight: () => (
//           <TestButton/>
//         ),
//         tabBarIcon: ({ color, size }) => (
//           // <Image
//           //   source={bell}
//           //   tintColor={color}
//           //   style={{
//           //     width: size,
//           //     height: size,
//           //   }}
//           // />
//           <Ionicons name="ribbon" size={size} color={color}/>
//         ),
//       },
//     },
//     Updates: {
//       screen: Updates,
//       options: {
//         tabBarIcon: ({ color, size }) => (
//           <Image
//             source={bell}
//             tintColor={color}
//             style={{
//               width: size,
//               height: size,
//             }}
//           />
//         ),
//       },
//     },
//   },
// });