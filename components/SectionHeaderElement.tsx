import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { ISectionHeader } from ' ../interfaces';

import { styles } from '../STYLES';

// Should adaptive depends on filter logic
export const SectionHeaderElement: React.FC<ISectionHeader> = ({title}) => {
  return <View style={styles.sectionHeader}>
    <Text style={styles.sectionHeaderText}>{title}</Text>
  </View>
};