import { View,Text, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { i18n } from "../contexts/LanguageContext";

export default function Login({navigation} :any){
    //recepcion de email por medio de parametro de ruta
    const [correo, setCorreo] = useState("");
    // extraccion de usuario para uso de email desde el contexto
    const {login} = useAuth();

    const handleLogin = () => {
        const allowed = login(correo);
        if(allowed){
            navigation.navigate('UserTabs', {screen:'HomeTab', params:{email: correo}})
        }else{
            console.log('usuario no tiene acceso');
        }
    }
    return(
       <View style={styles.container}>
        <Text style={styles.title}> 
            {i18n.t('welcomeLogin')}
        </Text>
        <Text style={styles.subtitle}>Inicia sesión para continuar</Text>
        <View style={styles.form}>
            <CustomInput 
                type = "email"
                placeholder={i18n.t('typeEmail')} 
                value={correo} 
                onChangeText={setCorreo} />
            <CustomButton 
                title={i18n.t('signIn')}
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