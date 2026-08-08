import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "./src/components/CustomButton";
import CustomInput from "./src/components/CustomInput";
import { useState } from "react";

export default function App() {
  const [favoriteApp, setFavoriteApp] = useState("");

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      {/* implementacion de componente personalizado */}
     <CustomInput 
        placeholder={"Input"} 
        value={favoriteApp} 
        onChangeText={setFavoriteApp} />
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
