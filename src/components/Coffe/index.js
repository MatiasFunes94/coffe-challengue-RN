import React from 'react';
import {
  StyleSheet,
  Image,
  Animated,
} from 'react-native';
import { TouchableOpacity} from 'react-native-gesture-handler';
import { SharedElement } from 'react-navigation-shared-element';

const renderStyle = (size) => {
  if (size === 'small') {
    return styles.imageSmall
  }
  if (size === 'medium') {
    return styles.imageMedium
  }
  if (size === 'large') {
    return styles.imageLarge
  }
  if (size === 'other') {
    return styles.other
  }
  if (size === 'other 2') {
    return styles.other2
  }
  if (size === 'other 3') {
    return styles.other3
  }
}

const Coffe = ({ item, index, animatedIndex, navigate }) => {  
  const inputRange = [index - 1, index, index + 1];
  const translateY = animatedIndex.interpolate({
    inputRange,
    outputRange: [-130, 20, 130],
  });
  const scale = animatedIndex.interpolate({
    inputRange,
    outputRange: [0.7, 1, 1.5],
  });
  const opacity = animatedIndex.interpolate({
    inputRange,
    outputRange: [0.6, 1, 0],
  });

  return (
    <Animated.View
      key={index}
      style={{
        opacity,
        transform: [{translateY}, {scale}],
        position: 'absolute',
        left: -60,
      }}>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.buttonImage}
        onPress={() => navigate(item)}>
          <SharedElement id={`item.${item.id}.photo`}>
          <Image
            source={item.image}
            style={[renderStyle(item.type), item.position]}
            resizeMode='cover'
          />
        </SharedElement>
      </TouchableOpacity>
    </Animated.View>
  );
}

export default Coffe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttonImage: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 80,
    paddingHorizontal: 20,
  },
  imageSmall: {
    height: 280,
    width: 310,
  },
  imageMedium: {
    height: 390,
    width: 270,
  },
  imageLarge: {
    height: 380,
    width: 220,
  },
  other: {
    height: 300,
    width: 350,
  },
  other2: {
    height: 350,
    width: 280,
  },
  other3: {
    height: 380,
    width: 310,
  },
});

