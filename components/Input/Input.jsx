import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import React, { useContext } from 'react';
import ThemeContext from '../../theme/ThemeContext';

const Input = ({label, Icon}) => {
    const { theme,  darkMode } = useContext(ThemeContext);
  return (
    <View>
        <View style={styles.inputBox}>
                    <Text style={[styles.label, {color:theme.color}]}>{label}</Text>
                    <View style={styles.inputWrapper}>
                        <TextInput style={[styles.input, {backgroundColor:theme.cardbg, color:theme.color}]} placeholderTextColor={darkMode? '#ffffff' : '#000000'} placeholder='minatonamikaze@gmail.com' />
                        <Icon style={styles.icon} />
                    </View>
                </View>
    </View>
  )
}

export default Input;

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
    input: {
        backgroundColor: '#F6F6F6',
        paddingVertical: 16,
        paddingHorizontal: 20,
        paddingLeft: 50,
        paddingRight: 20,
    },
    icon: {
        position: 'absolute',
        bottom: 16,
        left: 15,
    },   
})