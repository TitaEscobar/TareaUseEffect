import { navigationRef } from "./src/navigation/NavigationService";
import StackNavigator from "./src/navigation/StackNavigator";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  
  return (
    <NavigationContainer ref={navigationRef}>
        <StackNavigator />
    </NavigationContainer>
  );
}

