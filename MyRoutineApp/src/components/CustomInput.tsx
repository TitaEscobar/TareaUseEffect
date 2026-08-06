import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

type Props = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
};

export default function CustomInput({
  placeholder,
  value,
  onChangeText,
}: Props) {
  return (
    <View style={styles.inputContainer}>
        <MaterialIcons name={"lock"} size={22} />
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
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