import { AuthProvider } from "./src/contexts/AuthContext";
import { navigationRef } from "./src/navigation/NavigationService";
import StackNavigator from "./src/navigation/StackNavigator";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer ref={navigationRef}>
        <StackNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}
