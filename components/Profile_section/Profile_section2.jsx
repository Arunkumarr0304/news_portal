import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Switch, Modal } from 'react-native';
import React, { useContext, useState}  from 'react';
import ThemeContext from '../../theme/ThemeContext';
import Profiles from "../../assets/images/profile_image.png";
import { profile_data } from '../../components/Data/Data';
import Drop_arrow from "../../assets/images/drop_arrow.svg";
import { Lato_400Regular } from '@expo-google-fonts/lato';
import { Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_700Bold } from "@expo-google-fonts/montserrat";
import Profile_section3 from './Profile_section3';

const Profile_section2 = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [languageModalVisible, setLanguageModalVisible] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('English');
    const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
   
      const languages = ['English', 'Spanish', 'French'];
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.image_box}>
          <Image source={Profiles} alt='image' style={styles.image} />
        </View>
        <View style={styles.details_row}>
          <View style={styles.profile_details}>
            <Text style={[styles.name, { color: theme.color }]}>Minato Namikaza</Text>
            <Text style={styles.email}>minatonami@gmail.com</Text>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.edit}>edit</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.profile_data_container}>
          {profile_data.map((d) => (
            <View key={d.id}>
              {d.name === 'Language' ? (
                <TouchableOpacity
                  style={styles.row}
                  onPress={() => setLanguageModalVisible(true)}
                >
                  <View style={styles.row_left}>
                    {darkMode ? d.active_icon : d.icon}
                    <Text style={[styles.row_text, { color: theme.text }]}>{d.name}</Text>
                  </View>
                  <Text style={[styles.row_text, { color: theme.text }]}>{selectedLanguage}</Text>
                  <Drop_arrow />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.row}
                  onPress={() => {
                    if (d.name === 'Dark Mode') toggleTheme();
                  }}
                >
                  <View style={styles.row_left}>
                    {darkMode ? d.active_icon : d.icon}
                    <Text style={[styles.row_text, { color: theme.text }]}>{d.name}</Text>
                  </View>
                  {d.name === 'Dark Mode' ? (
                    <Switch
                      trackColor={{ false: "#767577", true: "#009688" }}
                      thumbColor={darkMode ? "#f4f3f4" : "#f4f3f4"}
                      onValueChange={toggleTheme}
                      value={darkMode}
                      style={styles.switch}
                    />
                  ) : (
                    <Drop_arrow />
                  )}
                </TouchableOpacity>
              )}
            </View>
          ))}
        </View>
        <Profile_section3 />
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={languageModalVisible}
        onRequestClose={() => setLanguageModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={[styles.modalView, { backgroundColor: theme.cardbg2 }]}>
            {languages.map((language) => (
              <TouchableOpacity
                key={language}
                style={styles.languageOption}
                onPress={() => {
                  setSelectedLanguage(language);
                  setLanguageModalVisible(false);
                }}
              >
                <Text style={[styles.languageText]}>{language}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    </View>
    
  )
}

export default Profile_section2;

const styles = StyleSheet.create({
    image_box: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 30,
      },
      image: {
        width: 100,
        height: 100,
      },
      details_row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 30,
        marginBottom: 24,
      },
      profile_details: {
        gap: 3,
      },
      name: {
        fontSize: 16,
        lineHeight: 19,
        fontFamily: 'Montserrat_700Bold',
        color: '#121212',
        textTransform: 'capitalize',
      },
      email: {
        fontSize: 13,
        lineHeight: 20,
        fontFamily: 'Lato_400Regular',
        color: '#757575',
      },
      button: {
        backgroundColor: '#009688',
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
      },
      edit: {
        fontSize: 12,
        lineHeight: 19,
        fontFamily: 'Montserrat_600SemiBold',
        color: '#ffffff',
        textTransform: 'capitalize',
      },
      profile_data_container: {
        gap: 15,
        marginVertical: 24,
      },
      row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 8,
        paddingHorizontal: 10,
      },
      row_left: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
      },
      row_text: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Lato_400Regular',
      },
      switch: {
        width: 50,
      },
      dropdownContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 10,
      },
   
      modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalView: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      modalText: {
        fontSize: 18,
        marginBottom: 15,
        textAlign: 'center',
      },
      modalButtons: {
        flexDirection: 'row',
        gap: 10,
      },
      buttonCancel: {
        backgroundColor: '#757575',
      },
      languageOption: {
        paddingVertical: 10,
        paddingHorizontal: 20,
      },
      languageText: {
        fontSize: 18,
        color: '#000000',
      },
})