import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import { Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { Lato_400Regular } from '@expo-google-fonts/lato';
import { Interest_data } from '../../components/Data/Data';

const Interest = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>What’s Interest you?</Text>
      <Text style={styles.head_text}>Follow Topic to influence the stories you see</Text>
      <View style={styles.stack_container}>
        {
            Interest_data.map((d) => (
                <TouchableOpacity style={styles.stack} key={d.id}>
                    <Image source={d.image} style={styles.image} />
                    <Text style={styles.stack_text}>{d.text}</Text>
                </TouchableOpacity>
            ))
        }
      </View>
    </View>
  )
}

export default Interest;

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    heading: {
        fontSize: 26,
        lineHeight: 36,
        fontFamily: 'Montserrat_700Bold',
        color: '#121212',
    },
    head_text: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Lato_400Regular',
        color: '#757575',
        marginVertical: 10,
    },
    stack_container: {
        marginTop: 10,
    }
})