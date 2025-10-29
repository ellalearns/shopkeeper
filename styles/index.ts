import { StyleSheet } from "react-native";

export const fonts = {
    bold: "Figtree_600SemiBold",
    regular: "Figtree_400Regular",
    light: "Figtree_300Light"
}

export const splashStyles = StyleSheet.create({
    main: {
        backgroundColor: "#e7e4d1",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    txt: {
        fontFamily: fonts.bold,
        fontSize: 36,
        position: "absolute",
        bottom: -70,
        alignSelf: "center",
        color: "#312f2f"
    }
})

export const globalStyles = StyleSheet.create({
    main: {
        backgroundColor: "#fafafa"
    }
})



