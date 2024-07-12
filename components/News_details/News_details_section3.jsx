import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useContext, useState } from 'react';
import Empty from "../../assets/images/empty_heart2.svg";
import Dark_empty from "../../assets/images/dark_empty_heart.svg";
import Filled from "../../assets/images/filled_heart.svg";
import { Lato_400Regular } from '@expo-google-fonts/lato';
import Command from "../../assets/images/message.svg";
import Refresh from "../../assets/images/refresh.svg";
import Unsaved from "../../assets/images/unsaved.svg";
import Saved from "../../assets/images/saved.svg";
import ThemeContext from '../../theme/ThemeContext';

const News_details_section3 = () => {
    const { theme, darkMode } = useContext(ThemeContext);
    const [wishlists, setWishlists] = useState(false);
    const [wishlists2, setWishlists2] = useState(true);

    const press = () => {
        setWishlists(!wishlists);
    }

    const save = () => {
        setWishlists2(!wishlists2);
    }

    return (
        <View style={[styles.container, { backgroundColor: theme.cardbg }]}>
            <View style={styles.box}>
                <TouchableOpacity style={styles.wishlist} onPress={press}>
                    {wishlists ? (
                        <Filled width={24} height={24} />
                    ) : (
                        darkMode ? <Dark_empty width={24} height={24} /> : <Empty width={24} height={24} />
                    )}
                </TouchableOpacity>
                <Text style={[styles.likes, { color: theme.color }]}>25K</Text>
            </View>
            <View style={[styles.box, { backgroundColor: theme.cardbg }]}>
                <Command />
                <Text style={[styles.comment, { color: theme.color }]}>89</Text>
            </View>
            <Refresh />
            <View style={styles.box}>
                <TouchableOpacity style={styles.wishlist} onPress={save}>
                    {wishlists2 ? (
                        <Saved width={24} height={24} />
                    ) : (
                        <Unsaved width={24} height={24} />
                    )}
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default News_details_section3;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f6f6f6',
        paddingTop: 16,
        paddingBottom: 20,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 3,
    },
    likes: {
        fontSize: 12,
        lineHeight: 22,
        fontFamily: 'Lato_400Regular',
        color: '#121212',
    },
    comment: {
        fontSize: 12,
        lineHeight: 22,
        fontFamily: 'Lato_400Regular',
        color: '#757575',
    }
});
