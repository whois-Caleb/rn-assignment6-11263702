import safeViewAndroid from "../styles/androidSafeView.js";
import checkoutStyles from "../styles/checkoutStyles.js";
import { SafeAreaView, ScrollView, Text, View, Image, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function CheckoutScreen(){
    return(
    <ScrollView contentContainerStyle={checkoutStyles.container}>
        <TouchableOpacity style={checkoutStyles.checkOutButton}>
            <Text style={{color: 'white', fontSize: 20, fontFamily: 'Swifted Regular'}}>CHECKOUT</Text>
        </TouchableOpacity>
    </ScrollView>
    );
}
