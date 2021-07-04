import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../Screens/Home';
import DetailScreen from '../Screens/Details';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { Easing } from 'react-native-reanimated';
import { enableScreens } from 'react-native-screens';
enableScreens();

const Stack = createSharedElementStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen 
          name="Details" 
          component={DetailScreen}
          sharedElements={(route, otherRoute, showing) => {
            const { item } = route.params;
            return [
              {
                id: `item.${item.id}.photo`,
              },
              {
                id: `item.${item.id}.name`,
              },
            ];
          }}
          options={() => ({
            gestureEnabled: false,
            transitionSpec: {
              open: {
                animation: 'timing',
                config: {duration: 300, easing: Easing.inOut(Easing.ease)},
              },
              close: {
                animation: 'timing',
                config: {duration: 300, easing: Easing.inOut(Easing.ease)},
              },
            },
            cardStyleInterpolator: ({current: {progress}}) => {
              return {
                cardStyle: {
                  opacity: progress,
                },
              };
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;