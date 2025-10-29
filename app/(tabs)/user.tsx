import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";


export default function User () {
    return (
        <SafeAreaProvider>
            <SafeAreaView></SafeAreaView>
        </SafeAreaProvider>
    )
}

