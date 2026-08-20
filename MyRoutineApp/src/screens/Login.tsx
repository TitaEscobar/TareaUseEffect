import { View,Text, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import { useState } from "react";

export default function Login({navigation} :any){
    const [email, setEmail] = useState("");

    const handleLogin = () => {
        navigation.navigate('UserTabs', {screen:'HomeTab', params:{email}})
    }
    return(
       <View style={styles.container}>
        <Text style={styles.title}>Bienvenido a Login</Text>
        <Text style={styles.subtitle}>Inicia sesión para continuar</Text>
        <View style={styles.form}>
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
       </View> 
    )
} 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F4F6F8",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 24,
    },
    title: {
        fontSize: 28,
        fontWeight: "700",
        color: "#0B2545",
        marginBottom: 8,
        textAlign: "center",
    },
    subtitle: {
        fontSize: 14,
        color: "#6B7A8C",
        marginBottom: 28,
        textAlign: "center",
    },
    form: {
        width: "100%",
        alignItems: "center",
        gap: 8,
    },
})