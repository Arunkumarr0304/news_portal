import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import React, { useContext, useState } from 'react';
import Back from "../../assets/images/Back.svg";
import Dark_back from "../../assets/images/White_back.svg";
import { Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import Mic from "../../assets/images/mic.svg";
import Search from "../../assets/images/search.svg";
import ThemeContext from '../../theme/ThemeContext';
import { tab_data } from '../../components/Data/Data';
import Explore_section2 from '../../components/Explore_section/explore_section2';
import Explore_section3 from '../../components/Explore_section/explore_section3';
import Explore_section4 from '../../components/Explore_section/explore_section4';
import Explore_section5 from '../../components/Explore_section/explore_section5';

const Explore = () => {
  const { theme,  darkMode } = useContext(ThemeContext);
  const [active_tab, setActive_tab] = useState(tab_data[0].id);
    const press = (id) => {
        setActive_tab(id);
    };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Back />
        <Text style={styles.heading}>Explore</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} >
      <View style={styles.input_container}>
        <View style={styles.search}>
          <Search  />
        </View>
        <TextInput style={[styles.input, {backgroundColor: theme.cardbg, color: theme.color}]} placeholder='Search' />
        <View style={styles.mic}>
            <Mic />
        </View>
      </View>
      <ScrollView horizontal={true} style={styles.tab_container}>
        {
            tab_data.map((d) => (
                <TouchableOpacity style={[styles.tab, active_tab === d.id && styles.active_tab]} key={d.id} onPress={() =>{press(d.id)}}>
                    <Text style={[styles.tab_text, active_tab === d.id && styles.active_tab_text]}>{d.name}</Text>
                </TouchableOpacity>
            ))
        }
      </ScrollView>
      <Explore_section2 />
      <Explore_section3 />
      <Explore_section4 />
      <Explore_section5 />
      </ScrollView>
    </View>
  )
}

export default Explore;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection:'row',
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
    borderRadius: 10,
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
tab_container: {
  flexDirection: 'row',
},
tab: {
  marginRight: 12,
  paddingVertical: 8,
  paddingHorizontal: 16,
  borderColor: '#FF6F61',
  borderWidth: 1,
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
})