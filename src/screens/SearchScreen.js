import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';

const SearchScreen = () => (
    <View style={Styles._mainContainer}>
        <Text>Search</Text>
    </View>
)

const Styles = StyleSheet.create({
    _mainContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default SearchScreen;