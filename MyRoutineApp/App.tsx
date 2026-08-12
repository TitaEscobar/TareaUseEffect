import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "./src/components/CustomButton";
import CustomInput from "./src/components/CustomInput";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  //tipo string
  const [password, setPassword] = useState("");
  //tipo number
  const [attempts, setAttempts] = useState(0);
  //tipo boolean
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleRegister = () => {
   // incrementar contador
    setAttempts(attempts + 1); 
    if(attempts  === 3){
      setIsDisabled(true);
    }
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      {/* implementacion de componente personalizado */}
     <CustomInput 
        placeholder={"Nombre"} 
        value={name} 
        onChangeText={setName}
        type="default" />
      <CustomInput 
        placeholder={"Correo"} 
        value={email} 
        onChangeText={setEmail}
        type="email" />
      <CustomInput 
        placeholder={"Contraseña"} 
        value={password} 
        onChangeText={setPassword}
        type="password" />

      <CustomButton 
          title={"Registrarme"} 
          onPress={handleRegister}
          disabled={isDisabled} /> 
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
