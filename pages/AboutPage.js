import React from 'react'
import {StyleSheet,View,Text,Image,TouchableOpacity} from 'react-native'

export default function AboutPage(){
  return (<View style = {styles.container}>
        
        <Text style = {styles.title}>HI! 스파르트코딩 앱개발반에 오신것을 환영합니다</Text>
        <View style={styles.textContainer}>
            <Image style={styles.cardImage} source={{uri:"https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2FaboutImage.png?alt=media&token=13e1c4f6-b802-4975-9773-e305fc7475c4."}}/>
            <Text style={styles.desc01}>많은 내용을 간결하게 담아내려 노력했습니다!</Text>
            <Text style={styles.desc02}>꼭 완주 하셔서 꼭 여러분 것으로 만들어가시길 바랍니다</Text>
            <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>여러분의 인스타계정</Text></TouchableOpacity>
        </View>
      </View>)
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#3F0099',
        alignItems:'center'
    },
    title:{
        color:'#fff',
        fontSize:30,
        fontWeight:'600',
        marginTop:100,
        marginLeft:30,
        marginRight:30,
        textAlign:'center'
    },
     textContainer: {
        backgroundColor:'#fff',
        width:300,
        height:500,
        marginTop:50,
        borderRadius:30
    },
    cardImage: {
        width:150,
        height:150,
        borderRadius:40,
        marginTop:80,
        marginLeft:75
    },
    desc01: {
        textAlign:'center',
        fontSize:20,
        fontWeight:'600',
        margin:20
    },
    desc02: {
        textAlign:'center',
        fontSize:15,
        fontWeight:'600',
        marginLeft:20,
        marginRight:20,
    },
    button: {
        width:150,
        height:60,
        backgroundColor:'#FFBB00',
        borderRadius:15,
        marginLeft:70,
        marginTop:30
    },
    buttonText:{
        color:'#fff',
        fontWeight:'600',
        paddingTop:20,
        paddingLeft:19

    }

})