import React, {Component} from 'react';
import {View, Alert} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import {Card, OverlayLabel} from './src/components';
import styles from './AppStyles';
import axios from 'axios';

interface IProps {
  props: any;
  navigation?: any;
}
interface IState {
  userInfo: any;
  myFavourite: [];
}

export default class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      userInfo: {},
      myFavourite: [],
    };
    this.handelOnSwipe();
  }

  getNextUser = async () => {
    try {
      return await (await axios.get('https://randomuser.me/api/0.4/?randomapi'))
        .data;
    } catch (error) {
      console.log('ERROR! API call failed: ', error);
    }
  };

  getUserInfo = async () => {
    let userData = {};
    const apiResponse = await this.getNextUser();
    apiResponse['results'].forEach((element) => {
      userData = element.user;
    });
    return userData;
  };

  handelOnSwipe = async () => {
    let _userInfo = await this.getUserInfo();
    this.setState({userInfo: _userInfo});
  };

  addToFavourites = (userInfo) => {
    let myList: [] = this.state.myFavourite;
    myList.push(userInfo);
    this.setState({myFavourite: myList});
    console.log('My Favourites: ', this.state.myFavourite);
    Alert.alert('Added to Favourites!');
  };

  render() {
    const {userInfo} = this.state;
    return (
      <React.Fragment>
        <View style={styles.container}>
          <View style={styles.swiperContainer}>
            {userInfo.picture && (
              <Swiper
                onSwiped={async () => await this.handelOnSwipe()}
                onSwipedRight={() => {
                  this.addToFavourites(userInfo);
                }}
                animateCardOpacity
                containerStyle={styles.container}
                cards={[userInfo]}
                renderCard={(card) => <Card card={card} />}
                cardIndex={0}
                backgroundColor="white"
                stackSize={2}
                infinite
                showSecondCard
                disableTopSwipe
                disableBottomSwipe
                animateOverlayLabelsOpacity
                overlayLabels={{
                  left: {
                    title: 'NOPE',
                    element: <OverlayLabel label="NOPE" color="#E5566D" />,
                    style: {
                      wrapper: styles.overlayWrapper,
                    },
                  },
                  right: {
                    title: 'YES',
                    element: <OverlayLabel label="YES" color="#4CCC93" />,
                    style: {
                      wrapper: {
                        ...styles.overlayWrapper,
                        alignItems: 'flex-start',
                        marginLeft: 30,
                      },
                    },
                  },
                }}
              />
            )}
          </View>
        </View>
      </React.Fragment>
    );
  }
}
