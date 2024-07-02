import { StyleSheet } from "react-native";

export default homeStyles = StyleSheet.create({ 
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    headerNameContainer: {
        flexDirection: 'column',
        backgroundColor: 'white',
        paddingTop: 15,
        paddingBottom: 5,
        marginBottom: 20,
    },
    headerText: {
        color: 'black',
        fontSize: 30,
        alignSelf: 'center',
        fontFamily: 'Swifted Regular',
    },
    headerIconsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },
    titleText: {
        color: 'black',
        fontSize: 25,
        alignSelf: 'center',
        fontFamily: 'Swifted Regular',
    },
    titleIconsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconCircle: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: '#F9F9F9',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    },
});