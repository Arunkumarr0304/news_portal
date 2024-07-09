import { StyleSheet, Text, View, TouchableOpacity, Modal, StatusBar } from 'react-native';
import React, { useContext, useState } from 'react';
import Back from "../../assets/images/Back.svg";
import Dark_back from "../../assets/images/White_back.svg";
import Done from "../../assets/images/Done.svg";
import Button from '../Button/Button';
import Log_method from '../Log_method/Log_method';
import ThemeContext from '../../theme/ThemeContext';
import { router, Link } from "expo-router";
import Input from '../Input/Input';
import Mail from "../../assets/images/mail.svg";

const Login_section2 = ({ openModal, modalVisible, closeModal, openModal2 }) => {
  const { theme, darkMode } = useContext(ThemeContext);

  return (
    <View>
        <StatusBar 
        translucent
        backgroundColor="transparent"
        barStyle={darkMode ? "light-content" : "dark-content"} 
      />
      <TouchableOpacity onPress={openModal}>
        <Text style={styles.forget}>Forgot password</Text>
      </TouchableOpacity>
      <Button buttonText="Login" onPress={() => router.push('interest')} />
      <Log_method />
      <Text style={[styles.bottom_text, { color: theme.color }]}>
        Don’t have an account yet?<Link href='/create_account' style={styles.link}> Register</Link>
      </Text>

      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { backgroundColor: theme.background }]}>
            <View style={styles.modal_header}>
              <TouchableOpacity onPress={closeModal}>
                {darkMode ? <Dark_back /> : <Back />}
              </TouchableOpacity>
              <Text style={[styles.heading, { color: theme.color }]}>Forgot Password</Text>
            </View>
            <Text style={styles.head_text}>Enter your email address below and we'll help you reset your password.</Text>
            <View style={styles.box}>
              <Input label="Email Or Phone Number" Icon={Mail} />
              <Done style={styles.done} />
            </View>
            <Button buttonText="continue" onPress={openModal2} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Login_section2;

const styles = StyleSheet.create({
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
  forget: {
    color: '#FF6F61',
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Montserrat_500Medium',
    textTransform: 'capitalize',
    textAlign: 'right',
    marginBottom: 30,
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
    paddingBottom: 60,
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
  link: {
    color: '#FF6F61',
  },
  bottom_text: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Lato_400Regular',
    color: '#121212',
    textAlign: 'center',
    marginVertical: 25,
    paddingBottom: 50,
  },
  done: {
    position: 'absolute',
    bottom: 18,
    right: 10,
  },
  box: {
    marginVertical: 20,
  }
});
