import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#FF9001",
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopColor: "#161622",
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            headerShown: false,
            title: "Kalkulačka",
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="calculator" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="charts"
          options={{
            headerShown: false,
            title: "Vývojový graf",
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="bar-chart-o" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="informations"
          options={{
            headerShown: false,
            title: "Informácie",
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="info" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="result"
          options={{
            headerShown: false,
            href: null,
          }}
        />
      </Tabs>
    </>
  );
}
