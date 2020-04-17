import {StyleSheet, Dimensions} from 'react-native';

const screenHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  card: {
    height: screenHeight - 150,
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    elevation: 2,
  },
  backgroundView1: {
    height: screenHeight * 0.3,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    borderColor: '#b4b4b4',
    borderBottomWidth: 0.5,
  },
  imageContainer: {
    height: 200,
    width: 200,
    marginTop: screenHeight * 0.1,
  },
  image: {
    borderRadius: 150,
    height: 200,
    width: 200,
  },
  photoDescriptionContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    flexDirection: 'column',
    height: '100%',
    position: 'absolute',
    left: 10,
    bottom: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    fontFamily: 'Avenir',
    textShadowColor: 'black',
    textShadowRadius: 10,
  },
  buttonsContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: '10%',
  },
  infoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  subText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#b4b4b4',
    marginBottom: 10,
  },
  textStyle: {
    fontSize: 28,
    fontWeight: '700',
  },
  userInfoContainer: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
