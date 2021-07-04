import React, { useRef } from 'react';
import { 
  View, 
  Text,
  Image,
  Animated,
} from 'react-native';
import { TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import { SharedElement } from 'react-navigation-shared-element';
import LinearGradient from 'react-native-linear-gradient';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import images from '../../images';
import styles from './styles';

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

const adjustCupStyle = (item) => {
  if (item.type === 'small') {
    return {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 30,
    }
  }
}

const plusAnimationIn = {
  0: {
    translateX: 100,
    transform: [{rotate: '90deg'}]
  },
  1: {
    translateX: 0,
    transform: [{rotate: '0deg'}]
  }
}

const plusAnimationOut = {
  0: {
    translateX: 0,
    transform: [{rotate: '0deg'}]
  },
  1: {
    translateX: 100,
    transform: [{rotate: '90deg'}]
  }
}

const priceAnimationIn = {
  0: {
    translateX: -250,
    translateY: 150,
  },
  1: {
    translateX: 0,
    translateY: 0,
  }
}

const priceAnimationOut = {
  0: {
    translateX: 0,
    translateY: 0,
  },
  1: {
    translateX: -250,
    translateY: 150,
  }
}

const DetailScreen = ({route}) => {
  const { item } = route.params;
  const { goBack } = useNavigation();
  
  const plusRef = useRef();
  const priceRef = useRef();

  return (
    <LinearGradient
      colors={['#725424', '#e9d4b7', '#fff']}
      style={styles.container}>
      <View style={styles.containerHeader}>
        <IconIonicons
          name="chevron-back"
          size={30}
          color={'#fff'}
          onPress={() => {
            plusRef.current.animate(plusAnimationOut)
            priceRef.current.animate(priceAnimationOut)
            goBack();
          }}
        />
        <IconMaterial name="shopping-outline" size={30} color={'#fff'} />
      </View>
      <View style={styles.containerName}>
        <SharedElement id={`item.${item.id}.name`} style={styles.coffeName}>
          <Text adjustsFontSizeToFit numberOfLines={2} style={styles.coffeName}>
            {item.name}
          </Text>
        </SharedElement>
      </View>
      <View style={styles.containerImage}>
        <Animatable.View
          ref={plusRef}
          animation={plusAnimationIn}
          duration={500}
          delay={200}
          useNativeDriver
          style={styles.buttonPlus}

        >
          <TouchableOpacity>
            <Icon name="plus" size={35} />
          </TouchableOpacity>
        </Animatable.View>
        <SharedElement id={`item.${item.id}.photo`} style={{paddingTop: 20}}>
          <Image source={item.image} style={[renderStyle(item.type)]} resizeMode='contain' />
        </SharedElement>
        <Animatable.Text 
          style={styles.price}
          ref={priceRef}
          animation={priceAnimationIn}
          duration={500}
          delay={200}
          useNativeDriver
        >
          {`${item.price} €`}
        </Animatable.Text>
      </View>
      <Animated.View style={[styles.containerCups, adjustCupStyle(item)]}>
        <Image
          style={{...styles.cupSmall, tintColor: 'lightgray'}}
          source={images.cup1}
        />
        <Image
          style={{...styles.cupMedium, tintColor: '#91672c'}}
          source={images.cup2}
        />
        <Image
          style={{...styles.cupLarge, tintColor: 'gray'}}
          source={images.cup3}
        />
      </Animated.View>
    </LinearGradient>
  );
}

DetailScreen.sharedElements = (navigation, otherNavigation, showing) => {
  const item = navigation.getParam('item');
  return [
    {
      id: `item.${item.id}.photo`,
    },
    {
      id: `item.${item.id}.name`,
    }
  ];
};

export default DetailScreen;