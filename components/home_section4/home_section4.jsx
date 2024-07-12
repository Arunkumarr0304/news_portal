import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import car from "../../assets/images/home_image.png";
import profile from "../../assets/images/section3_profile.png";
import { Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import ThemeContext from '../../theme/ThemeContext';

const Home_section4 = () => {
    const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
    const [isExpanded, setIsExpanded] = useState(false);
    const text = "As the demand for sustainable transportation grows, electric vehicles are becoming more popular. Experts weigh in on the future of the industry As the demand for sustainable transportation grows, electric vehicles are becoming more popular. Experts weigh in on the future of the industry";
    const truncatedText = text.split(' ').slice(0, 22).join(' ');

    return (
        <View style={styles.container}>
            <Text style={[styles.heading, {color:theme.color}]}>Featured Articles</Text>
            <Image source={car} alt='image' style={styles.image} />
            <Text style={[styles.heading, {color:theme.color}]}>The Future of Electric Vehicles</Text>
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

export default Home_section4;

const styles = StyleSheet.create({
    container: {
        marginVertical: 24,
        paddingBottom: 50,
    },
    heading: {
        fontSize: 18,
        lineHeight: 28,
        fontFamily: 'Montserrat_700Bold',
        color: '#121212',
        textTransform: 'capitalize',
    },
    image: {
        marginVertical: 30,
        width: 320,
        borderRadius: 10,
    },
    profile: {
        width: 80,
        height: 32,
        marginTop: 10,
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
