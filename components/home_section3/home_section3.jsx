import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, {useContext, useState} from 'react'
import { stack_data, tab_data } from '../Data/Data';
import { Lato_700Bold } from '@expo-google-fonts/lato';
import Timer from "../../assets/images/timer.svg";
import Command from "../../assets/images/message.svg";
import Dots from "../../assets/images/dots.svg";
import ThemeContext from '../../theme/ThemeContext';

const Home_section3 = () => {
  const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
    const [active_tab, setActive_tab] = useState(tab_data[0].id);
    const press = (id) => {
        setActive_tab(id);
    };
  return (
    <View style={styles.container}>
        <View style={styles.head_row}>
        <Text style={[styles.heading, {color:theme.color}]}>Explore</Text>
        <Text style={styles.see}>See All</Text>
      </View>
      <ScrollView horizontal={true} style={styles.tab_container}>
        {
            tab_data.map((d) => (
                <TouchableOpacity style={[styles.tab, active_tab === d.id && styles.active_tab]} key={d.id} onPress={() =>{press(d.id)}}>
                    <Text style={[styles.tab_text, active_tab === d.id && styles.active_tab_text]}>{d.name}</Text>
                </TouchableOpacity>
            ))
        }
      </ScrollView>
      <View style={styles.stack_container}>
        {
          stack_data.map((d) => (
                  <TouchableOpacity style={[styles.stack, {backgroundColor:theme.coloring}]} key={d.id}>
                        <Image source={d.image} alt='image' style={styles.stack_image} />
                        <View style={styles.stack_body}>
                            <View style={styles.text_row}>
                            <Text style={[styles.text, {color:theme.color}]}>{d.text}</Text>
                            <Dots style={styles.dots} />
                            </View>
                            <View style={styles.bottom_row}>
                    <View style={styles.bottom_left}>
                        <Image style={styles.profile} source={d.profile} alt='profile' />
                        <Text style={[styles.name, {color:theme.color}]}>{d.name}</Text>
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
                  </TouchableOpacity>
          )
          )
        }
      </View>
    </View>
  )
}

export default Home_section3;

const styles = StyleSheet.create({
    container: {

    },
    head_row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
      },
      heading: {
        fontSize: 18,
        lineHeight: 28,
        fontFamily: 'Montserrat_700Bold',
        color: '#121212',
        textTransform: 'capitalize',
      },
      see: {
        fontSize: 16,
        lineHeight: 26,
        fontFamily: 'Lato_400Regular',
        textTransform: 'capitalize',
        color: '#009688',
      },
    tab_container: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    tab: {
        marginRight: 12,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderColor: '#FF6F61',
        borderWidth: 1,
    },
    tab_text: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Lato_700Bold',
        color: '#FF6F61',
        textTransform: 'capitalize',
    },
    active_tab: {
        backgroundColor: '#FF6F61',
    },
    active_tab_text: {
        color: '#ffffff',
    },
    stack_container: {
        gap: 16,
        marginVertical: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    stack: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        paddingVertical: 10,
        paddingHorizontal: 16,
        backgroundColor:'#F6F6F6',
    },
    stack_image: {
        width: 85,
        height: 85,
    },
    text_row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 12,
        lineHeight: 22,
        fontFamily: 'Montserrat_700Bold',
        color: '#000000',
        maxWidth: 180,
      },
      dots: {
        paddingTop: 35,
      },
      bottom_row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        gap: 10,
      },
      bottom_left: {
        flexDirection: 'row',
        alignItems:'center',
        gap: 10,
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
        gap: 5,
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
      }
})