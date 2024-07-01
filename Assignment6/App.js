import React from 'react';
import * as FileSystem from 'expo-file-system';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './screens/homeScreen';
import CheckoutScreen from './screens/checkoutScreen';
import {Ionicons} from '@expo/vector-icons';

//const dressesDir = FileSystem.documentDirectory + 'dresses/';
const Drawer = createDrawerNavigator();

const fetchFonts = () => {
  return Font.loadAsync({
    'Swifted Regular' : require('./assets/fonts/Swifted DEMO.otf'),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
  return (
    <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={console.warn}
    />
    );
  };

  return (
    <NavigationContainer>
      

      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Open Fashion" component={HomeScreen} Ionicons='search-outline' />
        <Drawer.Screen name="Checkout" component={CheckoutScreen} />
      </Drawer.Navigator>

    </NavigationContainer>
  );
};
