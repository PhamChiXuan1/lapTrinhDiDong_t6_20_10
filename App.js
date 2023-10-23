import manHinh1 from "./View/manHinh1";
import manHinh2 from "./View/manHinh2";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="manHinh1" component={manHinh1}/>
      {/* <Stack.Screen name="manHinh2" component={manHinh2}/> */}
    </Stack.Navigator>
   </NavigationContainer>
  );
  // return <manHinh1></manHinh1>;
}