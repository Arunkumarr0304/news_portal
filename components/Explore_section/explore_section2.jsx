import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import React from 'react';
import { trending_data } from '../Data/Data';
import Timer from "../../assets/images/timer.svg";
import Command from "../../assets/images/message.svg";

const Explore_section2 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.head_row}>
        <Text style={styles.heading}>Trending Topic</Text>
        <Text style={styles.see}>See All</Text>
      </View>
        <ScrollView horizontal={true} style={styles.trending_container}>
            {
                trending_data.map((d) => (
                    <TouchableOpacity style={styles.stack} key={d.id}>
                        <Image source={d.image} alt='image' style={styles.image} />
                        <View style={styles.stack_content}>
                        <Text style={styles.text}>{d.text}</Text>
                        <View style={styles.bottom_row}>
                    <View style={styles.bottom_left}>
                        <Image style={styles.profile} source={d.profile} alt='profile' />
                        <Text style={styles.name}>{d.name}</Text>
                    </View>
                    <View style={styles.bottom_right}>
                        <View style={styles.timer}>
                            <Timer />
                            <Text style={styles.bottom_text}>{d.timing}</Text>
                        </View>
                        <View style={styles.timer}>
                            <Command />
                            <Text style={styles.bottom_text}>{d.comment}</Text>
                        </View>
                    </View>
                </View>
                        </View>
                    </TouchableOpacity>
                ))
            }
        </ScrollView>
    </View>
  )
}

export default Explore_section2;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 24,
    },
    head_row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
      },
      heading: {
        fontSize: 18,
        lineHeight: 28,
        fontFamily: 'Montserrat_700Bold',
        color: '#121212',
        textTransform: 'capitalize',
      },
      see: {
        fontSize: 16,
        lineHeight: 26,
        fontFamily: 'Lato_400Regular',
        textTransform: 'capitalize',
        color: '#009688',
      },
      stack: {
        marginRight: 16,
      },
      image: {
        width: 270,
        height: 270,
        borderRadius: 10,
        position: 'relative',
      },
      stack_content: {
        position: 'absolute',
        padding: 12,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        bottom: 15,
        left: 15,
        minWidth: 240,
        maxWidth: 240,
      },
      text: {
        fontSize: 16,
        lineHeight: 26,
        fontFamily: 'Montserrat_700Bold',
        color: '#000000',
        maxWidth: 265,
      },
      bottom_row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 24,
      },
      bottom_left: {
        flexDirection: 'row',
        alignItems:'center',
        gap: 10,
      },
      profile: {
        width: 30,
        height: 30,
      },
      name: {
        fontSize: 12,
        lineHeight: 22,
        fontFamily: 'Lato_400Regular',
        color: '#121212',
        textTransform: 'capitalize',
      },
      bottom_right: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
      },
      timer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
      },
      bottom_text: {
        fontSize: 12,
        lineHeight: 22,
        fontFamily: 'Lato_400Regular',
        color: '#757575',
      }
})