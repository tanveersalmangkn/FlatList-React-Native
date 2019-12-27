import React from 'react';
import { View } from 'react-native';
import { Container, Header, Item, Input, Icon, Button } from 'native-base';

const SearchBar = props => {
    return(
        <Item style={{height: 70}}>
            <Icon 
                style={{padding: 15, color: '#dede', flex: 4}}
                name="ios-search" />
            <Input placeholder="" />
            <View style={{backgroundColor: '#111', flex: 1, height: '100%' , justifyContent: 'center', alignItems : 'center'}}>
            <Icon
                style={{
                    color: '#fff'}}
            name="barcode" />
            </View>
        </Item>
    )
}

export default SearchBar;
