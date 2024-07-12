import { StyleSheet, Text, View, ScrollView, TextInput, StatusBar } from 'react-native';
import React, { useContext, useState } from 'react';
import Back from "../../assets/images/Back.svg";
import { Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import Mic from "../../assets/images/mic.svg";
import Searches from "../../assets/images/search.svg";
import ThemeContext from '../../theme/ThemeContext';
import Search_section2 from '../../components/Search_section/Search_section2';
import Search_section3 from '../../components/Search_section/search_section3';
import { tab_data2 } from '../../components/Data/Data';


const Search = () => {
  const { theme, darkMode } = useContext(ThemeContext);
  const [activeTab, setActiveTab] = useState(tab_data2[0].id);

  return (
    <View style={styles.container}>
        <StatusBar 
        translucent
        backgroundColor="transparent"
        barStyle={darkMode ? "light-content" : "dark-content"} 
      />
      <View style={styles.header}>
        <Back />
        <Text style={styles.heading}>Search</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.input_container}>
          <Searches style={styles.search} />
          <TextInput style={[styles.input, { backgroundColor: theme.cardbg, color: theme.color }]} placeholder='Search' />
          <View style={styles.mic}>
            <Mic />
          </View>
        </View>
        <Search_section2 activeTab={activeTab} onPressTab={setActiveTab} />
        <Search_section3 activeTab={activeTab} />
      </ScrollView>
    </View>
  );
}

export default Search;

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 30,
    },
    heading: {
        fontSize: 26,
        lineHeight: 36,
        fontFamily: 'Montserrat_700Bold',
        color: '#121212',
        textTransform: 'capitalize',
    },
    input_container: {
        marginVertical: 16,
    },
    input: {
        backgroundColor: '#F6F6F6',
        paddingVertical: 16,
        paddingHorizontal: 40,
        position: 'relative',
    },
    search: {
        position: 'absolute',
        zIndex: 100,
        bottom: 18,
        left: 10,
    },
    mic: {
        position: 'absolute',
        bottom: 18,
        right: 10,
    },
})