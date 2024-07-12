import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import React, { useContext } from 'react';
import { logo_data2 } from '../Data/Data';
import Button from '../Button/Button';
import { Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { router, Link } from "expo-router";
import ThemeContext from '../../theme/ThemeContext';

const Explore_section4 = () => {
  const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
  const author = () => {
    router.push('/author');
  };
  return (
    <View style={styles.container}>
       <View style={styles.head_row}>
        <Text style={styles.heading}>Top Author</Text>
        <Text style={styles.see}>See All</Text>
      </View>
      <ScrollView horizontal={true} style={styles.logo_container}>
        {
          logo_data2.map((d) => (
            <TouchableOpacity style={styles.tab} key={d.id} onPress={author}>
              <Image source={d.icon} alt='image' style={styles.image} />  
              <Text style={styles.logo_text}>{d.name}</Text>
              <Button buttonText="follow" />
            </TouchableOpacity>
          ))
        }
      </ScrollView>
    </View>
  )
}

export default Explore_section4;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 30,
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
      logo_container: {
        flexDirection: 'row',
        marginVertical: 17,
      },
      tab: {
        marginRight: 16,
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#F6F6F6',
        borderRadius: 5,
        minHeight: 200,
        maxHeight: 220,
      },
      image: {
        width: 60,
        height: 60,
        marginTop: 20,
      },
      logo_text: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Montserrat_700Bold',
        color: '#121212',
        textTransform: 'capitalize',
        paddingVertical: 10,
      }
})