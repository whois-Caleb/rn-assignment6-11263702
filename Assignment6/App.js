import React, { useState, useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import * as SplashScreen from 'expo-splash-screen';
import { Text, View, TouchableOpacity, Platform } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/homeScreen';
import CheckoutScreen from './screens/checkoutScreen';
import { Ionicons } from '@expo/vector-icons';
import homeStyles from './styles/homeStyles';
import checkoutStyles from './styles/checkoutStyles';
import { createPicturesDirectory, downloadAssets, fetchFonts, Drawer, picturesDir } from './data/appRequirements';


export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      try {
    createPicturesDirectory().catch(error => {
      console.error('Error creating pictures directory: ', error);
    });
    
    downloadAssets().catch(error => {
      console.error('Error downloading assets: ', error);
    });
      } catch (error) {
        console.error('Error in useEffect:', error);
      }
    }
  )

  }, []);

  if (Platform.OS !== 'android') {
    SplashScreen.preventAutoHideAsync().catch((e) => {
      console.warn(e);
    });
  }

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
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <Ionicons
                  name="bag-outline"
                  size={30}
                  color="black"
                  style={{marginRight: 10}}
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
