import React from 'react';
import { SafeAreaView} from 'react-native';


import HorizontalCarousel from '../components/HorizontalCarousel';

const MainScreen = ({ navigation }) => {
    return(
        <SafeAreaView style={{flex:1, backgroundColor: "#FFFFFF"}}>
            <HorizontalCarousel {...navigation}/>
        </SafeAreaView>
    );
}


export default MainScreen;