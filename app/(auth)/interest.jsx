import { StyleSheet, Text, View, TouchableOpacity, Image, StatusBar } from 'react-native';
import React, { useContext, useState } from 'react';
import { Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { Lato_400Regular } from '@expo-google-fonts/lato';
import { Interest_data } from '../../components/Data/Data';
import ThemeContext from '../../theme/ThemeContext';
import Selected from "../../assets/images/selected.svg"; 
import Button from '../../components/Button/Button';
import { router, Link } from "expo-router";

const Interest = () => {
  const { theme, darkMode } = useContext(ThemeContext);
  const [activestack, setActivestack] = useState([]);

  const select = (id) => {
    setActivestack(prevState => 
      prevState.includes(id) ? prevState.filter(item => item !== id) : [...prevState, id]
    );
  };
  const home = () => {
    router.push('home');
  };
  return (
    <View style={styles.container}>
      <StatusBar 
        translucent
        backgroundColor="transparent"
        barStyle={darkMode ? "light-content" : "dark-content"} 
      />
      <Text style={styles.heading}>What’s Interest you?</Text>
      <Text style={styles.head_text}>Follow Topic to influence the stories you see</Text>
      <View style={styles.stack_container}>
        {
          Interest_data.map((d) => (
            <TouchableOpacity 
              style={[styles.stack, activestack.includes(d.id) && styles.activestack]} 
              onPress={() => select(d.id)} 
              key={d.id}
            >
              <Image source={d.image} style={styles.image} />
              <Text style={styles.stack_text}>{d.text}</Text>
              {activestack.includes(d.id) && (
                <Selected style={styles.selectedImage} /> 
              )}
            </TouchableOpacity>
          ))
        }
      </View>
      <Button buttonText="Continue" onPress={home} />
    </View>
  );
}

export default Interest;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 26,
    lineHeight: 36,
    fontFamily: 'Montserrat_700Bold',
    color: '#121212',
  },
  head_text: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Lato_400Regular',
    color: '#757575',
    marginVertical: 10,
  },
  stack_container: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 16,
    paddingBottom: 100,
  },
  stack: {
    alignItems: 'center',
    position: 'relative',
  },
  image: {
    width: 95,
    height: 110,
  },
  stack_text: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Montserrat_700Bold',
    color: '#121212',
    textTransform: 'capitalize',
  },
  activestack: {
    position: 'relative',
    zIndex: 10,
  },
  selectedImage: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 100,
  }
});
