import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import ThemeContext from '../../theme/ThemeContext';

const News_details_section2 = () => {
  const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <Text style={styles.news}>The recent elections have led to a significant political shakeup, with surprising results that have reshaped the landscape of the government. As new leaders take office and policies shift, the implications of these changes are being felt across the nation.</Text>
      <View style={styles.news_box}>
        <Text style={styles.heading}>Election Results Overview </Text>
        <Text style={styles.news}> In one of the most closely watched elections in recent history, several key positions have changed hands. The presidential race concluded with a narrow victory for the opposition candidate, marking a shift from the incumbent party's policies. In Congress, a number of seats have been won by newcomers, leading to a more diverse and potentially more contentious legislative environment.</Text>
      </View>
      <View style={styles.news_box}>
        <Text style={styles.heading}>Key Policy Changes </Text>
        <Text style={styles.news}>With the new administration in place, a number of policy changes are already on the horizon. Among the top priorities are healthcare reform, climate change action, and economic revitalization. The new president has pledged to introduce comprehensive legislation aimed at expanding access to healthcare, reducing carbon emissions, and creating jobs through infrastructure projects.</Text>
      </View>
      <View style={styles.news_box}>
        <Text style={styles.heading}>Impact on Domestic and Foreign Policy </Text>
        <Text style={styles.news}>The election results are expected to have significant impacts both domestically and internationally. Domestically, the shift in power is likely to bring about changes in social policies, education, and immigration. On the international stage, the new administration has signaled a move towards re-engagement with traditional allies and a stronger stance on human rights.</Text>
      </View>
    </View>
  )
}

export default News_details_section2;

const styles = StyleSheet.create({
    container: {
        marginVertical: 24,
        paddingBottom: 20,
        gap: 16,
    },
    heading: {
        fontSize: 16,
        lineHeight: 30,
        fontFamily: 'Lato_700Bold',
        color: '#121212',
        
    },
    news: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Lato_400Regular', 
        color: '#757575',
    }
})