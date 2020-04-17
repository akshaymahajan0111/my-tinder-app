import React from 'react';
import {TouchableHighlight, View} from 'react-native';
import {func, string} from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './IconButtonStyles';
import {colors} from '../../constants';

const IconButton = ({onPress, name, backgroundColor, color, borderColor}) => (
  <TouchableHighlight
    style={[styles.singleButton, {backgroundColor}]}
    onPress={onPress}
    activeOpacity={0.95}
    underlayColor={colors.white}>
    <View style={[styles.iconContainer, {borderTopColor: borderColor}]}>
      <Icon name={name} size={35} color={color} selectionColor={colors.green} />
    </View>
  </TouchableHighlight>
);

IconButton.propTypes = {
  onPress: func,
  name: string.isRequired,
  color: string,
  backgroundColor: string,
  borderColor: string,
};

IconButton.defaultProps = {
  color: colors.white,
  backgroundColor: colors.heartColor,
};

export default IconButton;
