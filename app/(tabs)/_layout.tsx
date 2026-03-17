import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "red",
                tabBarInactiveTintColor: "green",
                tabBarStyle: {
                    backgroundColor: "#1e293b",
                    borderTopWidth: 1,
                    borderTopColor: "gray",
                    height: 100,
                    paddingTop: 15,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: "600"
                },
                headerShown: false
            }}
        >
            <Tabs.Screen name="index" options={{
                title: "Todos", tabBarIcon: ({ color, size }) => (
                    <Ionicons name="flash-outline" size={size} color={color} />
                )
            }} />
            <Tabs.Screen name="settings" options={{
                title: "Settings", tabBarIcon: ({ color, size }) => (
                    <Ionicons name="settings" size={size} color={color} />
                )
            }} />

        </Tabs>
    )
}