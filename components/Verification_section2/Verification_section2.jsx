import { StyleSheet, Text, View, TextInput, Modal, TouchableOpacity, Image} from 'react-native';
import React, { useContext, useState } from 'react';
import { Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import ThemeContext from '../../theme/ThemeContext';
import Tick from "../../assets/images/Tick.png";
import Button from '../../components/Button/Button';
import { router, Link } from "expo-router";
import Back from "../../assets/images/Back.svg";
import Dark_back from "../../assets/images/White_back.svg";

const Verification_section2 = () => {
    const { theme,  darkMode } = useContext(ThemeContext);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const continues = () => {
        setIsModalVisible(true);
    };
    const location = () => {
        setIsModalVisible(false);
        router.push('interest');
    };
  return (
    <View>
       <Button buttonText="continue" onPress={continues} />
            <Text style={[styles.bottom_text, {color:theme.color}]}>Didn’t receive the code?<Link href="/verification" style={styles.link}> Resend</Link></Text>
            <Modal
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => setIsModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={[styles.modalContent, {backgroundColor:theme.background}]}>
                        <View style={styles.modal_header}>
                            <TouchableOpacity onPress={() => setIsModalVisible(false)}>
                            {darkMode? <Dark_back /> :  <Back />}
                            </TouchableOpacity>
                        </View>
                        <View style={styles.image_box2}>
                            <Image source={Tick} alt='image' style={styles.Tick} />
                        </View>
                        <Text style={[styles.modal_heading, {color:theme.color}]}>Register Success</Text>
                        <Text style={styles.modal_description}>Congratulation your account already created. Please login to get amazing experience.</Text>
                        <Button buttonText="Go to Homepage" onPress={location} />
                    </View>
                </View>
            </Modal>
    </View>
  )
}

export default Verification_section2;

const styles = StyleSheet.create({
    bottom_text: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Lato_400Regular',
        color: '#121212',
        textAlign: 'center',
        marginVertical: 25,
        paddingBottom: 50,
    },
    link: {
        color: '#FFAF2A',
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
    },
    modalContent: {
        width: '100%',
        paddingHorizontal: 20,
        paddingTop: 50,
        paddingBottom: 30,
        backgroundColor: '#fff',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    modal_header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        marginBottom: 25,
    },
    image_box2: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal_heading: {
        fontSize: 26,
        lineHeight: 36,
        fontFamily: 'Montserrat_700Bold',
        color: '#121212',
        textAlign: 'center',
        marginTop: 25,
    },
    modal_description: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Lato_400Regular',
        textAlign: 'center',
        color: '#757575',
        marginTop: 16,
        marginBottom: 50,
    },
    Tick: {
        width: 130,
        height: 130,
    }
})