import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { IScreenProps} from '../interfaces';

export const Details: React.FC<IScreenProps> = ({navigation, route}) => {
  const [user, setUser] = React.useState({name: '', username: '', city: ''});

  React.useEffect(() => {
    if(route.params.hasOwnProperty('user')) {
      setUser(route.params.user);
    }
  }, [route.params]);

  return <View style={detailStyles.container}>
    <Text style={detailStyles.label}>
      Name
    </Text>
    <Text style={detailStyles.userText}>
      {user.name}
    </Text>
    <Text style={detailStyles.label}>
      Username
    </Text>
    <Text style={detailStyles.userText}>
      {user.username}
    </Text>
    <Text style={detailStyles.label}>
      City
    </Text>
    <Text style={detailStyles.userText}>
      {user.city}
    </Text>
  </View>
};

const detailStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 4
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  userText: {
    fontSize: 14,
  }
});