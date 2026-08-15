import { View,Text } from "react-native";
import CustomButton from "../components/CustomButton";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/StackNavigator";

type HomeProps = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

export default function Home({route}: HomeProps){
    const {email} = route.params;

    return(
       <View>
        <Text>Hola {email}, Bienvenido a Home</Text>
        <CustomButton 
            title="Cerrar Sesion"
            onPress={()=>{}}
        />
       </View> 
    )
} 