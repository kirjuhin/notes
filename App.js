import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import IndexScreen from './src/screens/IndexScreen'
import EditScreen from './src/screens/EditScreen'
import { NoteProvider } from './src/contexts/NoteContext'

const Stack = createStackNavigator()

const App = () => {
    return (
      <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Index'
        screenOptions={{ 
          headerStyle: {
            backgroundColor: 'purple'
          },
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerTintColor: 'white',
          headerTitleAlign: 'left'
        }}        
      >
        <Stack.Screen 
          name="Index" 
          component={IndexScreen}
          options={{ 
            title: 'Notes'
          }}
          />
        <Stack.Screen 
          name="Edit" 
          component={EditScreen}
          options={{ title: 'Edit Note' }}
          />        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return(
    <NoteProvider>
      <App />
    </NoteProvider>
  )
}