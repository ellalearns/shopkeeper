import { Tabs } from "expo-router";


export default function _Layout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false
            }}>
                
            <Tabs.Screen
                name="home"
                options={{
                    title: "Home"
                }}
            />

            <Tabs.Screen
                name="add"
                options={{
                    title: "Add"
                }}
            />

            <Tabs.Screen
                name="categories"
                options={{
                    title: "Categories"
                }}
            />

            <Tabs.Screen
                name="user"
                options={{
                    title: "User"
                }}
            />
        </Tabs>
    )
}
