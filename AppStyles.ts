import {StyleSheet, Dimensions} from 'react-native';

const screenHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    height: screenHeight * 0.25,
    backgroundColor: 'black',
    // borderRadius: 5,
  },
  swiperContainer: {
    height: screenHeight - 250,
  },
  swipeTextContainer: {},
  buttonsContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: '15%',
  },
  copyright: {
    textAlign: 'center',
    fontSize: 10,
    color: 'black',
    paddingBottom: 20,
    fontFamily: 'Avenir',
  },
  overlayWrapper: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    marginTop: 30,
    marginLeft: -30,
  },
});
