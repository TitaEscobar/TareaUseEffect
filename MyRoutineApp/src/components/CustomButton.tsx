import { Button, Text, TouchableOpacity, StyleSheet, Pressable } from "react-native";

type CustomButtonProps = {
  title: string;
  onPress: () => void;
  // tipo: union de literales
  variant?: "primary" | "secondary" | "tertiary"
  //tipo: literal
  //variant: "primary"
  disabled?: boolean | null | undefined
};

//definicion de componente personalizado utilizando componentes nativos
export default function CustomButton({ title, onPress, variant="primary", disabled=null }: CustomButtonProps) {
  const styles = getStyles(variant);

  return (
    <Pressable 
        style={styles.button} 
        onPress={onPress} 
        disabled={disabled}>
      <Text style={styles.buttonText}> {title} </Text>
    </Pressable>
  );
}

const getStyles = (variant: "primary" | "secondary" | "tertiary") => 
  StyleSheet.create({
    button:{
      backgroundColor:  variant === "primary" ? "#0B2545" :
                            variant === "secondary" ? "#C5D0DC" : "#EEF1F5",
        width: 150,
        paddingVertical: 14,
        paddingHorizontal: 18,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: variant === "tertiary" ? 1 : 0,
        borderColor: variant === "tertiary" ? "#8A96A8" : "transparent",
        shadowColor: "#0B2545",
        shadowOffset: { width: 0, height: variant === "primary" ? 3 : 1 },
        shadowOpacity: variant === "primary" ? 0.22 : 0.08,
        shadowRadius: variant === "primary" ? 6 : 3,
        elevation: variant === "primary" ? 4 : 1,
    },
    buttonText: {
        color: variant === "primary" ? "#F5F7FA" : "#1A2B3D",
        fontSize: 15,
        fontWeight: "600",
        letterSpacing: 0.4,
        textAlign: "center",
    }
})
