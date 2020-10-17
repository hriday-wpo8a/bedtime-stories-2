import React from 'react';
import { StyleSheet, Text, View,Image,TextInput} from 'react-native';

render (){
    return()
    <View>

<TextInput
                style = {styles.loginBox}
                placeholder="type your story here"
                
        
                />
        </View>
}
const styles = StyleSheet.create({
    storyBox:{
        width:340,
        height:30,
        borderWidth:1.5,
        fontSize:18,
        margin:10,
        paddingLeft:10
    }
}) 




export default class readScreen extends React.Component{
    
}