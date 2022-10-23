import react from "react";
import Register from './Screens/Register';
import Login from "./Screens/Login";
import Home from "./Screens/Home"
import ListGen from "./Screens/ListGen"
import SearchList from "./Screens/SearchList"
import SaveList from "./Screens/SaveList";
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  const Stack = createStackNavigator();
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = 'login' component={Login}/>
        <Stack.Screen name = 'register' component={Register}/>
        <Stack.Screen name = 'home' component={Home}/>
        <Stack.Screen name = 'listGen' component={ListGen}/>
        <Stack.Screen name = 'SearchList' component={SearchList}/>
        <Stack.Screen name = 'SaveList' component={SaveList}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;