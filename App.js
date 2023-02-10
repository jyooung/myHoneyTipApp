//1. 도구들을 import 한다.
import React from 'react';
import main from './assets/main.png';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

//2. 비어있는 함수 앱을 이곳에 둔다.!
export default function App() {
    console.disableYellowBox = true;
    //return 구문 밖에서는 슬래시 두개 방식으로 주석
    return (<ScrollView style={styles.container}>
        <Text style={styles.title}>나만의 꿀팁</Text>
        <Image style={styles.mainImg} source={main}/>
        <ScrollView style={styles.middleContainer} horizontal={true}>
            <TouchableOpacity style={styles.topMenu01}><Text style={styles.topMenuText}>생활</Text></TouchableOpacity>
            <TouchableOpacity style={styles.topMenu02}><Text style={styles.topMenuText}>재테크</Text></TouchableOpacity>
            <TouchableOpacity style={styles.topMenu03}><Text style={styles.topMenuText}>반려견</Text></TouchableOpacity>
            <TouchableOpacity style={styles.topMenu04}><Text style={styles.topMenuText}>꿀팁 찜</Text></TouchableOpacity>
        </ScrollView>
        {/* 카드 영역만 따로 두기 위해 veiw로 영역 잡아주기 */}
        <View style={styles.cardContainer}>
            <View style={styles.card}>
                <Image style={styles.cardImage} numberOfLines={1} ellipsizeMode="tail" source={{uri:"https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2Fpizza.png?alt=media&token=1a099927-d81"}}/>
                <Text style={styles.cardText}> 
                    <Text style={styles.cardTitle}>먹다 남은 피자를 촉촉하게!</Text>
                    <Text style={styles.cardDesc} numberOfLines={3}>
                            먹다 남은 피자는 수분이 날라가기 때문에 처음처럼 맛있게 먹을 수 없는데요. 이럴 경우 그릇에 물을 받아 전자레인지
                            안에서 1분 30초에서 2분 정도 함께 돌려주면 촉촉하게 먹을 수 있습니다. 물이 전자레인지 안에서 수증기를 일으키고,
                            피자에 촉촉함을 더해줍니다.
                        </Text>
                    <Text style={styles.cardDate}>2023.02.10</Text>
                </Text>
            </View>

        </View>
    </ScrollView>)
}

//3. 옷장!
const styles = StyleSheet.create({
    //가장 먼저 container라는 스타일을 만든다. 따로 flex를 지정하지는 않으며 배경색을 흰색으로 해준다. 
    container:{
        backgroundColor:"#fff"
    },
    title:{
        fontSize:20,
        fontWeight:"700",
        marginTop:50,
        marginLeft:20   
    },
    mainImg:{
        width:"90%",
        height:200, 
        borderRadius:20,
        marginTop: 20,
        alignSelf: "center" 
    },
    middleContainer:{
        //1. 영역을 눈으로 확인할 수 있도록 테두리 보이기
        //borderWidth:1, 
        marginTop:20,
        //좌우로 스크롤할 것-> marginRight는 맞출 필요 없음
        marginLeft:10,
        //정해져 있는 것은 아니지만 고유의 높이값을 정해주기
        height:60
    },
    topMenu01:{
        //고유의 영역 만들어주기 widht, height
        width:100,
        height:50,
        padding:15,
        backgroundColor:"#fdc453",
        borderRadius:15,
        margin:5
    },
    topMenu02:{
        //고유의 영역 만들어주기 widht, height
        width:100,
        height:50,
        padding:15,
        backgroundColor:"#fe8d6f",
        borderRadius:15,
        margin:5
    },
    topMenu03:{
        //고유의 영역 만들어주기 widht, height
        width:100,
        height:50,
        padding:15,
        backgroundColor:"#9adbc5",
        borderRadius:15,
        margin:5
    },
    topMenu04:{
        //고유의 영역 만들어주기 widht, height
        width:100,
        height:50,
        padding:15,
        backgroundColor:"#f886a8",
        borderRadius:15,
        margin:5
    },
    topMenuText:{
        textAlign:"center",
        color:"#fff",
        fontWeight:"700"
    },
    cardContainer:{
        //borderWidth:1,
        marginTop:15,
        marginLeft:10
    },
    card:{
        flex:1,
        flexDirection:"row",
        margin:10
    },
    //이미지의 경우 flex로 공간을 지정해줘야지 나타남
    cardImage: {
        flex:1,
        borderRadius:10,
        width:100,
        height:100
    },
    cardText:{
        flex:2,
        marginLeft:10
    },
    cardTitle:{
        fontSize:20,
        fontWeight:"700"
    },
    cardDesc:{
        fontSize:15
    },
    cardDate:{
        fontSize:10
     
    }
})
    