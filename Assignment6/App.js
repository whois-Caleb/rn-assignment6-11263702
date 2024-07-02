import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import * as FileSystem from 'expo-file-system';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/homeScreen';
import CheckoutScreen from './screens/checkoutScreen';
import { Ionicons } from '@expo/vector-icons';
import homeStyles from './styles/homeStyles';
import checkoutStyles from './styles/checkoutStyles';
import Asset from 'expo-asset';
import dress1 from './assets/dress1.png';
import dress2 from './assets/dress2.png';
import dress3 from './assets/dress3.png';
import dress4 from './assets/dress4.png';
import dress5 from './assets/dress5.png';
import dress6 from './assets/dress6.png';
import dress7 from './assets/dress7.png';


const picturesDir = `${FileSystem.documentDirectory}pictures`;
const createPicturesDirectory = async () => {
  const dirInfo = await FileSystem.getInfoAsync(picturesDir);
  if (!dirInfo.exists) {
    console.log('Creating pictures directory');
    await FileSystem.makeDirectoryAsync(picturesDir, { intermediates: true });
  }
};

const downloadAssets = async () => {
  try {
    await createPicturesDirectory(); 
    const assets = [
    { source: dress1, name: 'dress1.png' },
    { source: dress2, name: 'dress2.png' },
    { source: dress3, name: 'dress3.png' },
    { source: dress4, name: 'dress4.png' },
    { source: dress5, name: 'dress5.png' },
    { source: dress6, name: 'dress6.png' },
    { source: dress7, name: 'dress7.png' },
    ];

    for (const asset of assets) {
      const localAsset = await Asset.fromModule(asset.source).downloadAsync();
      await copyFile(localAsset, asset.name);
    }
  } catch (error) {
    console.error('Error in downloadAssets:', error);
    throw error; // Re-throw the error if you want to handle it further up the chain.
  }
};

const copyFile = async (asset, fileName) => {
  try {
    const fileUri = `${picturesDir}/${fileName}`;
    await FileSystem.copyAsync({
      from: asset.localUri,
      to: fileUri,
    });
    console.log(`Copied ${fileName} to ${fileUri}`);
  } catch (error) {
    console.error(`Error copying ${fileName}:`, error);
  }
};

const Drawer = createDrawerNavigator();

const fetchFonts = () => {
  return Font.loadAsync({
    'Swifted Regular' : require('./assets/fonts/Swifted DEMO.otf'),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    createPicturesDirectory().catch(error => {
      console.error('Error creating pictures directory: ', error);
    });
    
    downloadAssets().catch(error => {
      console.error('Error downloading assets: ', error);
    });

  }, []);

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
