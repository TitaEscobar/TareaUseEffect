import { View,Text } from "react-native";
import CustomButton from "../../../components/CustomButton";
import { i18n, useLanguage } from "../../../contexts/LanguageContext";


export default function Settings(){
    const {language, clearLanguage, changeLanguage} = useLanguage();
    return(
        <View>
            <CustomButton title={i18n.t('clearLanguage')} 
            onPress={clearLanguage} />
            <Text>Current language: {language}</Text>
            <CustomButton title={"EN"} onPress={() => changeLanguage("en")} variant="secondary"/>
            <CustomButton title={"ES"} onPress={() => changeLanguage("es")} variant="secondary"/>
            <CustomButton title={"FR"} onPress={() => changeLanguage("fr")} variant="secondary"/>
        </View>
    )
;}