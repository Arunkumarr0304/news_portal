import { StyleSheet, Text, View, Image, ScrollView, StatusBar } from 'react-native';
import React from 'react';
import Back from "../../assets/images/Back.svg";
import { Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import Details from "../../assets/images/details.png";
import Timer from "../../assets/images/timer.svg";
import News_details_section2 from '../../components/News_details/News_details_section2';
import News_details_section3 from '../../components/News_details/News_details_section3';

const News_details = () => {
  return (
    <View style={styles.container}>
        <StatusBar 
        translucent
        backgroundColor="transparent"
        barStyle={darkMode ? "light-content" : "dark-content"} 
      />
      <View style={styles.header}>
        <Back />
        <Text style={styles.heading}>Political Shakeup</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.news_head}>Political Shakeup:<Text style={styles.news}> Analyzing the Major Election Results and Their Impacts</Text></Text>
        <View style={styles.image_box}>
          <Image source={Details} alt='image' style={styles.details} />
        </View>
        <View style={styles.details_row}>
          <View style={styles.row_left}>
            <Text style={styles.reporter}>By John Smith,<Text style={styles.date}> July 4, 2024</Text></Text>
          </View>
          <View style={styles.row_right}>
            <Timer />
            <Text style={styles.timing}>6h Ago</Text>
          </View>
        </View>
        <News_details_section2 />
      </ScrollView>
      <News_details_section3 />
    </View>
  )
}

export default News_details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  heading: {
    fontSize: 26,
    lineHeight: 36,
    fontFamily: 'Montserrat_700Bold',
    color: '#121212',
    textTransform: 'capitalize',
  },
  news_head: {
    fontSize: 20,
    lineHeight: 30,
    fontFamily: 'Montserrat_700Bold',
    color: '#121212',
    textTransform: 'capitalize',
    marginTop: 30,
  },
  news: {
    fontSize: 18,
    lineHeight: 28,
    fontFamily: 'Lato_400Regular',
    color: '#757575',
    marginBottom: 18,
  },
  image_box: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  details: {
    width: 320,
    borderRadius: 10,
    marginVertical: 16,
  },
  details_row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row_left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  reporter: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Lato_700Bold',
    color: '#121212',
    textTransform: 'capitalize',
  },
  date: {
    color: '#757575',
  },
  row_right: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  timing: {
    fontSize: 12,
    lineHeight: 22,
    fontFamily: 'Lato_400Regular',
    color: '#757575',
  }
})
