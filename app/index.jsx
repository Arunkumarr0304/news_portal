import React, { useState, useRef, useEffect, useCallback, useContext } from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView, StatusBar, Animated, TouchableOpacity, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { pages } from "../components/Data/Data";
import { router } from "expo-router";
import Button from "../components/Button/Button";
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { Lato_400Regular, Lato_700Bold } from "@expo-google-fonts/lato";
import ThemeContext from "../theme/ThemeContext";
import Pagination from "../components/Pagination/Pagination";
import { Amarante_400Regular } from "@expo-google-fonts/amarante";
import { Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_700Bold } from "@expo-google-fonts/montserrat";



const { width } = Dimensions.get('window');

SplashScreen.preventAutoHideAsync();

export default function App() {
  const { theme,  darkMode } = useContext(ThemeContext);
  const navigation = useNavigation();
  const swiperRef = useRef(null);
  const totalPages = pages.length;
  const [activePageIndex, setActivePageIndex] = useState(0);

  const [fontsLoaded] = useFonts({
    Lato_400Regular,
    Amarante_400Regular,
    Montserrat_700Bold,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Lato_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  const headingOpacity = useRef(new Animated.Value(1)).current;
  const descriptionOpacity = useRef(new Animated.Value(1)).current;
  const paginationOpacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (fontsLoaded) {
      animateContent();
    }
  }, [activePageIndex, fontsLoaded]);

  const animateContent = () => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(headingOpacity, { toValue: 0, duration: 200, useNativeDriver: true }),
        Animated.timing(descriptionOpacity, { toValue: 0, duration: 200, useNativeDriver: true }),
      ]),
      Animated.parallel([
        Animated.timing(headingOpacity, { toValue: 1, duration: 200, useNativeDriver: true }),
        Animated.timing(descriptionOpacity, { toValue: 1, duration: 200, useNativeDriver: true }),
      ])
    ]).start();
  };

  const handleImageScroll = (event) => {
    const pageIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setActivePageIndex(pageIndex);
  };

  const handleNextPress = () => {
    const nextIndex = Math.min(activePageIndex + 1, totalPages - 1);
    swiperRef.current.scrollTo({ x: nextIndex * width, animated: true });
    setActivePageIndex(nextIndex);
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={[styles.safearea, {backgroundColor:theme.background}]} onLayout={onLayoutRootView}>
          <StatusBar 
        translucent
        backgroundColor="transparent"
        barStyle={"light-content"} 
      />
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        ref={swiperRef}
        onScroll={handleImageScroll}
        scrollEventThrottle={16}
        contentContainerStyle={{ width: width * totalPages }}
        style={{ flex: 1 }}
      >
        {pages.map((page, index) => (
          <View key={index} style={[styles.page, { width }]}>
            <View style={styles.imageContainer}>
              <Image source={page.image} alt="images" style={styles.image} />
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.onboard_content}>
      <Animated.View style={{ opacity: paginationOpacity }}>
          <Pagination activePageIndex={activePageIndex} totalPages={totalPages} />
        </Animated.View>
        <Animated.Text style={[[styles.heading, {color:theme.color}], { opacity: headingOpacity }]}>
          {pages[activePageIndex].heading}
        </Animated.Text>
        <Animated.Text style={[styles.description, { opacity: descriptionOpacity }]}>
          {pages[activePageIndex].text}
        </Animated.Text>
       
        <View style={styles.page_button_container}>
          {activePageIndex === totalPages - 1 ? (
            <View style={{  }}>
              <Button
                buttonText="Get started"
                backgroundColor="#009688"
                textColor='#FFFFFF'
                onPress={() => router.push('create_account')}
              />
            </View>
          ) : (
            <TouchableOpacity onPress={handleNextPress} style={styles.nextButton}>
             <Text style={styles.nextButtonText}>next</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  page: {
    flex: 1,
    alignItems: 'center',
    
  },
  imageContainer: {
    maxHeight: 492,
    maxWidth: '100%',
    width: '100%',
  
  },
  image: {
    height: 460,
    maxWidth: '100%',
  },
  onboard_content: {
    position: 'absolute',
    backgroundColor: 'transparent',
    bottom: 30,
    width: '100%',
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  heading: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 22,
    lineHeight: 32,
    color: '#000000',
    textAlign: 'center',
    paddingTop: 40,
  },
  description: {
    fontSize: 13,
    lineHeight: 23,
    color: '#757575',
    textAlign: 'center',
    fontFamily: 'Lato_400Regular',
    paddingTop: 10,
  },
  page_button_container: {
    paddingTop: 30,
    justifyContent: 'space-between',
  },
  nextButton: {
    backgroundColor: '#009688',
    paddingHorizontal: 20,
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 150,
  },
  nextButtonText: {
    textTransform: 'capitalize',
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 28,
  },
});

