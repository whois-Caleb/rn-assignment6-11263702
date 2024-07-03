import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get('window').width;
export default checkoutStyles = StyleSheet.create({ 
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingBottom: 50,
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
    checkOutButton: {
        backgroundColor: 'black',
        height: 50,
        width: screenWidth,
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        
    },

});