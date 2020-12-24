import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';

const HomeScreen = () => (
    <View style={Styles._mainContainer}>
        <Text>Home</Text>
    </View>
)

const Styles = StyleSheet.create({
    _mainContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default HomeScreen;