import {
    StyleSheet,
    Dimensions
} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export const Style = StyleSheet.create({
    rowView: {
        flexDirection: 'row',
        flex: 1
    },
    columnView: {
        flexDirection: 'column',


        flex: 1
    },
    header: {
        alignSelf: 'center',
        color: 'white'
    },
    indicatorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70
    },
    valueColumn: {
        flex: 1,

        alignItems: 'center',

    },
    buyPrice: {
        color: '#308C58',
        borderBottomColor: 'gray',
        marginTop: 10,
    },
    sellPrice: {
        color: '#D94350',
        borderBottomColor: 'gray',
        marginTop: 10,
    }


});