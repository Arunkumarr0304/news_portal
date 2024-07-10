import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { logo_data } from '../Data/Data';
import { Lato_400Regular } from '@expo-google-fonts/lato';

const Explore_section3 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.head_row}>
        <Text style={styles.heading}>Popular Media</Text>
        <Text style={styles.see}>See All</Text>
      </View>
      <ScrollView horizontal={true} style={styles.logo_container}>
        {
          logo_data.map((d) => (
            <TouchableOpacity style={styles.tab} key={d.id}>
                <View style={styles.icon_circle}>
              {
                d.isSvg 
                  ? <d.icon width={50} height={50} style={styles.icon} /> 
                  : <Image source={d.icon} style={styles.icon} />
              }
              </View>
              <Text style={styles.logo_text}>{d.text}</Text>
            </TouchableOpacity>
          ))
        }
      </ScrollView>
    </View>
  );
}

export default Explore_section3;

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
  logo_container: {
    flexDirection: 'row',
  },
  tab: {
    marginRight: 16,
    alignItems: 'center',
  },
  icon_circle: {
    backgroundColor: '#f6f6f6',
    borderRadius: 50,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
   
  },
  logo_text: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: 'Lato_400Regular',
    color: '#000000',
  }
});
