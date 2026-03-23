import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    backgound: {
        flex: 1,
        backgroundColor: Colors.Background,
    },

    calculatorContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'stretch',
        paddingBottom: 20,
    },

    mainResult: {
        color: Colors.textPrimary,
        fontSize: 60,
        textAlign: 'right',
        fontWeight: '400',
    },

    subResutl: {
        color: Colors.textSecondary,
        fontSize: 30,
        textAlign: 'right',
        fontWeight: '200',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 18,
        paddingHorizontal: 10,
    },

    button: {
        height: 80,
        width: 80,
        backgroundColor: Colors.darkGray,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10
    },

    buttonText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: Colors.textPrimary,
        fontWeight: '200',
        fontFamily: 'SpaceMono',
    }

})