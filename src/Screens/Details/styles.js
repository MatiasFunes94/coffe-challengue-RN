import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  containerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingHorizontal: 30,
  }, 
  containerName: {
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
  },
  coffeName: {
    fontSize: 30,
    fontWeight: 'bold',
    width: 250,
    color: '#fff',
    textAlign: 'center',
  },
  containerImage: {
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 180,
  },
  buttonPlus: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    right: 40,
    bottom: 5,
  },
  plus: {
    fontSize: 50,
    textAlign: 'center',
  },
  containerPrice: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 15,
    backgroundColor: 'red',
    width: 210,
  },
  price: {
    fontSize: 60,
    fontWeight: 'bold',
    textAlign: 'center',
    width: 210,
    color: '#725424',
    alignSelf: 'flex-start',
    left: 30,
  },
  containerCups: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cupSmall: {
    height: 35,
    width: 70,
    margin: 10,
  },
  cupMedium: {
    height: 50,
    width: 80,
    margin: 10,
  },
  cupLarge: {
    height: 65,
    width: 65,
    margin: 10,
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

export default styles;