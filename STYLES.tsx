import { StyleSheet } from 'react-native';

export const styles = {
// Def container for all screens
  container: {
    backgroundColor: '#fff',
    flex: 1
  },

// Styles for sectionHeader in SectionList
  // sectionHeader
  //    sectionHeaderText
  sectionHeader: {
    padding: 3,
    backgroundColor: '#132147'
  },
  sectionHeaderText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold'
  },

// Styles for userItem in SectionList
  // userItemContainer
  //   userItemContent
  //     userItemName + userItemUsername
  //   editButton
  //     editButtonText
  userItemContainer: {
    padding: 7,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userItemContent: {
    flexGrow: 1,
  },
  userItemName: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  userItemUsername: {
    fontSize: 12,
    color: '#ccc'
  },
  editButton: {
    padding: 2,
    width: 40,
    alignItems: 'center',
    backgroundColor: '#00C579',
    borderRadius: 7,
  },
  editButtonText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold'
  },

// Styles for Filters
  // filtersContainer
  //   fiiltersItemContainer
  //     filtersItemText
  filtersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  fiiltersItemContainer: {
    padding: 4,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 7,
    backgroundColor: '#132147',
    margin: 2
  },
  filtersItemText: {
    color: '#fff',
    fontWeight: 'bold'
  }
};