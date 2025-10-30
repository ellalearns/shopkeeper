import { StyleSheet } from "react-native";
import { fonts } from ".";

export const productStyles = StyleSheet.create({
    headerBV: {
        padding: 24
    },

    imgV: {
        // backgroundColor: 'pink',
        width: "100%",
        height: "30%",
        justifyContent: "center",
        alignItems: "center",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#dfc87c"
    },

    img: {
        resizeMode: 'cover',
        width: 100,
        height: 100
    },

    imgVisible: {
        width: "100%",
        height: "100%",
        resizeMode: "cover"
    },

    priceV: {
        paddingHorizontal: 24,
    },

    priceT: {
        fontFamily: fonts.regular,
        fontSize: 32
    },

    buttonV: {
        paddingHorizontal: 24,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingBottom: 36,
        width: "70%",
        alignSelf: "center"
    },

    button: {
        backgroundColor: "#dfc87c",
        width: "45%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15
    },

    buttonT: {
        fontFamily: fonts.bold,
        fontSize: 18,
        color: "#fffffc"
    },

    rowV: {
        flexDirection: "row",
        justifyContent: "space-between"
    },

    priceVRow: {
        paddingHorizontal: 24,
        width: "50%"
    },
})
