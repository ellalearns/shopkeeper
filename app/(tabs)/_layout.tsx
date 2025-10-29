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
            height: "120%",
            borderRadius: 40
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
                    backgroundColor: "transparent",
                    marginHorizontal: 25,
                    position: "absolute",
                    bottom: 20,
                    elevation: 0,
                    justifyContent: "center",
                    alignItems: "center",
                    borderTopWidth: 0
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

            <Tabs.Screen
                name="categories"
                options={{
                    title: "Categories",
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} activeIcon={images.activeCategory} icon={images.category} />
                }}
            />

            <Tabs.Screen
                name="user"
                options={{
                    title: "User",
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} activeIcon={images.activeUser} icon={images.user} />
                }}
            />
        </Tabs>
    )
}
