import React from "react";
import homeStyles from "../styles/homeStyles.js";
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {Ionicons} from '@expo/vector-icons';

export default function HomeScreen() {
    return (
        <ScrollView style={homeStyles.container}>
            <StatusBar style="auto" />
            
            <View style={homeStyles.titleContainer}>
                <Text style={homeStyles.titleText}>OUR STORY</Text>
                
                <View style={homeStyles.titleIconsContainer}>
                    <TouchableOpacity style={homeStyles.iconCircle}>
                            <Ionicons
                            name='list-outline'
                            size={25}
                            style={{color: 'orange'}}
                            />
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={homeStyles.iconCircle}>
                            <Ionicons
                            name='filter'
                            size={25}
                            style={{color: 'orange'}}
                            />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}
