import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import { ThemeProvider } from '../theme/ThemeContext';

const Root_layout = () => {
  return (
    <ThemeProvider>
      <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name='index' />
        <Stack.Screen name='(auth)' />
        <Stack.Screen name='(tabs)' />
        <Stack.Screen name='(screens)/news_details' />
        <Stack.Screen name='(screens)/search' />
        <Stack.Screen name='(screens)/author' />
      </Stack>
    </ThemeProvider>
  )
}

export default Root_layout;

const styles = StyleSheet.create({})
