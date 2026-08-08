import { KeyboardTypeOptions, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { useState } from "react";

type Props = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  type? : "default" | "password" | "number" | "email"
};

export default function CustomInput({
  placeholder,
  value,
  onChangeText,
  type="default"

}: Props) {
  //tema: manejo de estado LOCAL {en el componente}

  //hook: useState para definir variable en el estado 
  const [isSecureText, setIsSecureText] = useState();
  //Primera accion: inicializar la variable
  //Segunda accion: utilizar la variable; ej: en propiedad secureTextEntry de TextInput
  //Tercera accion: actualizar su valor; setIsSecureText(true) 

  const icon : typeof MaterialIcons["name"] | undefined = 
      type === "password" ? "lock" : 
        type === "email" ? "alternate-email" : undefined;

  const keyboardType : KeyboardTypeOptions = 
   type === "email" ? "email-address" : 
    type === "number" ? "number-pad" : 
      "default"


  return (
    <View style={styles.inputContainer}>
        <MaterialIcons name={icon as any} size={22} />
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            keyboardType={keyboardType}
            secureTextEntry={isSecureText}
            
        />
        <TouchableOpacity>
            <Ionicons name="eye" size={22} />
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    inputContainer: {
        //distribucion de componentes con flexbox
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'lightgray',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 9,
        paddingLeft: 20,
        paddingRight: 20,
    },
    input: {
        width: '50%',
    }
})