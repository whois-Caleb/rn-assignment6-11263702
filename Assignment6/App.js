import React from 'react';
import * as FileSystem from 'expo-file-system';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, TextInput, FlatList, TouchableOpacity } from 'react-native';
import safeViewAndroid from "./styles/androidSafeView.js";
import homeStyles from "./styles/homeStyles.js";
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {CreateNativeDrawerNavigator} from '@react-navigation/drawer';

const dressesDir = FileSystem.documentDirectory + 'dresses/';

export default function App() {
  return (
    <SafeAreaView style={safeViewAndroid.androidSafeArea}>
      <StatusBar style="auto" />
    
    <View style={homeStyles.header}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
    
    
    </SafeAreaView>
  );
};
