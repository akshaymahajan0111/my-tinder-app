import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Card.styles';
import IconButton from '../IconButton/IconButton';
import {colors} from '../../constants';

interface IProps {
  card: any;
  navigation?: any;
}
interface IState {
  nameSelected: boolean;
  bornSelected: boolean;
  addressSelected: boolean;
  contactSelected: boolean;
  lockSelected: boolean;
  favouriteSeleted: boolean;
}

export default class Card extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      nameSelected: true,
      bornSelected: false,
      addressSelected: false,
      contactSelected: false,
      lockSelected: false,
      favouriteSeleted: false,
    };

    this.baseState = this.state;
  }

  resetState = () => {
    this.setState(this.baseState);
    this.setState({nameSelected: false});
  };

  renderNameInfo = () => {
    const {card} = this.props;
    return (
      <View style={styles.infoContainer}>
        <Text style={styles.subText}>My name is</Text>
        <Text style={styles.textStyle}>
          {card.name.first} {card.name.last}
        </Text>
      </View>
    );
  };

  renderBornInfo = () => {
    const {card} = this.props;
    return (
      <View style={styles.infoContainer}>
        <Text style={styles.subText}>I was born on</Text>
        <Text style={styles.textStyle}>{card.dob}</Text>
      </View>
    );
  };

  renderAddressInfo = () => {
    const {card} = this.props;
    return (
      <View style={styles.infoContainer}>
        <Text style={styles.subText}>My address is</Text>
        <Text style={styles.textStyle}>{card.location.street}</Text>
      </View>
    );
  };

  renderContactInfo = () => {
    const {card} = this.props;
    return (
      <View style={styles.infoContainer}>
        <Text style={styles.subText}>My contact detail is</Text>
        <Text style={styles.textStyle}>{card.cell}</Text>
        <Text style={styles.textStyle}>{card.phone}</Text>
      </View>
    );
  };

  renderLockedInfo = () => {
    return (
      <View style={styles.infoContainer}>
        <Text style={styles.textStyle}>Subscribe for more info.</Text>
      </View>
    );
  };

  renderUserInfo = () => {
    return (
      <React.Fragment>
        {this.state.nameSelected && this.renderNameInfo()}
        {this.state.bornSelected && this.renderBornInfo()}
        {this.state.addressSelected && this.renderAddressInfo()}
        {this.state.contactSelected && this.renderContactInfo()}
        {this.state.lockSelected && this.renderLockedInfo()}
      </React.Fragment>
    );
  };

  updateOnPressState = (attribute: string) => {
    this.resetState();
    this.setState(state => {
      return {
        ...state,
        [attribute]: true,
      };
    });
  };

  render() {
    const {card} = this.props;

    return (
      <View style={styles.card}>
        <View style={styles.backgroundView1}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{uri: card.picture}}
              resizeMode="cover"
            />
          </View>
        </View>

        <View style={{marginTop: 50}}>
          <View style={styles.userInfoContainer}>{this.renderUserInfo()}</View>
          <View style={[styles.buttonsContainer, {marginTop: 20}]}>
            <IconButton
              name="human-greeting"
              onPress={() => this.updateOnPressState('nameSelected')}
              color={this.state.nameSelected ? colors.green : colors.gray}
              borderColor={
                this.state.nameSelected ? colors.green : colors.white
              }
              backgroundColor={colors.white}
            />
            <IconButton
              name="calendar-month"
              onPress={() => this.updateOnPressState('bornSelected')}
              color={this.state.bornSelected ? colors.green : colors.gray}
              borderColor={
                this.state.bornSelected ? colors.green : colors.white
              }
              backgroundColor={colors.white}
            />
            <IconButton
              name="map-marker-outline"
              onPress={() => this.updateOnPressState('addressSelected')}
              color={this.state.addressSelected ? colors.green : colors.gray}
              borderColor={
                this.state.addressSelected ? colors.green : colors.white
              }
              backgroundColor={colors.white}
            />
            <IconButton
              name="phone"
              onPress={() => this.updateOnPressState('contactSelected')}
              color={this.state.contactSelected ? colors.green : colors.gray}
              borderColor={
                this.state.contactSelected ? colors.green : colors.white
              }
              backgroundColor={colors.white}
            />
            <IconButton
              name="lock"
              onPress={() => this.updateOnPressState('lockSelected')}
              color={this.state.lockSelected ? colors.green : colors.gray}
              borderColor={
                this.state.lockSelected ? colors.green : colors.white
              }
              backgroundColor={colors.white}
            />
          </View>
        </View>
      </View>
    );
  }
}
