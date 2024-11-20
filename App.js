import React from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet, SectionList, Button, Image, ScrollView} from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


const styles = StyleSheet.create({
    boxDori: {
      borderWidth: 1,
      justifyContent: 'space-around',
      marginHorizontal: 14,
      flexDirection: 'row',
      alignContent: 'center',
      alignItems: 'center',
      backgroundColor: 'lavender',
      padding:'auto',
  },
    nameStyle: {
      fontSize: 20,
      fontWeight: 'bold',
      fontStyle: 'italic',
      textAlign: 'center',
      width: 100
  },
    namePlate:{
      textAlign: 'center',
      alignItems:'center',
      backgroundColor: 'white',
      borderWidth: 1,
      width: 170
  },
    header: {
      fontSize: 23,
        marginTop: 20,
        marginHorizontal: 14,
        textAlign: "center",
        fontWeight: 'bold',
        borderWidth: 1,
        fontFamily: "HelveticaNeue-Bold"
  },
    toitle: {
        fontSize: 40,
        marginTop: 40,
        marginHorizontal: 20,
        textAlign: "center",
        fontWeight: 'bold',
        color: 'crimson'
    },
    head: {
        alignItems: 'center'
    }
});

const datasource = [
  {data:[
      {key: 'Kasumi Toyama',imgClr: '#FF5522', img: 'https://static.wikia.nocookie.net/bandori/images/0/08/Popidori_kasumi.png'},
      {key: 'Tae Hanazono', imgClr: '#0077DD', img: 'https://static.wikia.nocookie.net/bandori/images/8/82/Popidori_tae.png'},
      {key: 'Rimi Ushigome', imgClr: '#FF55BB', img: 'https://static.wikia.nocookie.net/bandori/images/d/d8/Popidori_rimi.png'},
      {key: 'Saaya Yamabuki', imgClr: '#FFCC11', img: 'https://static.wikia.nocookie.net/bandori/images/7/75/Saaya_s1-1.png'},
      {key: 'Arisa Ichigaya', imgClr: '#AA66DD', img: 'https://static.wikia.nocookie.net/bandori/images/0/0b/Arisa_(BanG_Dream!_S2).png'}
    ],
    title:"Poppin'Party", clr: "crimson", txtClr: "white"},
  {data:[
      {key: 'Yukina Minato', imgClr:'#881188', img: 'https://static.wikia.nocookie.net/bandori/images/c/ca/Yukina_(BanG_Dream!_S2).png'},
      {key: 'Sayo Hikawa', imgClr:'#00AABB', img: 'https://static.wikia.nocookie.net/bandori/images/6/69/Eor2_sayo.png'},
      {key: 'Rinko Shirokane', imgClr:'#BBBBBB', img: 'https://static.wikia.nocookie.net/bandori/images/4/49/Img_shirokane-rinko_3.png'},
      {key: 'Lisa Imai', imgClr:'#DD2200', img: 'https://static.wikia.nocookie.net/bandori/images/a/af/Eor2_lisa.png'},
      {key: 'Ako Udagawa', imgClr:'#DD0088', img: 'https://static.wikia.nocookie.net/bandori/images/2/26/Ako_s2-2.png'}
    ],
    title:"Roselia", clr: "indigo", txtClr: "white"},
    {data:[
            {key: 'Aya Maruyama', imgClr:'#FF88BB', img: 'https://static.wikia.nocookie.net/bandori/images/b/b9/Pasupare_bs3_aya.png'},
            {key: 'Hina Hikawa', imgClr:'#55DDEE', img: 'https://static.wikia.nocookie.net/bandori/images/6/6f/Img_hikawa-hina_3.png'},
            {key: 'Maya Yamato', imgClr:'#99DD88', img: 'https://static.wikia.nocookie.net/bandori/images/2/27/Maya_s3-1.png'},
            {key: 'Eve Wakamiya', imgClr:'#DDBBFF', img: 'https://static.wikia.nocookie.net/bandori/images/6/64/Img_wakamiya-eve_3.png'},
            {key: 'Chisato Shirasagi', imgClr:'#FFEEAA', img: 'https://static.wikia.nocookie.net/bandori/images/b/b3/Chisato_s2-2.png'}
        ],
        title:"Pastel*Palettes", clr: "indigo", txtClr: "white"},
  {data:[
      {key: 'LAYER (Rei Wakana)', imgClr:'#cc0000', img: 'https://static.wikia.nocookie.net/bandori/images/8/81/Img_layer.png'},
      {key: 'LOCK (Rokka Asahi)', imgClr:'#aaee22', img: 'https://static.wikia.nocookie.net/bandori/images/e/e1/Popidori_lock.png'},
      {key: 'MASKING (Masuki Satou)', imgClr:'#eebb44', img: 'https://static.wikia.nocookie.net/bandori/images/d/dc/Img_masking_2.png'},
      {key: 'PAREO (Reona Nyubara)', imgClr:'#ff99bb', img: 'https://static.wikia.nocookie.net/bandori/images/a/aa/PAREO_s3-1.png'},
      {key: 'CHU2 (Chiyu Tamade)', imgClr:'#00bbff', img: 'https://static.wikia.nocookie.net/bandori/images/6/64/Popidori_chuchu.png'}
    ],
    title:"RAISE A SUILEN", clr: "darkturquoise", txtClr: "black"},
  {data:[
      {key: 'Tomori Takamatsu', imgClr:'#77BBDD', img: 'https://static.wikia.nocookie.net/bandori/images/9/94/Tomori_Mayoi_Neko.png'},
      {key: 'Raana Kaname', imgClr:'#77DD77', img: 'https://static.wikia.nocookie.net/bandori/images/9/90/Rana_GBP.png'},
      {key: 'Taki Shiina', imgClr:'#7777AA', img: 'https://static.wikia.nocookie.net/bandori/images/6/6e/Taki_GBP.png'},
      {key: 'Soyo Nagasaki', imgClr:'#FFDD88', img: 'https://static.wikia.nocookie.net/bandori/images/8/81/Soyo_GBP.png'},
      {key: 'Anon Chihaya', imgClr:'#FF8899', img: 'https://static.wikia.nocookie.net/bandori/images/9/98/Anon_GBP.png'}
    ],
    title:"MyGO!!!!!", clr: "dodgerblue", txtClr: "white"}
];

const renderItem = ({item=datasource}) => {
  return (
      <TouchableOpacity style={[styles.boxDori]}>
        <Image source={{uri: item.img}} style={[{width: 140, height: 290, margin: 5}]}/>
        <View style={[styles.namePlate, {backgroundColor: item.imgClr}]}>
          <Text style={[styles.nameStyle,{color:'ghostwhite'}]}>{item.key}</Text>
        </View>
      </TouchableOpacity>
  );
};

const App = () => {
  return (
      <ScrollView>
          <View>
              <Text style={styles.toitle}>THE BEST OF</Text>
              <Image source={require("./img/bandorilogo.png")} style={[styles.head,{width: 320, height:65, margin:50}]}/>
          </View>
          <SectionList sections={datasource} renderItem={renderItem}
                       renderSectionHeader={({section:{title, clr, icn, txtClr}})=>(
                           <Text style={[styles.header, {backgroundColor: clr, color: txtClr}]}>{title}</Text>
                       )}/>
      </ScrollView>
  );
};

export default App;
