import React, {
  useState, 
  useCallback, 
  useEffect,
} from 'react';
import {View, Animated} from 'react-native';
import {
  FlatList,
  FlingGestureHandler,
  Directions,
  State,
} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Coffe from '../../components/Coffe';
import CoffeName from '../../components/CoffeName';
import CoffePrice from '../../components/CoffePrice';
import data from '../../data';

const HomeScreen = ({navigation}) => {
  const [selectedIndex, setSelectedIndex] = useState(data.length - 1);
  const activeIndex = React.useRef(new Animated.Value(data.length - 1)).current;
  const animatedIndex = React.useRef(
    new Animated.Value(data.length - 1),
  ).current;

  useEffect(() => {
    Animated.timing(animatedIndex, {
      toValue: activeIndex,
      duration: 300,
      useNativeDriver: true,
    }).start();
  });

  const navigate = item => {
    const {navigate} = navigation;
    navigate('Details', {
      item,
    });
  };

  const setActiveIndex = useCallback(newIndex => {
    setSelectedIndex(newIndex);
    activeIndex.setValue(newIndex);
  }, []);

  return (
    <LinearGradient colors={['#725424', '#e9d4b7', '#fff']} style={{flex: 1}}>
      <View
        style={{height: 200, justifyContent: 'center', alignItems: 'center'}}>
        {data.map((item, index) => (
          <CoffeName
            key={index}
            index={index}
            item={item}
            animatedIndex={animatedIndex}
          />
        ))}
        {data.map((item, index) => (
          <CoffePrice
            key={index}
            index={index}
            item={item}
            animatedIndex={animatedIndex}
          />
        ))}
      </View>
      <FlingGestureHandler
        key="DOWN"
        direction={Directions.DOWN}
        onHandlerStateChange={({nativeEvent}) => {
          if (nativeEvent.state === State.END) {
            if (selectedIndex === data.length - 1) {
              return;
            }
            setActiveIndex(selectedIndex + 1);
          }
        }}>
        <FlingGestureHandler
          key="UP"
          direction={Directions.UP}
          onHandlerStateChange={({nativeEvent}) => {
            if (nativeEvent.state === State.END) {
              if (selectedIndex === 0) {
                return;
              }
              setActiveIndex(selectedIndex - 1);
            }
          }}>
          <FlatList
            data={data}
            keyExtractor={item => String(item.id)}
            contentContainerStyle={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
            removeClippedSubviews={false}
            CellRendererComponent={({
              item,
              index,
              children,
              style,
              ...props
            }) => {
              const newStyle = [
                style,
                {
                  zIndex: data.length - index,
                  left: '-25%',
                  top: '-25%',
                },
              ];
              return (
                <View style={newStyle} index={index} {...props}>
                  {children}
                </View>
              );
            }}
            renderItem={({item, index}) => (
              <Coffe
                item={item}
                index={index}
                animatedIndex={animatedIndex}
                navigate={navigate}
              />
            )}
          />
        </FlingGestureHandler>
      </FlingGestureHandler>
    </LinearGradient>
  );
};

export default HomeScreen;
