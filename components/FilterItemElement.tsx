import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from '../STYLES';

// Should adaptive depends on filter logic
export const FilterItemElement = () => {
  return <TouchableOpacity 
    style={styles.fiiltersItemContainer} 
    onPress={() => {}}>
      <Text style={styles.filtersItemText}>
        City Name
      </Text>
  </TouchableOpacity>
};