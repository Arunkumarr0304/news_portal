import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Modal, Keyboard, StatusBar } from 'react-native';
import React, { useContext, useState } from 'react';
import Back from "../../assets/images/Back.svg";
import Dark_back from "../../assets/images/White_back.svg";
import Verify from "../../assets/images/Verify.png";
import Button from '../../components/Button/Button';
import { router, Link } from "expo-router";
import { Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import ThemeContext from '../../theme/ThemeContext';
import { Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import Otp from '../../components/OTP/Otp';
import Verification_section2 from '../../components/Verification_section2/Verification_section2';

const Verification = () => {
    const { theme,  darkMode } = useContext(ThemeContext);
    const back = () => {
        router.push('create_account');
    };

    return (
        <View style={[styles.container, {backgroundColor:theme.background}]}>
              <StatusBar 
        translucent
        backgroundColor="transparent"
        barStyle={darkMode ? "light-content" : "dark-content"} 
      />
            <View style={styles.header}>
            <TouchableOpacity onPress={back}>
       {darkMode? <Dark_back /> :  <Back />}
       </TouchableOpacity>
                <Text style={[styles.heading, {color:theme.color}]}>verification</Text>
            </View>
            <View style={styles.content}>
                <Image source={Verify} alt='image' style={styles.image} />
                <Text style={[styles.content_heading, {color:theme.color}]}>Verification Code</Text>
                <Text style={[styles.content_text, {color:theme.color3}]}>We have sent the code verification to </Text>
                <Text style={[styles.mail, {color:theme.color}]}>minatonami****@gmail.com</Text>
                <Otp />
            </View>
           <Verification_section2 />
        </View>
    );
}

export default Verification;

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingHorizontal: 20,
        paddingBottom: 40,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 50,
    },
    heading: {
        fontSize: 26,
        lineHeight: 36,
        fontFamily: 'Montserrat_700Bold',
        color: '#121212',
        textTransform: 'capitalize',
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50,
    },
    image: {
        width: 130,
        height: 130,
    },
    content_heading: {
        fontSize: 26,
        lineHeight: 36,
        fontFamily: 'Montserrat_700Bold',
        color: '#121212',
        textTransform: 'capitalize',
        marginTop: 30,
    },
    content_text: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Lato_400Regular',
        color: '#757575',
        marginTop: 24,
    },
    mail: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Lato_700Bold',
        color: '#121212',
    },
   
});
