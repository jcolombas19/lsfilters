import { StyleSheet } from 'react-native';
import { Dimensions} from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    bigPage: {
        flex: 1, 
        backgroundColor: '#FFDCC6', 
        flexDirection: 'column'
    },

    camera:{
        backgroundColor:'green',
        width: windowWidth, 
        height: windowHeight-300
    },

    replaceCamera:{
        height:windowHeight-300, 
        justifyContent: 'center', 
        alignItems: 'center'
    },

    replaceCameraText:{
        fontWeight: '600', 
        color: '#ec8744ff'
    }, 

    underBox:{
        flex:1, 
        flexDirection: "column", 
        paddingTop: 20, 
        alignSelf: 'center', 
        backgroundColor: '#FFF4EC', 
        paddingBottom: 10, 
        width: '100%', 
        justifyContent: 'space-between', 
        boxShadow: 'inset 0px 5px 5px rgba(255, 188, 125, 0.4)'
    },

    selectFilter:{
        marginLeft: 15, 
        color: '#ec8744ff', 
        fontWeight: '600',
        fontSize: 16
    },

    filterContainer:{
        paddingHorizontal: 20, 
        gap: 20, 
        paddingVertical: 10, 
        backgroundColor: '#FFDCC6', 
        marginVertical: 20,
        marginTop: 15, 
        boxShadow: 'inset 0px 5px 5px rgba(206, 154, 105, 0.23),  inset -0px -5px 5px rgba(206, 154, 105, 0.23)'
    },

    butonBox:{
        flexDirection: 'row', 
        justifyContent: 'space-evenly', 
        marginHorizontal: 20, 
        marginBottom: 10
    },

    butons:{
        backgroundColor: '#FFB88A', 
        paddingHorizontal: 10, 
        paddingVertical: 7,
        borderRadius: 5
    }
});