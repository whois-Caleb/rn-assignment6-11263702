import React from "react";
import homeStyles from "../styles/homeStyles.js";
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, TextInput, FlatList, TouchableOpacity } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { ImageBackground } from "react-native";
import DRESSES from '../data/dressList.js';


const DressItem = ({ title, subTitle, price, image }) => (
    <View style={homeStyles.dressListContainer}>
        <View style={homeStyles.dressContainer}>
            <ImageBackground source={{ uri: image}} style={homeStyles.dressImage} resizeMode='contain'>
                <TouchableOpacity style={homeStyles.addButtonContainer}>
                    <Ionicons
                        name='add-circle-outline'
                        size={25}
                        style={homeStyles.addButton}
                    />
                </TouchableOpacity>
            </ImageBackground>
            <Text style={homeStyles.titleText}>{title}</Text>
            <Text style={homeStyles.subTitleText}>{subTitle}</Text>
            <Text style={homeStyles.price}>{price}</Text>
        </View>
    </View>
);

export default function HomeScreen() {
    return (
             <FlatList
                ListHeaderComponent={            
                    <View style={homeStyles.headingContainer}>
                        <Text style={homeStyles.headingText}>OUR STORY</Text>
                        
                        <View style={homeStyles.titleIconsContainer}>
                            <TouchableOpacity style={homeStyles.iconCircle}>
                                    <Ionicons
                                    name='list-outline'
                                    size={25}
                                    style={{color: 'grey'}}
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
                }
                style={{flex: 1}}
                data={DRESSES}
                keyExtractor={item => item.id}
                numColumns={2}
                renderItem={({ item }) => 
                 <DressItem 
                    title={item.title}
                    subTitle={item.subTitle}
                    price={item.price}
                    image={item.image}
                />
                }
                ListFooterComponent={
                    <View>
                        <Text>Footer</Text>
                    </View>
                }
            />
    );
}