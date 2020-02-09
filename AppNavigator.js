import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Category from './screens/Category';
import Categories from './screens/Categories';

function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    );
}

const Stack = createStackNavigator();

function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{
                headerStyle: {
                  backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
              >
                <Stack.Screen
                    name="Categories"
                    options={{
                        title: 'Home',
                    }}
                    component={Categories} />
                <Stack.Screen
                    name="Category"
                    component={Category}
                    options={({ route }) => ({ title: route.params.categoryName })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;