import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createContext, useContext } from 'react';
import { MiscContextProvider } from './context/miscContex'

import Home from './screens/Home';
import Details from './screens/Details';
import Favorites from './screens/Favorites';

const Stack = createNativeStackNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: '#2C6BED' },
  headerTitleStyle: { color: 'white' },
  headerTintColor: 'white'
}

const App = () => {
  return (
    <MiscContextProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={globalScreenOptions} initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Favorites" component={Favorites} />
        </Stack.Navigator>
      </NavigationContainer>
    </MiscContextProvider>
  )

}





export default App;