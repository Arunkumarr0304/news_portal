import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { media_news_data } from '../Data/Data';
import { Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import Timer from "../../assets/images/timer.svg";
import Command from "../../assets/images/message.svg";
import ThemeContext from '../../theme/ThemeContext';

const Explore_section5 = () => {
  const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <Text style={[styles.heading, {color:theme.color}]}>Media News</Text>
      <View style={styles.stack_container}>
        {
            media_news_data.map((d) => (
                <TouchableOpacity style={[styles.stack, {backgroundColor:theme.coloring}]} key={d.id}>
                    <View style={styles.stack_content}>
                        <View style={styles.media}>
                    <View style={styles.icon_circle}>
                        {
                d.isSvg 
                  ? <d.icon width={25} height={25} style={styles.icon} /> 
                  : <Image source={d.icon} style={styles.icon} />
              }
              </View>
              <Text style={[styles.media_name, {color:theme.color}]}>{d.text}</Text>
                        </View>
                        <Text style={[styles.text, {color:theme.color}]}>{d.text2}</Text>
                        <View style={styles.bottom_row}>
                    <View style={styles.bottom_left}>
                        <Text style={[styles.news, {color:theme.color3}]}>{d.news}</Text>
                    </View>
                    <View style={styles.bottom_right}>
                        <View style={styles.timer}>
                            <Timer />
                            <Text style={styles.bottom_text}>{d.timing}</Text>
                        </View>
                        <View style={styles.timer}>
                            <Command />
                            <Text style={styles.bottom_text}>{d.comment}</Text>
                        </View>
                    </View>
                </View>
                    </View>
                    <Image source={d.image} alt='image' style={styles.image} />
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
        marginTop:16,
    },
    stack: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        backgroundColor: '#f6f6f6',
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
        padding: 5,
    },
    icon: {
        width: 25,
        height: 25,
    },
    media_name: {
        fontSize: 12,
        lineHeight: 16,
        fontFamily: 'Lato_400Regular',
        color: '#121212',
    },
    text: {
        fontSize: 14,
        lineHeight: 20,
        fontFamily: 'Lato_700Bold',
        color: '#121212',
        maxWidth: 180,
        marginTop: 10,
    },
    bottom_row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 16,
      },
      bottom_left: {
        flexDirection: 'row',
        alignItems:'center',
        gap: 10,
      },
      news: {
        fontSize: 12,
        lineHeight: 16,
        fontFamily: 'Lato_700Bold',
        color: '#757575',
        textTransform: 'capitalize',
      },
      profile: {
        width: 30,
        height: 30,
      },
      name: {
        fontSize: 12,
        lineHeight: 22,
        fontFamily: 'Lato_400Regular',
        color: '#121212',
        textTransform: 'capitalize',
      },
      bottom_right: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
      },
      timer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
      },
      bottom_text: {
        fontSize: 12,
        lineHeight: 22,
        fontFamily: 'Lato_400Regular',
        color: '#757575',
      },
      image: {
        width: 95,
        height: 90,
        borderRadius: 10,
      }
})