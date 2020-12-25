import React from 'react'
import { Text, View, Dimensions} from 'react-native';

const HorizontalCard = ({item, index}) => {
    return(
        <View style={{
        backgroundColor: "#d1d1d1",
        borderRadius: 30,
        flex: 1,
        marginTop: 30,
        marginHorizontal: 30,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center'
        }}>
        <Text style={{fontSize: 30}}>{item.title}</Text>
        <Text>{item.text}</Text>
    </View>
    )
    
}

export default HorizontalCard;