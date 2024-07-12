import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import React, {useContext, useState} from 'react';
import Back from "../../assets/images/Back.svg";
import Dark_back from "../../assets/images/White_back.svg";
import ThemeContext from '../../theme/ThemeContext';
import Dot from "../../assets/images/dot_box.svg";
import Dark_Dot from "../../assets/images/dark_dot_box.svg";
import Profile from "../../assets/images/news_profile1.png";
import { Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { Lato_400Regular } from '@expo-google-fonts/lato';
import Author_section2 from '../../components/Author_section/Author_section2';

const Author = () => {
    const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <View style={styles.container}>
          <StatusBar 
        translucent
        backgroundColor="transparent"
        barStyle={darkMode ? "light-content" : "dark-content"} 
      />
      <View style={styles.header}>
        <Back />
        <Dot />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        <Image source={Profile} alt='image' style={styles.profile} />
        <Text style={styles.name}>VKY</Text>
        <Text style={styles.id}>@VKY20</Text>
      </View>
      <Text style={styles.bio}>Bio</Text>
      <Text style={styles.bio_text}>John Smith is a seasoned political journalist with 15+ years of experience, known for his in-depth analysis and clear writing. He has covered election cycles, international summits, and major policy shifts, with work featured in leading publications.</Text>
      <Author_section2 />
      </ScrollView>
    </View>
  )
}

export default Author;

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
        gap: 5,
    },
    name: {
        fontSize: 24,
        lineHeight: 34,
        fontFamily: 'Montserrat_700Bold',
        color: '#121212',
        textTransform: 'uppercase',
        textAlign: 'center',
    },
    id: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Lato_400Regular',
        color: '#121212',
    },
    bio: {
        fontSize: 18, 
        lineHeight: 28,
        fontFamily: 'Montserrat_700Bold',
        color: '#000000',
        textTransform: 'capitalize',
    },
    bio_text: {
        fontSize: 12,
        lineHeight: 22,
        fontFamily: 'Lato_400Regular',
        color: '#121212',
    }
})