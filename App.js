import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './screens/Home';
import Details from './screens/Details';

const Stack = createNativeStackNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: '#2C6BED' },
  headerTitleStyle: { color: 'white' },
  headerTintColor: 'white'
}

const App = () => (

  <NavigationContainer>
    <Stack.Navigator screenOptions={globalScreenOptions} initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  </NavigationContainer>

)

export default App;