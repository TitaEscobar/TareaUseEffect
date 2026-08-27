import { createContext, useContext, useState } from "react";

//1. Tipado del objeto principal del contexto
type Language = "es" | "en" | "";

type LanguageContextType = {
  language: Language;
  changeLanguage: () => void;
  clearLanguage: () => void;
};

//2. Creacion del contexto
const LanguageContext = createContext<LanguageContextType | null>(null);

// 4. hook personalizado: la exposicion de contexto a componentes de la aplicacion
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage debe usarse dentro de LanguageProvider");
  return context;
};

//3. Crear el provider: medio por el cual manejamos el estado global
export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguage] = useState<Language>("");
  const changeLanguage = () => {};
  const clearLanguage = () => {};
  return (
    <LanguageContext.Provider
      value={{ language, changeLanguage, clearLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
