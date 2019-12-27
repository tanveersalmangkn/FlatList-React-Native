import React from 'react';
import {FlatList} from 'react-native'
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

const flatList = () => {
    const data=[{
        name:'Ali',
        image:require('../../Assests/Images/image_one.png'),
        price:'349.38'
    },
    {
        name:'Tanveer',
        image:require('../../Assests/Images/image_one.png'),
        price:'4,439.98'
    },
    {
        name:'Nouman',
        image: require('../../Assests/Images/image_one.png'),
        price:'349.38'
    },{
        name:'Mouzafar',
        image:require('../../Assests/Images/image_one.png'),
        price:'5,349.38'
    },{
        name:'Naveed',
        image:require('../../Assests/Images/image_one.png'),
        price:'439.98'
    },
    ]
    return(
<FlatList
data={data}
renderItem={({item})=>{
return(
    <List style = {{backgroundColor:'white', marginVertical:5, marginHorizontal:15}}>
    <ListItem thumbnail>
      <Left>
        <Thumbnail square source={item.image}/>
      </Left>
      <Body>
        <Text>Sankhadeep</Text>
        <Text note >{item.name}</Text>
      </Body>
      <Right>
          <Text>$ {item.price}</Text>
      </Right>
    </ListItem>
  </List>
)
}}
          />
    )
}


export default flatList;