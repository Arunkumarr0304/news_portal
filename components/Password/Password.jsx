import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import React, { useContext } from 'react';
import Open from "../../assets/images/eye-open.svg";
import Close from "../../assets/images/eye-close.svg";
import Lock from "../../assets/images/lock.svg";
import ThemeContext from '../../theme/ThemeContext';

const Password = ({ label, passwordVisible, setPasswordVisible }) => {
    const { theme, darkMode } = useContext(ThemeContext);

    const togglePasswordVisible = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <View style={styles.inputBox}>
            <Text style={[styles.label, { color: theme.color }]}>{label}</Text>
            <View style={styles.inputWrapper}>
                <View style={styles.lock}>
                <Lock />
                </View>
                <TextInput
                    style={[styles.passwordInput, { backgroundColor: theme.cardbg, color: theme.color }]}
                    placeholderTextColor={darkMode ? '#ffffff' : '#000000'}
                    placeholder={label}
                    secureTextEntry={!passwordVisible}
                />
                <TouchableOpacity onPress={togglePasswordVisible} style={styles.eye}>
                    {passwordVisible ? <Open /> : <Close />}
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Password;

const styles = StyleSheet.create({
    inputBox: {
        gap: 10,
    },
    label: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Montserrat_700Bold',
        color: '#121212',
        textTransform: 'capitalize',
    },
    inputWrapper: {
        position: 'relative',
    },
    passwordInput: {
        backgroundColor: '#F6F6F6',
        paddingVertical: 16,
        paddingHorizontal: 20,
        paddingLeft: 50,
        paddingRight: 50,
    },
    eye: {
        position: 'absolute',
        right: 10,
        bottom: 18,
    },
    lock: {
        position: 'absolute',
        bottom: 18,
        zIndex: 100,
        left: 18,
    }
});
