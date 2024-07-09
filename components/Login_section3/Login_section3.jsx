import { StyleSheet, View, TouchableOpacity, Modal, Text } from 'react-native';
import React, { useContext, useState } from 'react';
import Back from "../../assets/images/Back.svg";
import Dark_back from "../../assets/images/White_back.svg";
import Button from '../Button/Button';
import ThemeContext from '../../theme/ThemeContext';
import Password from '../Password/Password';

const Login_section3 = ({ modalVisible2, closeModal2, location }) => {
  const { theme, darkMode } = useContext(ThemeContext);
  const [Passwordvisible2, setPasswordvisible2] = useState(false);
  const [Passwordvisible3, setPasswordvisible3] = useState(false);

  return (
    <View>
      <Modal
        transparent={true}
        visible={modalVisible2}
        onRequestClose={closeModal2}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { backgroundColor: theme.background }]}>
            <View style={styles.modal_header}>
              <TouchableOpacity onPress={closeModal2}>
                {darkMode ? <Dark_back /> : <Back />}
              </TouchableOpacity>
              <Text style={[styles.heading, { color: theme.color }]}>Create New Password</Text>
            </View>
            <Text style={styles.head_text}>Ensure your account's security with a strong, unique password.</Text>
            <View style={styles.inputContainer}>
              <Password label="Password" passwordVisible={Passwordvisible2} setPasswordVisible={setPasswordvisible2} />
              <Password label="Confirm Password" passwordVisible={Passwordvisible3} setPasswordVisible={setPasswordvisible3} />
            </View>
            <Button buttonText="continue" onPress={location} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Login_section3;

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
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
    gap: 12,
    marginBottom: 25,
  },
  modal_heading: {
    fontSize: 20,
    lineHeight: 30,
    fontFamily: 'Montserrat_500Medium',
    color: '#121212',
  },
  inputContainer: {
    gap: 10,
    marginVertical: 20,
  }
});
