import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import CustomButton from "../components/CustomButton";

export default function UseEffectScreen() {
    const [contador, setContador] = useState(0);

    /*
        useEffect sin arreglo de dependencias:
        Este useEffect se ejecuta después de cada renderizado del componente.
        Se recomienda utilizar cuando necesitamos ejecutar una acción
        cada vez que el componente se actualiza.
    */
    useEffect(() => {
        console.log("El componente se ha renderizado");
    });

    /*
        useEffect con arreglo de dependencias:
        Este useEffect se ejecuta al cargar el componente y cada vez
        que cambia el valor de contador.
        Se recomienda utilizar cuando necesitamos reaccionar a cambios
        de una variable específica del componente.
    */
    useEffect(() => {
        console.log("El contador cambió a:", contador);
    }, [contador]);

    return (
        <View>
            <Text>Ejemplo de useEffect</Text>
            <Text>Contador: {contador}</Text>

            <CustomButton
                title="Aumentar contador"
                onPress={() => setContador(contador + 1)}
            />
        </View>
    );
}