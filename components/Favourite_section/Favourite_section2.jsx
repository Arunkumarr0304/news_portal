import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import React, { useContext, useState } from 'react';
import Calendar from "../../assets/images/calendar.svg";
import Dark_calendar from "../../assets/images/dark_calendar.svg";
import { Lato_700Bold } from '@expo-google-fonts/lato';
import { Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { Lato_400Regular } from '@expo-google-fonts/lato';
import { fav_data } from '../Data/Data';
import Empty from "../../assets/images/empty_heart.svg";
import Filled from "../../assets/images/filled_heart.svg";
import Timer from "../../assets/images/timer.svg";
import Command from "../../assets/images/message.svg";
import ThemeContext from '../../theme/ThemeContext';

const Favourite_section2 = () => {
    const [wishlists, setWishlists] = useState({});
    const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
    const toggleWishlist = (id) => {
        setWishlists(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
              {darkMode? <Dark_calendar /> : <Calendar />}
                <Text style={[styles.date, {color:theme.color}]}>Mon, July 08</Text>
            </View>
            <ScrollView horizontal={true} style={styles.card_container}>
                {
                    fav_data.map((d) => (
                        <TouchableOpacity style={[styles.card, {backgroundColor:theme.cardbg}]} key={d.id}>
                            <Image source={d.image} alt='image' style={styles.image} />
                            <View style={styles.top_row}>
                                <Text style={[styles.news]}>{d.news}</Text>
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
                                            <Text style={[styles.bottom_text]}>{d.timing}</Text>
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

export default Favourite_section2;

const styles = StyleSheet.create({
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
        alignItems: 'center',
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
})