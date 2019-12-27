import React from 'react';
import {View,Text, Button} from 'react-native';
import FlatList from '../../Components/Flatlist';
import Btn from '../../Components/Button';
import style from './style';
// import {SearchBar} from 'react-native-elements'
import { Container, Header, Item, Input, Icon } from 'native-base';
import SearchBar from '../../Components/SearchBar';


const TestTask = props => {
    console.log(props)
return(
<View>
    <View style={style.btnContainer}>
       <Btn name ="forward"/>

    </View>
    <View style={{ backgroundColor: '#fff', marginHorizontal: 10}}>
        <SearchBar />
        
    </View>
    <View style={{flexDirection:'row'}}>
        <Text style={{flex: 4,marginHorizontal:20}}>7 items</Text>
        <Text style={{flex:1,}}>#0134234</Text>
    </View>
    <View>
        <FlatList/>
    </View>
    <View style={{ flexDirection:'row', justifyContent:'flex-end' , marginHorizontal:15}}>
       <View style={{flexDirection: 'column'}}>
       <View style={{ flexDirection:'row', }}>
            <Text>Discount: </Text><Text>10%(-$25.99)</Text>
       </View>
       <View style={{ flexDirection:'row', }}>
            <Text>Total: </Text><Text>$ 1,300.00</Text>
       </View></View>
    </View>
    
    <View style={{flexDirection:'row', backgroundColor: '#111'}}>
        <View style={{flexDirection:'column'}}>
            <Button
            title= "click"/>
            <Button
            title= "click"/>

        </View>
        <View>
        <Button
        title= "click"/>
        </View>
    </View>
</View>
)
}
export default TestTask;