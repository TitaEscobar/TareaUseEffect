import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Register from "../screens/Register";
import TabNavigator from "./TabsNavigator";
import UseEffectScreen from "../screens/UseEffectScreen";

// 1. declarar tipado para las pantallas junto con sus parametros
export type RootStackParamList = {
    LoginScreen: undefined, 
    // HomeScreen: {email: string}, 
    RegisterScreen: undefined,
    UserTabs: undefined,
    UseEffectScreen: undefined,
}

// 2. crear el stack navigator encargado de manejar la navegacion
const Stack = createNativeStackNavigator<RootStackParamList>();

// 3. utilizamos el stack de navegacion  
export default function StackNavigator(){
    return(
        <Stack.Navigator initialRouteName="LoginScreen" >
            {/* <Stack.Screen name='HomeScreen' component={Home}/> */}
            <Stack.Screen name="LoginScreen" component={Login}/>
            <Stack.Screen name="RegisterScreen" component={Register}/>
            <Stack.Screen name="UserTabs" component={TabNavigator}  />
            <Stack.Screen name="UseEffectScreen" component={UseEffectScreen} />
        </Stack.Navigator>
    );
}