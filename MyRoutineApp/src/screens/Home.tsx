import { View,Text } from "react-native";
import CustomButton from "../components/CustomButton";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/StackNavigator";
import { NativeBottomTabBarProps } from "@react-navigation/bottom-tabs/unstable";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { TabsParamList } from "../navigation/TabsNavigator";

// type HomeProps = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;
type HomeProps = BottomTabScreenProps<TabsParamList, 'HomeTab'>;

export default function Home({route, navigation}: HomeProps){
    //destructuring 
    const {email} = route.params;

    const handleUserSettings = () =>{
        navigation.navigate('Profile');
        // navigation.navigate('HomeTab', {email:'test'})
    };

    return(
       <View>
        <Text>Hola {email}, Bienvenido a Home</Text>
        <CustomButton 
            title="Ir a Preferencias de Usuario"
            onPress={handleUserSettings}
        />
        <CustomButton 
            title="Cerrar Sesion"
            variant="secondary"
            onPress={()=>{}}
        />
       </View> 
    )
} 