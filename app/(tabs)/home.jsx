import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import React, { useContext } from 'react';
import Home_Profile from "../../assets/images/home_profile.png";
import Notification from "../../assets/images/notification.svg";
import { Lato_400Regular } from '@expo-google-fonts/lato';
import { Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import Home_section2 from '../../components/home_section2/home_section2';
import Home_section3 from '../../components/home_section3/home_section3';
import Home_section4 from '../../components/home_section4/home_section4';
import ThemeContext from '../../theme/ThemeContext';
import { router, Link } from "expo-router";

const Home = () => {
    const { theme,  darkMode } = useContext(ThemeContext);
  return (
    <View style={[styles.container, {backgroundColor:theme.background}]}>
          <StatusBar 
        translucent
        backgroundColor="transparent"
        barStyle={darkMode ? "light-content" : "dark-content"} 
      />
      <View style={styles.header}>
        <View style={styles.header_left}>
            <Image source={Home_Profile} alt='image' style={styles.profile} />
            <View style={styles.heading_column}>
                <Text style={[styles.heading, {color:theme.color3}]}>Welcome Back,</Text>
                <Text style={[styles.name, {color:theme.color}]}>Minato Namikaza</Text>
            </View>
        </View>
        <TouchableOpacity style={styles.notification}>
        <Notification />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Home_section2 />
      <Home_section3 />
      <Home_section4 />
      </ScrollView>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 5,
    },
    profile: {
        width: 50,
        height: 50,
    },
    header_left: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
    heading: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Lato_400Regular',
        color: '#757575',
        textTransform: 'capitalize',
    },
    name: {
        fontSize: 20,
        lineHeight: 30,
        fontFamily: 'Montserrat_700Bold',
        color: '#121212',
        textTransform: 'capitalize',
    },
    notification: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        backgroundColor:'#FF6F61',
        padding: 10,
    }
})