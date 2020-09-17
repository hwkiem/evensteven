import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import TabOneScreen from "../screens/Group/SharedListScreen";
import TabTwoScreen from "../screens/Group/PersonalListScreen";
import {
  SharedTabParamList,
  PersonalTabParamList,
  PantryTabParamList,
  MaterialTopTabParamList,
} from "../types";

const tabs = createMaterialTopTabNavigator<MaterialTopTabParamList>();

export default function TopTabNavigator() {
  return (
    <tabs.Navigator
      initialRouteName="Shared"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          console.log(color);
          let iconName: string;
          if (route.name === "Shared") {
            iconName = focused ? "account-group" : "account-group-outline";
          } else if (route.name === "Personal") {
            iconName = focused ? "fingerprint" : "fingerprint";
          } else {
            iconName = focused ? "fridge" : "fridge-outline";
          }
          // You can return any component that you like here!
          return <TabBarIcon name={iconName} color={color} />;
        },
      })}
      tabBarOptions={{
        // activeTintColor: "tomato",
        // inactiveTintColor: "gray",
        showIcon: true,
      }}
    >
      <tabs.Screen name="Shared" component={SharedTabNavigator} />
      <tabs.Screen name="Personal" component={PersonalTabNavigator} />
      <tabs.Screen name="Pantry" component={PantryTabNavigator} />
    </tabs.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return (
    <MaterialCommunityIcons size={24} style={{ margin: "auto" }} {...props} />
  );
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const SharedStack = createStackNavigator<SharedTabParamList>();

function SharedTabNavigator() {
  return (
    <SharedStack.Navigator>
      <SharedStack.Screen
        name="SharedTabScreen"
        component={TabOneScreen}
        options={{ headerTitle: "The Shared List" }}
      />
    </SharedStack.Navigator>
  );
}

const PersonalStack = createStackNavigator<PersonalTabParamList>();

function PersonalTabNavigator() {
  return (
    <PersonalStack.Navigator>
      <PersonalStack.Screen
        name="PersonalTabScreen"
        component={TabTwoScreen}
        options={{ headerTitle: "Your Personal List" }}
      />
    </PersonalStack.Navigator>
  );
}

const PantryStack = createStackNavigator<PantryTabParamList>();

function PantryTabNavigator() {
  return (
    <PantryStack.Navigator>
      <PantryStack.Screen
        name="PantryTabScreen"
        component={TabTwoScreen}
        options={{ headerTitle: "The Pantry" }}
      />
    </PantryStack.Navigator>
  );
}
