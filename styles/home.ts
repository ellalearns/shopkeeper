import { StyleSheet } from "react-native";
import { fonts } from ".";


export const homeStyles = StyleSheet.create({
    inputtxt: {
        fontFamily: fonts.regular,
        color: "#312f2f"
    },

    inputV: {
        flexDirection: "row",
        alignItems: "center",
        width: "50%",
        backgroundColor: "#e5e5ea",
        paddingHorizontal: 5,
        borderRadius: 20
    },

    headerV: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 24
    },

    headerTxt: {
        fontFamily: fonts.bold,
        fontSize: 30, 
        paddingRight: 5,
        color: "#312f2f"
    },

    recentTxt: {
        fontFamily: fonts.regular,
        fontSize: 20,
        color: "#312f2f",
        paddingBottom: 20
    },

    productV: {
        flexDirection: "row",
        marginBottom: 16,
        height: 100,
        borderWidth: 1,
        borderColor: "#dfc87c",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10
    },

    productImg: {
        width: 50,
        height: 50,
        resizeMode: "cover",
        borderRadius: 100
    },

    productName: {
        fontFamily: fonts.bold,
        fontSize: 28,
        paddingHorizontal: 10,
        overflow: "hidden"
    },

    productPrice: {
        fontFamily: fonts.bold,
        fontSize: 28,
        paddingHorizontal: 10,
        overflow: "hidden",
    },

    floatingT: {
        position: "absolute",
        top: 0,
        right: 0,
        paddingHorizontal: 15,
        fontFamily: fonts.light,
        fontSize: 16,
        backgroundColor: "#dfc87c",
        borderRadius: 9,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: 0
    },

    floatingBottomT: {
        position: "absolute",
        bottom: 0,
        right: 0,
        paddingHorizontal: 15,
        fontFamily: fonts.light,
        fontSize: 16,
        backgroundColor: "#dfc87c",
        borderRadius: 9,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 0
    },

    nameV: {
        flexDirection: "row",
        alignItems: "center"
    },

    scrollV: {
        paddingBottom: 100
    }
})
