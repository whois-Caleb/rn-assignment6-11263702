import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import * as FileSystem from 'expo-file-system';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './screens/homeScreen';
import CheckoutScreen from './screens/checkoutScreen';
import {Ionicons} from '@expo/vector-icons';
import homeStyles from './styles/homeStyles';
import checkoutStyles from './styles/checkoutStyles';

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
      

      <Drawer.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Swifted Regular',
          },
        }}
      >
        <Drawer.Screen 
        name="Open Fashion" 
        component={HomeScreen}
        options={({ navigation }) => ({
          headerLeft: () => (
            <Ionicons
              name="menu-outline"
              size={30}
              color="black"
              style={{marginLeft: 10}}
              onPress={() => navigation.toggleDrawer()}
            />
          ),
          headerTitle: () => ( 
            <View style={homeStyles.headerNameContainer}>
            <Text style={homeStyles.headerText}>Open</Text> 
            <Text style={homeStyles.headerText}>Fashion</Text>
            </View>
          ),
          headerTitleAlign: 'center',
          headerRight: () => (
            <View style={homeStyles.headerIconsContainer}>
              <TouchableOpacity>
                <Ionicons
                  name="search-outline"
                  size={30}
                  color="black"
                  style={{marginRight: 10}}
                  // onPress={() => navigation.toggleDrawer()}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <Ionicons
                  name="bag-outline"
                  size={30}
                  color="black"
                  style={{marginRight: 10}}
                  // onPress={() => navigation.toggleDrawer()}
                />
              </TouchableOpacity>
            </View>
          ),
          })
        }
        />

        <Drawer.Screen 
        name="Checkout" 
        component={CheckoutScreen} 
        options={({ navigation }) => ({
          headerLeft: () => (
            <Ionicons
              name="menu-outline"
              size={30}
              color="black"
              style={{marginLeft: 10}}
              onPress={() => navigation.toggleDrawer()}
            />
          ),
          headerTitle: () => ( 
            <View style={checkoutStyles.headerNameContainer}>
            <Text style={checkoutStyles.headerText}>Checkout</Text> 
            </View>
          ),
          headerTitleAlign: 'center',
          headerRight: () => (
            <TouchableOpacity>
              <Ionicons
                name="search-outline"
                size={30}
                color="black"
                style={{marginRight: 10}}
                // onPress={() => navigation.toggleDrawer()}
              />
            </TouchableOpacity>
            ),
          })
        }
        />
      
      </Drawer.Navigator>

    </NavigationContainer>
  );
};
