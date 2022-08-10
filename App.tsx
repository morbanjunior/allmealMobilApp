
import RootDrawer from './src/navigators/RootDrawer'
import AppLoading from "expo-app-loading"
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { ToastProvider } from 'react-native-toast-notifications'
import React, { useState } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';


export default function App() {
  
  return (
    <ToastProvider>
      <Provider store={store}>
        <RootDrawer/>
      </Provider>
    </ToastProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});