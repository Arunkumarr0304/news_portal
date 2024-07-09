import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Modal } from 'react-native';
import React, { useContext, useState, useEffect } from 'react';
import Mail from "../../assets/images/mail.svg";
import { Lato_400Regular } from '@expo-google-fonts/lato';
import ThemeContext from '../../theme/ThemeContext';
import Input from '../../components/Input/Input';
import Password from '../../components/Password/Password';
import { Montserrat_500Medium, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import Login_section2 from '../../components/Login_section2/Login_section2';
import Login_section3 from '../../components/Login_section3/Login_section3';
import { useRouter } from "expo-router";

const Login = () => {
  const { theme, darkMode } = useContext(ThemeContext);
  const [Passwordvisible, setPasswordvisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const router = useRouter();

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);
  const openModal2 = () => {
    setModalVisible(false);
    setTimeout(() => setModalVisible2(true), 300);
  };
  
  const closeModal2 = () => setModalVisible2(false);

  const location = () => {
    setModalVisible2(false);
    router.push('interest'); 
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.heading, { color: theme.color }]}>Login Account</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.head_text}>Login to access your personalized music collection and playlists anytime, anywhere.</Text>
        <View style={styles.inputContainer}>
            <Input label="Email Or Phone Number" Icon={Mail} />
            <Password 
                label="Password" 
                passwordVisible={Passwordvisible} 
                setPasswordVisible={setPasswordvisible} 
            />
        </View>
        <Login_section2
          openModal={openModal}
          modalVisible={modalVisible}
          closeModal={closeModal}
          openModal2={openModal2}
        />
        <Login_section3
          modalVisible2={modalVisible2}
          closeModal2={closeModal2}
          location={location}
        />
      </ScrollView>
    </View>
  )
}

export default Login;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
  },
  heading: {
    fontSize: 26,
    lineHeight: 36,
    fontFamily: 'Montserrat_700Bold',
    color: '#121212',
    textTransform: 'capitalize',
  },
  head_text: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Lato_400Regular',
    color: '#757575',
    marginVertical: 10,
  },
  inputContainer: {
    gap: 16,
    marginBottom: 26,
  },
  link: {
    color: '#FF6F61',
  },
})
