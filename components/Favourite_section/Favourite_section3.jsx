import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import React, { useContext, useState } from 'react';
import Calendar from "../../assets/images/calendar.svg";
import Dark_calendar from "../../assets/images/dark_calendar.svg";
import Fav from "../../assets/images/Favourite_img.png";
import Empty from "../../assets/images/empty_heart.svg";
import Filled from "../../assets/images/filled_heart.svg";
import { Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import profile from "../../assets/images/section3_profile.png";
import ThemeContext from '../../theme/ThemeContext';

const Favourite_section3 = () => {
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
            <View style={styles.header}>
            {darkMode? <Dark_calendar /> : <Calendar />}
                <Text style={[styles.date, {color:theme.color}]}>Tue, July 02</Text>
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
            <Text style={[styles.heading, {color:theme.color}]}>New Legislation and Its Implications</Text>
            <Image source={profile} alt='image' style={styles.profile} />
            <Text style={[styles.section3_text, {color:theme.color3}]}>
                {isExpanded ? text : `${truncatedText}`}
                <Text style={styles.read} onPress={() => setIsExpanded(!isExpanded)}>
                    {isExpanded ? " Show Less" : " Read More..."}
                </Text>
            </Text>
        </View>
    )
}

export default Favourite_section3;

const styles = StyleSheet.create({
    container: {
        paddingBottom: 50,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginTop: 24,
        marginBottom: 16,
    },
    date: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Lato_700Bold',
        color: '#000000',
        textTransform: 'capitalize',
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