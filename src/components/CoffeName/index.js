import React from 'react';
import {
  Text, 
  Dimensions, 
  StyleSheet,
  Animated,
} from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';

const { width } = Dimensions.get('window');

const CoffeName = ({ item, index, animatedIndex }) => {

  const inputRange = [index - 1, index, index + 1];

  const translateX = animatedIndex.interpolate({
    inputRange,
    outputRange: [width, 0, -width],
  });

  return (
    <Animated.View 
        style={[ StyleSheet.absoluteFillObject, {transform: [{translateX}]}]}
        key={index}
      >
      <SharedElement id={`item.${item.id}.name`} style={styles.containerName}>
        <Text
          adjustsFontSizeToFit 
          numberOfLines={2} 
          style={[styles.name, {top: item.name.length > 16 ? 30 : 50}]}
        >
          {item.name}
        </Text>
      </SharedElement>
    </Animated.View>
  )
}

export default CoffeName;

const styles = StyleSheet.create({
  containerName: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    width: 250,
    color: '#fff',
    position: 'absolute',
  },
});
