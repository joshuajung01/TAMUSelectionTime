import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';

const SettingScreen = () => (
    <View style={Styles._mainContainer}>
        <Text>Setting</Text>
    </View>
)

const Styles = StyleSheet.create({
    _mainContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default SettingScreen;