import safeViewAndroid from "../styles/androidSafeView.js";
import homeStyles from "../styles/checkoutStyles.js";
import { SafeAreaView, ScrollView, Text, View, Image, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function CheckoutScreen(){
    return(
    <SafeAreaView style={safeViewAndroid.androidSafeArea}>
        <ScrollView>
            <StatusBar style="auto" />

            <View style={homeStyles.header}>
                <Text>Checkout</Text>
            </View>
    
        </ScrollView>
    </SafeAreaView>

    );
}
