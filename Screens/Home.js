import { StatusBar } from 'expo-status-bar';
import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import cloud from '../Assets/cloud.png';
import calendar from '../Assets/calendar.png';


// import ResponsiveImage from "react-native-responsive-image";
// import { Button } from 'react-native-web';
// import FitImage from 'react-native-fit-image';
// import bgimg from '.Assets/bgimg';

const Home = ({navigation}) => {
  const dn = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const mon = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const day = new Date();
  const d = dn[day.getDay()]
  const date = day.getDate();
  const month = mon[day.getMonth()];
  const date1 = date + 1;
  const date2 = date - 1;
  const hr= day.getHours();
  const min= day.getMinutes();






  const route=useRoute();
  

  return (
    <View style={styles.Homecontainer}>

      <View style={styles.imgContainer}>

        <Image
          style={styles.img}


          source={{ uri: 'https://i.pinimg.com/564x/b6/8e/48/b68e483ce89fab44233346dba03a0a06.jpg', }}
        // initWidth="138"
        //   initHeight="138"
        //  resizeMode= {'contain'}
        // style={{

        //   resizeMode: 'cover',
        //   width: '100%',
        //   height: '100%',
        // }}
        />
         <Image
          style={styles.calendar}


          source={calendar}/>
        <Text style={styles.menu}>☰</Text>
        <View style={styles.timing}>
        <Image
          style={styles.cloud}


          source={cloud}/>
          <Text style={styles.day}>{d}</Text>
          <Text style={styles.tim}>{date} {month}</Text>

        </View>
        <View style={styles.datelist}>
          <TouchableOpacity style={styles.dt}><Text style={styles.date}>{date2}</Text></TouchableOpacity>
          <TouchableOpacity style={styles.dt}><Text style={styles.date}>{date}</Text></TouchableOpacity>
          <TouchableOpacity style={styles.dt}><Text style={styles.date}>{date1}</Text></TouchableOpacity></View>
          <View style={styles.line}></View>
          <View style={styles.tasks}>
            <View style={styles.row}>
            <View style={styles.tm}><Text>{hr}:{min}</Text></View>
        <View style={styles.task}><Text style={styles.singletas}>1</Text>
        <View style={styles.textcontainer}>
          <Text style={styles.ttext}>Watching movie!</Text> 
          <Text style={styles.dtext}>need to play cricket to burn 100 calories!</Text>
          </View> 
        </View>
        </View>
        <View style={styles.row}>
        <View style={styles.tm}><Text>{hr}:{min}</Text></View>
        <View style={styles.task}><Text style={styles.singletas}>2</Text>
        <View style={styles.textcontainer}>
          <Text style={styles.ttext}>Watching movie!</Text>
          <Text style={styles.dtext}>need to play cricket to burn 100 calories!</Text>
          </View>
        </View>
        </View>
        <View style={styles.row}>
        <View style={styles.tm}><Text>{hr}:{min}</Text></View>
        <View style={styles.task}><Text style={styles.singletas}>3</Text>
        <View style={styles.textcontainer}>
          <Text style={styles.ttext}>dusting!</Text>
          <Text style={styles.dtext}>need to play cricket to burn 100 calories!</Text>
          </View>
        </View>
        </View>
        <View style={styles.row}>
        <View style={styles.tm}><Text>{hr}:{min}</Text></View>
        <View style={styles.task}><Text style={styles.singletas}>4</Text>
        <View style={styles.textcontainer}>
          <Text style={styles.ttext}>completing office task!</Text>
          <Text style={styles.dtext}>need to play cricket to burn 100 calories!</Text>
          </View>
        </View>
        </View>
        {/* <View style={styles.row}>
        <View style={styles.tm}><Text>{hr}:{min}</Text></View>
        <View style={styles.task}><Text style={styles.singletas}>5</Text>
        <View style={styles.textcontainer}>
          <Text style={styles.ttext}>getting groceries!</Text>
          <Text style={styles.dtext}>need to play cricket to burn 100 calories!</Text>
          </View>
        </View>
        
        
        </View> */}
        </View>
      </View>






      <StatusBar style="auto" />

      
    <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn} onPress={()=>{
          
          navigation.navigate('Back')
          }}>
          <Text style={styles.button}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Homecontainer: {

    flex: 1,

    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    margin: 30,

  },
  imgContainer: {
    width: '123%',
    height: 230,

    position: 'absolute',
    top: -30,
    // maxWidth:'auto',
    aspectRatio: 1 * 1.4,

    // marginBottom:100,
  },
  img: {
    // flex: 1,
    // width: '100%',
    // height: '100%',
    resizeMode: 'stretch',

    // flex:1,
    height: '100%',
    width: '100%',


  },
  btnContainer: {
    position: 'absolute',
    bottom: 0,
    right: -10,



  },
  btn: {
    backgroundColor: '#82a1b0',
    borderRadius: 40,
    height: 60,
    width: 60,
    shadowColor: "#000",
shadowOffset: {
	width: 2,
	height: 2,
},
shadowOpacity: 0.90,
shadowRadius: 3.84,

elevation: 9,







  },
  button: {
    textAlign: 'center',
    fontSize: 40,

  },
  datelist: {
    flexDirection: 'row',
    position: 'absolute',
    top: 195,
    left: 4,


  },
  dt: {
    backgroundColor: '#82a1b0',
    // textAlign: 'center',

    borderRadius: 25,

    padding: 10,
    margin: 10,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.50,
shadowRadius: 3.84,

elevation: 9,
   



  },
  date: {
    fontSize: 20,
    textAlign: 'center',
    height: 30,
    width: 30,
},
  timing: {
    position: 'absolute',
    top: 150,
    right: 13,
    color: 'white',
  },
  tim: {
    color: 'white',
  },

  day: {
    color: 'white',
  },
  menu: {
    fontSize: 30,
    position: 'absolute',
    top: 30,
    left: 20,
  },
  tasks:{
    position:'absolute',
    flexDirection:'column',
    
top:262,
left:71,

 },
  task:{
    flexDirection:'row',
    margin:15,
   
    // textAlign:'center',
    backgroundColor:'#B2DFDB',
    height:45,
    width:45,
    borderRadius:25,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.50,
shadowRadius: 3.84,

elevation: 10,
  },
  singletas:{
    
    marginLeft:13,
    textAlign:'center',
     fontSize:20,
     padding:5,
    
  },
  ttext:{
    
    marginLeft:30,
    marginTop:10,
    fontSize:15,
    width:'100%',
    fontWeight:'bold',
  },
  calendar:{
    height:30,
    width:30,
    position:'absolute',
    top:35,
    right:20,

  },
  cloud:{
    width:60,
    height:40,
  },
  row:{
    padding:1,
    width:'100%',
    flexDirection:'row',
    // marginRight:50,
  },
  tm:{
    marginTop:24,
    marginLeft:-32,
    width:33,
  },
  line:{
borderWidth:1,
height:'500%',
position:'absolute',
top:254,
left:108,

  },
  dtext:{
    width:150,
    left:30,

  },
  textcontainer:{
    bottom:12,
  }
});
export default Home;
