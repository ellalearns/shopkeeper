import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import { Image, View } from "react-native";

const TabIcon = ({ focused, activeIcon, icon }: any) => {
    return (
        <View style={[{
            width: "220%",
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
            height: "150%",
            borderRadius: 40,
            marginTop: 5
        }, focused && {backgroundColor: "#dfc87c"}]}>
            <Image source={focused ? activeIcon : icon} style={focused ? null : null} />
        </View>
    )
}

export default function _Layout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: "rgba(231, 228, 209, 0.8)",
                    marginHorizontal: 40,
                    position: "absolute",
                    bottom: 20,
                    elevation: 0,
                    justifyContent: "flex-start",
                    borderTopWidth: 0,
                    borderRadius: 20,
                    height: "5%",
                    paddingHorizontal: 0
                }
            }}>

            <Tabs.Screen
                name="home"
                options={{
                    title: "Home",
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} activeIcon={images.activeHome} icon={images.home} />
                }}
            />

            <Tabs.Screen
                name="add"
                options={{
                    title: "Add",
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} activeIcon={images.activePlus} icon={images.plus} />
                }}
            />
        </Tabs>
    )
}
