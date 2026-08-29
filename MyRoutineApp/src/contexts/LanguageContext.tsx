import { I18n } from "i18n-js";
import { createContext, useContext, useEffect, useState } from "react";
import { translations } from "../utils/translations";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getLocales } from "expo-localization";

type Language = "es" | "en" | "fr" | "";

type LanguageContextType = {
  language: Language;
  changeLanguage: (lng: Language) => void;
  clearLanguage: () => void;
};

//1. definicion del diccionario de traducciones en /utils
//2. crear instancia de i18n con el diccionario cargado
const i18n = new I18n(translations);

//3. definir propiedades: idioma por defecto, habilitar fallback
i18n.defaultLocale = "fr"
i18n.enableFallback = true; 


const LanguageContext = createContext<LanguageContextType | null>(null);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage debe usarse dentro de LanguageProvider");
  return context;
};

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguage] = useState<Language>("");

    useEffect(()=>{
        const loadLanguage = async () => {
            const storedLanguage = await AsyncStorage.getItem("language");
            //uso de npx expo install expo-localization para obtener idioma del dispositivo
            const deviceLanguage = getLocales()?.[0]?.languageCode;
            if(storedLanguage){
                //actualizacion de propiedad de contexto "Language" con conversion de tipos para storedLanguage
                setLanguage(storedLanguage as Language)
                //actualizacion de idioma activo "locale" al idioma almacenado en el dispositivo
                i18n.locale = storedLanguage;
            }else{
                //actualizacion de idioma activo "locale" al idioma por defecto de la aplicacion
                // i18n.locale = i18n.defaultLocale;

                //actualizacion de idioma activo "locale" al idioma del dispositivo (definido en settings)
                i18n.locale = deviceLanguage as string;
            }
        };
        loadLanguage();
    },[])

  const changeLanguage = async (lng: Language) => {
    setLanguage(lng);
    //asignacion de idioma activo
    i18n.locale = lng;
    await AsyncStorage.setItem("language", lng);
    //language: en
  };
  const clearLanguage = async () => {
    await AsyncStorage.removeItem("language");
  };
  return (
    <LanguageContext.Provider
      value={{ language, changeLanguage, clearLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export {i18n};