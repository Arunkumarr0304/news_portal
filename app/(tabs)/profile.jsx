import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Switch, Modal, StatusBar } from 'react-native';
import React, { useContext, useState } from 'react';
import Back from "../../assets/images/Back.svg";
import Dark_back from "../../assets/images/White_back.svg";
import ThemeContext from '../../theme/ThemeContext';
import { router } from "expo-router";
import { Lato_400Regular } from '@expo-google-fonts/lato';
import { Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_700Bold } from "@expo-google-fonts/montserrat";
import Profile_section2 from '../../components/Profile_section/Profile_section2';

const Profile = () => {
  const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
  const back = () => {
    router.push('home');
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={back}>
          {darkMode ? <Dark_back /> : <Back />}
        </TouchableOpacity>
        <Text style={[styles.heading, { color: theme.color }]}>Profile</Text>
      </View>
      <Profile_section2 />
      
    </View>
  )
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 90,
  },
  heading: {
    fontSize: 24,
    lineHeight: 34,
    fontFamily: "Montserrat_700Bold",
    color: '#121212',
    textTransform: 'capitalize',
  },
  
});
