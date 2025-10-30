import { StyleSheet } from "react-native";
import { fonts } from ".";

export const addStyles = StyleSheet.create({
    priceV: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap"
    },

    subPriceV: {
        width: "45%"
    },

    imgT: {
        fontFamily: fonts.regular,
        fontSize: 18
    },

    uploadImg: {
        width: 155,
        height: 155,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 155,
        alignSelf: "center",
        marginBottom: 16,
        borderWidth: 1,
        borderColor: "#dfc87c"
    },

    img: {
        resizeMode: "cover",
        width: "100%",
        height: "100%",
        borderRadius: 155
    },

    finishB: {
        backgroundColor: "#dfc87c",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        width: "70%",
        alignSelf: "center"
    },

    finishT: {
        fontFamily: fonts.bold,
        fontSize: 24,
        color: "#fffffc"
    },

    disabled: {
        opacity: 0.5
    }
})
