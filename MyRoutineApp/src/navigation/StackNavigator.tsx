import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Register from "../screens/Register";

// 1. declarar tipado para las pantallas junto con sus parametros
type RootStackParamList = {
    Login: undefined, 
    Home: undefined, 
    Register: undefined
}

// 2. crear el stack navigator encargado de manejar la navegacion
const Stack = createNativeStackNavigator<RootStackParamList>();

// 3. utilizamos el stack de navegacion  
export default function StackNavigator(){
    return(
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Register" component={Register}/>
        </Stack.Navigator>
    );
}