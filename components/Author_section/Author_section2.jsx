import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import React, {useState, useContext} from 'react';
import { Online_data } from '../Data/Data';
import Empty from "../../assets/images/empty_heart.svg";
import Filled from "../../assets/images/filled_heart.svg";
import profile from "../../assets/images/section3_profile.png";
import Fav from "../../assets/images/Favourite_img.png";
import { Montserrat_700Bold, Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import { Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import ThemeContext from '../../theme/ThemeContext';

const Author_section2 = () => {
    const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
    const [wishlists, setWishlists] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const press = () => {
        setWishlists(!wishlists)
    }
    const text = "The latest climate legislation represents a significant step towards reducing emissions and promoting sustainable practices across industries The latest climate legislation represents a significant step towards reducing emissions and promoting sustainable practices across industries";
    const truncatedText = text.split(' ').slice(0, 22).join(' ');
  return (
    <View style={styles.container}>
      <View style={styles.online_container}>
        <Text style={styles.list_heading}>Social Media Links:</Text>
        <View style={styles.list}>
            {
                Online_data.map((d) => (
                    <TouchableOpacity style={styles.online} key={d.id}>
                        {d.icon}
                    </TouchableOpacity>
                ))
            }
        </View>
      </View>
      <View style={styles.head_row}>
        <Text style={styles.heading}>Recent Articles</Text>
        <Text style={styles.see}>See All</Text>
      </View>
      <View style={styles.content}>
                <Image source={Fav} alt='image' style={styles.image} />
                <TouchableOpacity style={styles.wishlist} onPress={press}>
                    {
                        wishlists === true ?
                            <Filled width={24} height={24} /> :
                            <Empty width={24} height={24} />
                    }
                </TouchableOpacity>

            </View>
            <Text style={styles.heading}>New Legislation and Its Implications</Text>
            <Image source={profile} alt='image' style={styles.profile} />
            <Text style={styles.section3_text}>
                {isExpanded ? text : `${truncatedText}`}
                <Text style={styles.read} onPress={() => setIsExpanded(!isExpanded)}>
                    {isExpanded ? " Show Less" : " Read More..."}
                </Text>
            </Text>
    </View>
  )
}

export default Author_section2;

const styles = StyleSheet.create({
    container: {
        marginVertical: 16,
        paddingBottom: 50,
    },
    online_container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
    list: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    list_heading: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Montserrat_400Regular',
        color: '#121212',
        textTransform: 'capitalize',
    },
    head_row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 16,
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
      content: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        position: 'relative',
        width: 320,
        borderRadius: 10,
    },
    wishlist: {
        position: 'absolute',
        right: 20,
        top: 20,
    },
    heading: {
        fontSize: 16,
        lineHeight: 26,
        fontFamily: 'Montserrat_700Bold',
        color: '#000000',
        marginVertical: 16,
    },
    profile: {
        width: 80,
        height: 32,
    },
    section3_text: {
        fontSize: 12,
        lineHeight: 22,
        fontFamily: 'Lato_400Regular',
        color: '#757575',
        marginTop: 12,
    },
    read: {
        fontSize: 12,
        lineHeight: 22,
        fontFamily: 'Lato_700Bold',
        color: '#FF6F61',
        textTransform: 'capitalize',
    }
})