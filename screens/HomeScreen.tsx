import * as React from 'react';
import { View, Text, Button, ScrollView, SectionList } from 'react-native';

import { IScreenProps } from '../interfaces';

import { getData } from '../API';

import { styles } from '../STYLES';

import { UserItemElement } from '../components/UserItemElement';
import { FilterItemElement } from '../components/FilterItemElement';
import { SectionHeaderElement } from '../components/SectionHeaderElement';

export const HomeScreen: React.FC<IScreenProps> = ({navigation}) => {
  
  const navigateToDetail = () => {};

  const filteringByCity = () => {};

  return <ScrollView contentContainerStyle={styles.container}>
    <SectionList
      ListHeaderComponent={
        // Show block with list of filters aka Cities, add logic for props and handlePress if you need
        <View style={styles.filtersContainer}>
            <FilterItemElement />
        </View>
      }
      // change [] to you data
      sections={[]}
      keyExtractor={(item, index) => JSON.stringify(item)}
      renderSectionHeader={({ section: { title } }) => (
        <SectionHeaderElement title={title} />
      )}
      // Use it to render user information
      renderItem={({ item }) =>
        <UserItemElement 
          item={item} 
          navigateToDetail={navigateToDetail}
        />
      }
    />
  </ScrollView>
};