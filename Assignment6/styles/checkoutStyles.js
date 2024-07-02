import { StyleSheet } from "react-native";

export default checkoutStyles = StyleSheet.create({ 
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    headerNameContainer: {
        flexDirection: 'column',
        backgroundColor: 'white',
        paddingTop: 15,
        marginBottom: 20,
    },
    headerText: {
        color: 'black',
        fontSize: 30,
        alignSelf: 'center',
        //fontWeight: 'bold',
        fontFamily: 'Swifted Regular',
    },
    navButtonContainer: {
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    navButton: {
        height: 40,
        width: 40,
    },
    headerIconsContainer: {
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },

});