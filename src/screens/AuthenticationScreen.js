import React from 'react';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, Dimensions } from 'react-native';

import HorizontalCarousel from '../components/HorizontalCarousel'

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('screen');

const AuthenticationScreen = () => (
    <SafeAreaView style={{flex:1, backgroundColor: "#FFFFFF"}}>
        <HorizontalCarousel/>
    </SafeAreaView>
    
)

export default AuthenticationScreen;