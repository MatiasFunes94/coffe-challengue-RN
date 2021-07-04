import React from 'react';
import {
  StyleSheet,
  Animated,
} from 'react-native';

const CoffePrice = ({ item, index, animatedIndex }) => {

  const inputRange = [index - 1, index, index + 1];

  const opacity = animatedIndex.interpolate({
    inputRange,
    outputRange: [0, 1, 0],
  });

  return (
    <Animated.Text
      key={index}
      style={[styles.price, {opacity}]}
    >
      {`$ ${item.price}`}
    </Animated.Text>
  )
}

export default CoffePrice;

const styles = StyleSheet.create({
  price: {
    width: 100,
    textAlign: 'center',
    fontSize: 30,
    color: '#fff',
    marginTop: 20,
    position: 'absolute',
    top: 100,
  }
});