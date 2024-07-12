import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import { tab_data2 } from '../Data/Data';
import ThemeContext from '../../theme/ThemeContext';

const Search_section2 = ({ activeTab, onPressTab }) => {
  const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <View horizontal={true} style={styles.tab_container}>
      {tab_data2.map((d) => (
        <TouchableOpacity
          style={[styles.tab, activeTab === d.id && styles.active_tab]}
          key={d.id}
          onPress={() => { onPressTab(d.id) }}
        >
          <Text style={[styles.tab_text, activeTab === d.id && styles.active_tab_text]}>
            {d.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default Search_section2;

const styles = StyleSheet.create({
  tab_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tab: {
    marginRight: 12,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderColor: '#FF6F61',
    borderWidth: 1,
    minWidth: 98,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tab_text: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Lato_700Bold',
    color: '#FF6F61',
    textTransform: 'capitalize',
  },
  active_tab: {
    backgroundColor: '#FF6F61',
  },
  active_tab_text: {
    color: '#ffffff',
  },
});
