import safeViewAndroid from "../styles/androidSafeView.js";
import checkoutStyles from "../styles/checkoutStyles.js";
import { SafeAreaView, ScrollView, Text, View, Image, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function CheckoutScreen(){
    return(
    <SafeAreaView style={safeViewAndroid.androidSafeArea}>
        <ScrollView>
            <StatusBar style="auto" />
            
        </ScrollView>
    </SafeAreaView>

    );
}
