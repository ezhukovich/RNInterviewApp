import * as React from 'react';
import { View, Text } from 'react-native';

import {IScreenProps} from '../interfaces';

export const Profile: React.FC<IScreenProps> = ({navigation}) => {
  return <View>
    <Text>
      Profile screen
    </Text>
  </View>
};