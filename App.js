import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { DefaultTheme, IconButton, Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './screens/HomeScreen';
import { BookScreen } from './screens/BookScreen';
import { NameScreen } from './screens/NameScreen';
import { TitleScreen } from './screens/TitleScreen';

const Stack = createNativeStackNavigator();
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  const homeOptions = {
    headerRight: () => (
      <IconButton icon="alert-outline" onPress={() => alert("The Team is Awesome!")}
        color={DefaultTheme.colors.notification} />
    )
  };

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={homeOptions} />
          <Stack.Screen name="Book" component={BookScreen} />
          <Stack.Screen name="Name" component={NameScreen} />
          <Stack.Screen name="Title" component={TitleScreen}
            options={({ route }) => ({ title: route.params.title })} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}