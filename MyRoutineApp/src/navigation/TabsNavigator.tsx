import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../screens/features/user-settings/Profile";
import Settings from "../screens/features/user-settings/Settings";
import Home from "../screens/Home";

// 1. declarar tipado para las pantallas junto con sus parametros
export type TabsParamList = {
    Profile: undefined,
    Settings: undefined,
    HomeTab: {email: string},
};

// 2. crear el tab navigator encargado de manejar la navegacion en pestañas
const Tab = createBottomTabNavigator<TabsParamList>();

// 3. utilizamos el componente de navegacion en tabs
export default function TabNavigator(){
    return(
        <Tab.Navigator >
            <Tab.Screen name="Profile" component={Profile}/>
            <Tab.Screen name="Settings" component={Settings}/>
            <Tab.Screen name="HomeTab" component={Home} initialParams={{email:'usuario'}}/>
        </Tab.Navigator>
    )
}