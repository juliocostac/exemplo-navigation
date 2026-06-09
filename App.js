import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './telas/Home';
import Detalhes from './telas/Detalhes';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
        />

        <Stack.Screen
          name="Detalhes"
          component={Detalhes}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}