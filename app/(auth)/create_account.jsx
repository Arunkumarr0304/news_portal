import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, StatusBar } from 'react-native';
import Person from "../../assets/images/person.svg";
import Mail from "../../assets/images/mail.svg";
import Button from '../../components/Button/Button';
import { router, Link } from "expo-router";
import { Lato_400Regular } from '@expo-google-fonts/lato';
import ThemeContext from '../../theme/ThemeContext';
import { Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import Log_method from '../../components/Log_method/Log_method';
import Password from '../../components/Password/Password';
import Input from '../../components/Input/Input';

const CreateAccount = () => {
    const { theme,  darkMode } = useContext(ThemeContext);
    const [passwordVisible1, setPasswordVisible1] = useState(false);

    const verify = () => {
        router.push('verification');
    };

    return (
        <View style={[styles.container, {backgroundColor:theme.background}]}>
            <Text style={[styles.heading, {color:theme.color}]}>Create Account</Text>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
            <Text style={styles.headingText}>Create your account to unlock a personalized music experience tailored to your taste.</Text>
            <View style={styles.inputContainer}>
                <Input label="Username" Icon={Person} />
                <Input label="Email Or Phone Number" Icon={Mail} />
                <Password 
                label="Password" 
                passwordVisible={passwordVisible1} 
                setPasswordVisible={setPasswordVisible1} 
            />
            </View>
            <Button buttonText="Create Account" onPress={verify} />
            <Log_method />
        <Text style={[styles.bottom_text, {color:theme.color}]}>Already have an account?<Link href='/login' style={styles.link} > Login</Link></Text>
        </ScrollView>
        </View>
    );
}

export default CreateAccount;

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingHorizontal: 20,
        backgroundColor: '#ffffff',
    },
    heading: {
        fontSize: 26,
        lineHeight: 36,
        fontFamily: 'Montserrat_700Bold',
        color: '#121212',
        textTransform: 'capitalize',
    },
    headingText: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Lato_400Regular',
        color: '#757575',
        marginVertical: 10,
    },
    inputContainer: {
        gap: 16,
        marginBottom: 26,
    },
    bottom_text: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Lato_400Regular',
        color: '#121212',
        textAlign: 'center',
        marginVertical: 25,
        paddingBottom: 50,
    },
    link: {
        color: '#FF6F61',
    }
});
