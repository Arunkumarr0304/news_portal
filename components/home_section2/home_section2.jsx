import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useContext, useState } from 'react'
import { Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { Lato_400Regular } from '@expo-google-fonts/lato';
import { news_data } from '../Data/Data';
import Empty from "../../assets/images/empty_heart.svg";
import Filled from "../../assets/images/filled_heart.svg";
import Timer from "../../assets/images/timer.svg";
import Command from "../../assets/images/message.svg";
import { router, Link } from "expo-router";
import ThemeContext from '../../theme/ThemeContext';

const Home_section2 = () => {
  const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
  const [wishlists, setWishlists] = useState({});

  const toggleWishlist = (id) => {
    setWishlists(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  }
  const details = () => {
    router.push('/news_details');
  };
  return (
    <View style={styles.container}>
      <View style={styles.head_row}>
        <Text style={[styles.heading, {color:theme.color}]}>World News</Text>
        <Text style={styles.see}>See All</Text>
      </View>
      <ScrollView horizontal={true} style={styles.card_container}>
        {
          news_data.map((d) => (
            <TouchableOpacity style={[styles.card, {backgroundColor:theme.coloring}]} key={d.id} onPress={details}>
              <Image source={d.image} alt='image' style={styles.image} />
              <View style={styles.top_row}>
                <Text style={styles.news}>{d.news}</Text>
                <TouchableOpacity style={styles.wishlist} onPress={() => toggleWishlist(d.id)}>
                  {
                    wishlists[d.id] ? 
                    <Filled width={24} height={24} /> : 
                    <Empty width={24} height={24} />
                  }
                </TouchableOpacity>
              </View>
              <View style={styles.card_body}>
                <Text style={[styles.text, {color:theme.color}]}>{d.text}</Text>
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
          ))
        }
      </ScrollView>
    </View>
  )
}

export default Home_section2;

const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
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
  card_container: {
    flexDirection: 'row',
  },
  card: {
    marginRight: 16,
    padding: 10,
    backgroundColor: '#f6f6f6',
    borderRadius: 10,
    
  },
  image: {
    position: 'relative',
  },
  top_row: {
  position: 'absolute',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingHorizontal: 20,
  gap: 110,
  top: 20,
  },
  news: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: 'Lato_400Regular',
    color: '#FFFFFF',
    textTransform: 'capitalize',
    backgroundColor: '#FF6F61',
    borderRadius: 5,
    padding: 5,
  },
  card_body: {
    paddingVertical: 16,
  },
  text: {
    fontSize: 16,
    lineHeight: 26,
    fontFamily: 'Montserrat_700Bold',
    color: '#000000',
    maxWidth: 255,
  },
  bottom_row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
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
  }
});
