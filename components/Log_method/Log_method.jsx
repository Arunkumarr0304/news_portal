import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { log_methods } from '../Data/Data';
import ThemeContext from '../../theme/ThemeContext';

const Log_method = () => {
    const { theme,  darkMode } = useContext(ThemeContext);
  return (
    <View>
       <Text style={styles.or}>Or Using other Method</Text>
            <View style={styles.tab_container}>
            {
                log_methods.map((d) => (
                    <TouchableOpacity style={[styles.tab, {backgroundColor:theme.cardbg}]} key={d.id}>
                        {darkMode? d.dark_image : d.image}
                        <Text style={[styles.tab_text, {color:theme.color}]}>{d.text}</Text>
                    </TouchableOpacity>
                ))
            }
        </View>
    </View>
  )
}

export default Log_method;

const styles = StyleSheet.create({
    or: {
        textAlign: 'center',
        marginVertical: 28,
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Lato_400Regular',
        color: '#757575',
    },
    tab_container: {
        gap: 20,
    },
    tab: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        paddingVertical: 12,
        paddingHorizontal: 25,
        backgroundColor: '#F6F6F6',
    },
    tab_text: {
        fontSize: 16,
        lineHeight: 26,
        fontFamily: 'Montserrat_500Medium',
        color: '#121212',
    },
})