import React from "react";
import safeViewAndroid from "../styles/androidSafeView.js";
import homeStyles from "../styles/homeStyles.js";
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen() {
    return (
        <ScrollView style={homeStyles.container}>
            <StatusBar style="auto" />
            <View style={homeStyles.navButtonContainer}>
                <TouchableOpacity>
                    <Image style={homeStyles.navButton} source={require('../assets/Menu.png')} />
                </TouchableOpacity>
            </View>
            <View style={homeStyles.header}>
                <Text>Home</Text>
            </View>
    
        </ScrollView>
    );
}
