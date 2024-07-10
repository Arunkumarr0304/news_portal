import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { media_news_data } from '../Data/Data';

const Explore_section5 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Media News</Text>
      <View style={styles.stack_container}>
        {
            media_news_data.map((d) => (
                <TouchableOpacity style={styles.stack} key={d.id}>
                    <View style={styles.stack_content}>
                        <View style={styles.media}>
                    <View style={styles.icon_circle}>
                        {
                d.isSvg 
                  ? <d.icon width={50} height={50} style={styles.icon} /> 
                  : <Image source={d.icon} style={styles.icon} />
              }
              </View>
              <Text style={styles.media_name}>{d.text}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            ))
        }
      </View>
    </View>
  )
}

export default Explore_section5;

const styles = StyleSheet.create({
    container: {
        marginVertical: 25,
        paddingBottom: 50,
    },
    heading: {
        fontSize: 18,
        lineHeight: 28,
        fontFamily: 'Montserrat_700Bold',
        color: '#121212',
        textTransform: 'capitalize',
    },
    stack_container: {
        gap: 16,
    },
    stack: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
    },
    stack_content: {

    },
    media: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    icon_circle: {
        backgroundColor: '#ffffff',
        borderRadius: 30,
    }
})