import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Tabs } from 'expo-router';
import React, { useContext } from 'react';
import Home from "../../assets/images/home.svg";
import Explore from "../../assets/images/explore.svg";
import Favour from '../../assets/images/favourite.svg';
import Profile from "../../assets/images/profile.svg";
import Active_Home from "../../assets/images/active_home.svg";
import Active_Explore from "../../assets/images/active_explore.svg";
import Active_Favour from "../../assets/images/active_favourite.svg";
import Active_Profile from "../../assets/images/active_profile.svg";
import ThemeContext from '../../theme/ThemeContext';
import { Montserrat_500Medium, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

const TabBarButton = ({ children, onPress, accessibilityState, title }) => {
  const { theme, darkMode } = useContext(ThemeContext);
  const isSelected = accessibilityState.selected;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.tabButton,
        isSelected ? styles.activeTabButton : null,
      ]}
    >
      {children}
      <Text style={[
        styles.tabTitle,
        isSelected ? [styles.activeTabTitle, { color: '#009688' }] : null,
      ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const TabsLayout = () => {
  const { theme, darkMode } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Tabs
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          tabBarButton: (props) => (
            <TabBarButton {...props} title={route.name} />
          ),
          tabBarStyle: [styles.tabBar, { backgroundColor: theme.cardbg }],
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            let IconComponent;
            switch (route.name) {
              case 'home':
                IconComponent = focused ? Active_Home : Home;
                break;
              case 'explore':
                IconComponent = focused ? Active_Explore : Explore;
                break;
              case 'favourite':
                IconComponent = focused ? Active_Favour : Favour;
                break;
              case 'profile':
                IconComponent = focused ? Active_Profile : Profile;
                break;
              default:
                IconComponent = null;
                break;
            }
            return IconComponent ? <IconComponent /> : null;
          },
        })}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            title: 'Explore',
          }}
        />
        <Tabs.Screen
          name="favourite"
          options={{
            title: 'Favourite',
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
          }}
        />
      </Tabs>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  tabBar: {
    width: '100%',
    maxHeight: 85,
    height: '100%',
    borderTopWidth: 0,
    elevation: 0,
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    paddingTop: 10,
    paddingHorizontal: 15,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 7,
    paddingTop: 10, 
  },
  tabTitle: {
    fontSize: 12,
    fontFamily: 'Montserrat_500Medium',
    color: '#757575',
    textTransform: 'capitalize',
    paddingTop: 10, 
    paddingBottom: 15,
  },
  activeTabTitle: {
    color: '#009688',
    fontFamily: 'Montserrat_700Bold',
  },
  activeTabButton: {},
});

export default TabsLayout;
