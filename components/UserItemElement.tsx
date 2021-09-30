import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { IUserItemComponent } from '../interfaces';

import { styles } from '../STYLES';

export const UserItemElement: React.FC<IUserItemComponent> = ({
  item,
  navigateToDetail
}) => (
  <View style={styles.userItemContainer}>
    <TouchableOpacity 
      style={styles.userItemContent} 
      onPress={() => navigateToDetail(item)}>
        <Text style={styles.userItemName}>{item.name}</Text>
        <Text style={styles.userItemUsername}>{item.username}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.editButton} onPress={() => {}}>
          <Text style={styles.editButtonText}>Edit</Text>
    </TouchableOpacity>
  </View>
);