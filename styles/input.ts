import { StyleSheet } from "react-native";
import { fonts } from ".";


export const inputStyles = StyleSheet.create({
    main: {
        width: "100%",
        marginBottom: 16
    },

    txtBox: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#dfc87c",
        marginTop: 5,
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        paddingRight: 10
    },

    txt: {
        width: "80%",
        fontFamily: fonts.regular,
        fontSize: 18,
        paddingHorizontal: 10
    },

    label: {
        fontFamily: fonts.bold,
        fontSize: 18
    },

    desc: {
        height: 100,
        wordWrap: "wrap",
        flexWrap: "wrap"
    }
})
