import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, HeaderButton, Text } from '@react-navigation/elements';
import {
  createStaticNavigation,
  StaticParamList,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image } from 'react-native';
import bell from '../assets/bell.png';
import newspaper from '../assets/newspaper.png';
import { Home } from './screens/Home';
import { Profile } from './screens/Profile';
import { Settings } from './screens/Settings';
import { Updates } from './screens/Updates';
import { NotFound } from './screens/NotFound';
import { Extra } from './screens/Extra';
import { Blank } from './screens/Blank';
import { Ionicons } from '@expo/vector-icons';
import TestButton from '../component/testButton';

const HomeTabs = createBottomTabNavigator({
  screens: {
    Home: {
      screen: Home,
      options: {
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
      },
    },
    Extra: {
      screen: Extra,
      options: {
        title: 'Ems Extra',
        headerRight: () => (
          <TestButton/>
        ),
        tabBarIcon: ({ color, size }) => (
          // <Image
          //   source={bell}
          //   tintColor={color}
          //   style={{
          //     width: size,
          //     height: size,
          //   }}
          // />
          <Ionicons name="ribbon" size={size} color={color}/>
        ),
      },
    },
    Updates: {
      screen: Updates,
      options: {
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
      },
    },
  },
});

const MyDrawer = createDrawerNavigator({
  screens: {
    Home: {
      screen: HomeTabs,
      options: {
        title: 'Home',
        headerShown: true,
      },
    },
    Profile: {
      screen: Profile,
      linking: {
        path: ':user(@[a-zA-Z0-9-_]+)',
        parse: {
          user: (value) => value.replace(/^@/, ''),
        },
        stringify: {
          user: (value) => `@${value}`,
        },
      },
    },
    Settings: {
      screen: Settings,
      options: ({ navigation }) => ({
        presentation: 'modal',
        headerRight: () => (
          <HeaderButton onPress={navigation.goBack}>
            <Text>Close</Text>
          </HeaderButton>
        ),
      }),
    },
    Blank: {
      screen: Blank,
      options: {
        title: 'Blank Stack',
      },
      linking: {
        path: '*',
      },
    },
    NotFound: {
      screen: NotFound,
      options: {
        title: '404',
      },
      linking: {
        path: '*',
      },
    },
  },
});

// const RootStack = createNativeStackNavigator({
//   screens: {
//     HomeTabs: {
//       screen: HomeTabs,
//       options: {
//         title: 'Home',
//         headerShown: false,
//       },
//     },
//     Profile: {
//       screen: Profile,
//       linking: {
//         path: ':user(@[a-zA-Z0-9-_]+)',
//         parse: {
//           user: (value) => value.replace(/^@/, ''),
//         },
//         stringify: {
//           user: (value) => `@${value}`,
//         },
//       },
//     },
//     Settings: {
//       screen: Settings,
//       options: ({ navigation }) => ({
//         presentation: 'modal',
//         headerRight: () => (
//           <HeaderButton onPress={navigation.goBack}>
//             <Text>Close</Text>
//           </HeaderButton>
//         ),
//       }),
//     },
//     Blank: {
//       screen: Blank,
//       options: {
//         title: 'Blank Stack',
//       },
//       linking: {
//         path: '*',
//       },
//     },
//     NotFound: {
//       screen: NotFound,
//       options: {
//         title: '404',
//       },
//       linking: {
//         path: '*',
//       },
//     },
//   },
// });

export const Navigation = createStaticNavigation(MyDrawer);

type RootStackParamList = StaticParamList<typeof MyDrawer>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
