import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "./src/components/CustomButton";
import CustomInput from "./src/components/CustomInput";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          title={"Boton Primario"} 
          onPress={() => {}} />
      <CustomButton
        title={"Boton Secundario"}
        onPress={() => {}}
        variant="secondary"
      />
      <CustomButton
        title={"Boton Tercero"}
        onPress={() => {}}
        variant="tertiary"
      />
      

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
