import { View,Text, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import { useState } from "react";

export default function Login({navigation} :any){
    const [email, setEmail] = useState("");

    const handleLogin = () => {
        navigation.navigate("HomeScreen", {email})
    }
    return(
       <View style={styles.container}>
        <Text>Bienvenido a Login</Text>
        <CustomInput 
            type = "email"
            placeholder={"Ingresa tu email"} 
            value={email} 
            onChangeText={setEmail} />
        <CustomButton 
            title="Ir a Home"
            onPress={handleLogin}
        />
       </View> 
    )
} 
const styles = StyleSheet.create({
    container: {
        marginTop: 30,
    }
})