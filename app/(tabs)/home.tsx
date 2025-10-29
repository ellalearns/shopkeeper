import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";


export default function Home () {
    return (
        <SafeAreaProvider>
            <SafeAreaView></SafeAreaView>
        </SafeAreaProvider>
    )
}
