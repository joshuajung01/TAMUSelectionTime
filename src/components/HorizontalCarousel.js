import * as React from 'react';
import { Text, View, Dimensions} from 'react-native';

import Carousel, { Pagination } from 'react-native-snap-carousel';
import SignUpButton from '../components/SignButton';
import HorizontalCard from '../components/HorizontalCard';

const { width, height } = Dimensions.get('window');
const iconActiveColor = "#500000"
const iconInactiveColor = "#3e3e3e"
const backgroundActiveColor = "#eaeaea"
const backgroundInactiveColor = "#FFFFFF"
const labelColor = "#500000"

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
            { title:"Item 1", text: "Text 1", },
            { title:"Item 2", text: "Text 2", },
            { title:"Item 3", text: "Text 3", },
            { title:"Item 4", text: "Text 4", },
            { title:"Item 5", text: "Text 5", },
        ]
      }
    }


    get pagination () {
        const { entries, activeIndex } = this.state;
        return (
            <Pagination
                dotsLength={this.state.carouselItems.length}
                activeDotIndex={activeIndex}
                containerStyle={{ backgroundColor: backgroundInactiveColor, paddingVertical: 10}}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 4,
                    backgroundColor: iconActiveColor
                }}
                inactiveDotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 4,
                    backgroundColor: iconInactiveColor
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        );
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection:'column', justifyContent: 'center', }}>
                <View style={{ flex: 6, flexDirection:'column', justifyContent: 'center', alignContent: 'center'}}>
                    <Carousel
                        layout={"stack"}
                        ref={ref => this.carousel = ref}
                        data={this.state.carouselItems}
                        sliderWidth={width}
                        sliderHeight={height}
                        itemWidth={width}
                        itemHeight={height}
                        renderItem={HorizontalCard}
                        onSnapToItem = { index => this.setState({activeIndex:index}) } />
                        { this.pagination }
                </View>
                <View style={{flex:1, justifyContent: 'center',}}>
                    <View style={{flex:1, justifyContent: 'center',}}>
                        <SignUpButton title="Sign Up" buttonStyle={1}/>
                    </View>
                    <View style={{flex:1, justifyContent: 'center',}}>
                        <SignUpButton title="Sign In" buttonStyle={2}/>
                    </View>
                </View>
                
            </View>
            
        );
    }
}