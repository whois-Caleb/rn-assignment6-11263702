import { StyleSheet } from "react-native";

export default homeStyles = StyleSheet.create({ 
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    headerNameContainer: {
        flexDirection: 'column',
        // alignSelf: 'center',
        // justifyContent: 'center',
        // alignItems: 'center',
        // alignContent: 'center',
        backgroundColor: 'white',
        paddingTop: 15,
        paddingBottom: 5,
        marginBottom: 20,
    },
    headerText: {
        color: 'black',
        fontSize: 30,
        alignSelf: 'center',
        //fontWeight: 'bold',
        fontFamily: 'Swifted Regular',
    },
    headerIconsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

});