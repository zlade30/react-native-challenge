import './global.css';
import 'react-native-gesture-handler';

import React from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {AddBook, Main} from './src/screens';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from 'react-query';

const Stack = createStackNavigator();
const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Main"
                        component={Main}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen name="AddBook" component={AddBook} />
                </Stack.Navigator>
            </NavigationContainer>
        </QueryClientProvider>
    );
};

export default App;
