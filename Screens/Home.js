import { StatusBar } from 'expo-status-bar';
import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image,Modal,TextInput } from 'react-native';
import cloud from '../Assets/cloud.png';
import calendar from '../Assets/calendar.png';
import Afternoon from '../Assets/Afternoon.jpg';
import Night from '../Assets/Night.jpg';
import Evening from '../Assets/Evening.jpg';
import bgimg from '../Assets/bgimg.png';
import Sun from '../Assets/Sun.png';
// import { TextInput } from 'react-native-web';




const aarHeading=[];
const aarContent=[];

// import ResponsiveImage from "react-native-responsive-image";
// import { Button } from 'react-native-web';
// import FitImage from 'react-native-fit-image';
// import bgimg from '.Assets/bgimg';

const Home = ({ navigation }) => {
 

const [show, setShow] = useState(false)
const [heading, setHeading] = useState()
// const [arrheading, setArrheading] = useState([])

const [content, setContent] = useState()
// const [arrcontent, setArrcontent] = useState([])


  const dn = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const mon = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const day = new Date();
  const d = dn[day.getDay()]
  const date = day.getDate();
  const month = mon[day.getMonth()];
  const date1 = date + 1;
  const date2 = date - 1;
  const hr = day.getHours();
  const min = day.getMinutes();

// console.log(heading);
// console.log(content);

const save=()=>{


  // setArrheading([...arrheading,heading])
  // setArrcontent([...arrcontent,content])
  aarHeading.push(heading.toString());
  aarContent.push(content.toString());

  // console.log(heading);
  // console.log(content);
  setHeading(" ")
  setContent(" ")
  console.log(aarHeading);
  console.log(aarContent);
}



  const route = useRoute();

  let Timing = {};
  if ( hr >= 20 ) {
   Timing= Night

  } if (hr >= 5 && hr <= 11) {
   Timing= bgimg

  } if (hr >= 12 && hr <= 16) {
    Timing=Afternoon

  } if (hr >= 17 && hr <= 19) {
   Timing= Evening
    console.log('Hellooo');
    console.log(Evening)

  }


 
  return (
    <View style={styles.Homecontainer}>

      <View style={styles.imgContainer}>

        <Image
          style={styles.img}
          source={Timing}

        // Timing || Timing1 ||  Timing2

        // initWidth="138"
        //   initHeight="138"
        //  resizeMode= {'contain'}
        // style={{

        //   resizeMode: 'cover',
        //   width: '100%',
        //   height: '100%',
        // }}
        />{console.log(Timing)}
        <Image
          style={styles.calendar}


          source={calendar} />
        <Text style={styles.menu}>☰</Text>
        <View style={styles.timing}>
          <Image
            style={styles.cloud}


            source={hr>=12 && hr<=17? Sun:cloud}/>
          <Text style={styles.day}>{d}</Text>
          <Text style={styles.tim}>{date} {month}</Text>

        </View>
        <View style={styles.datelist}>
          <TouchableOpacity style={{backgroundColor:hr>=12 && hr<=19?'#FFA812':'#82a1b0',
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
}}>
  <Text style={styles.date}>{date2}</Text></TouchableOpacity>
          <TouchableOpacity style={{
    backgroundColor:hr>=12 && hr<=19?'#FFA812':'#82a1b0',
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




  }}><Text style={styles.date}>{date}</Text></TouchableOpacity>
          <TouchableOpacity style={{
    backgroundColor:hr>=12 && hr<=19?'#FFA812':'#82a1b0',
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




  }}><Text style={styles.date}>{date1}</Text></TouchableOpacity></View>
        <View style={styles.line}></View>
        <View style={styles.tasks}>
          <View style={styles.row}>
            <View style={styles.tm}><Text>{hr}:{min}</Text></View>
            <View style={{
    flexDirection: 'row',
    margin: 15,

    // textAlign:'center',
    backgroundColor:hr>=12 && hr<=19?'#FF8C69' : '#B2DFDB',
    height: 45,
    width: 45,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.50,
    shadowRadius: 3.84,

    elevation: 10,
  }}><Text style={styles.singletas}>1</Text>
              <View style={styles.textcontainer}>
                <Text style={styles.ttext}>Watching movie!</Text>
                <Text style={styles.dtext}>need to play cricket to burn 100 calories!</Text>
              </View>
            </View>
          </View>
          {/* <View style={styles.row}>
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
          </View> */}
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
        <TouchableOpacity style={{
    backgroundColor:hr>=12 && hr<=19?'#FFA812':'#82a1b0',
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
  }} onPress={() => setShow(true)}>
          <Text style={styles.button}>+</Text>
        </TouchableOpacity>
        <Modal
          transparent={true}
          visible={show}>
            <View style={{alignItems:'center',justifyContent:'center',top:150}}>
          <View style={{height:50,backgroundColor:'white',width:'90%',height:'60%',borderRadius:30,justifyContent:'center',shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.90,
    shadowRadius: 3.84,

    elevation: 9,}}>
              <View style={{ flexDirection: 'row', position: 'absolute', left: 20, top: 5, }}>
                <TouchableOpacity onPress={() => {
                  setShow(false)
                }}><Text style={{ fontSize: 30, color: 'black', transform: [{ rotate: '180deg' }] }}>➔</Text></TouchableOpacity>
 <View style={styles.tfcontainer}>
                <View style={styles.fieldcontainer}>
                    <TextInput style={styles.tf} value={heading} onChangeText={(text)=>setHeading(text)} placeholder='Task Heading!!'/>
                    <TextInput style={styles.tf} value={content} onChangeText={(text)=>setContent(text)} placeholder='Content!!'></TextInput>
                </View>
                <TouchableOpacity style={styles.btn} onPress={()=>save()}><View style={{borderWidth:1,width:100,justifyContent:'center',alignItems:'center',position:'absolute',left:70}}><Text style={{fontSize:30}}>Add</Text></View></TouchableOpacity>
            </View>
              </View>
              </View>
              </View>
        </Modal>
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
  // btn: {
  //   backgroundColor:hr>=12 && hr<=17?'#FFA812':'#82a1b0',
  //   borderRadius: 40,
  //   height: 60,
  //   width: 60,
  //   shadowColor: "#000",
  //   shadowOffset: {
  //     width: 2,
  //     height: 2,
  //   },
  //   shadowOpacity: 0.90,
  //   shadowRadius: 3.84,

  //   elevation: 9,







  // },
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
  // dt: {
  //   backgroundColor:hr>=12 && hr<=17?'#DB2929':'#82a1b0',
  //   // textAlign: 'center',

  //   borderRadius: 25,

  //   padding: 10,
  //   margin: 10,
  //   shadowColor: "#000",
  //   shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   },
  //   shadowOpacity: 0.50,
  //   shadowRadius: 3.84,

  //   elevation: 9,




  // },
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
  tasks: {
    position: 'absolute',
    flexDirection: 'column',

    top: 262,
    left: 71,

  },
  // task: {
  //   flexDirection: 'row',
  //   margin: 15,

  //   // textAlign:'center',
  //   backgroundColor:hr>=12 && hr<=17?'#FF8C69' : '#B2DFDB',
  //   height: 45,
  //   width: 45,
  //   borderRadius: 25,
  //   shadowColor: "#000",
  //   shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   },
  //   shadowOpacity: 0.50,
  //   shadowRadius: 3.84,

  //   elevation: 10,
  // },
  singletas: {

    marginLeft: 13,
    textAlign: 'center',
    fontSize: 20,
    padding: 5,

  },
  ttext: {

    marginLeft: 30,
    marginTop: 10,
    fontSize: 15,
    width: '100%',
    fontWeight: 'bold',
  },
  calendar: {
    height: 30,
    width: 30,
    position: 'absolute',
    top: 35,
    right: 20,

  },
  cloud: {
    left:7,
    width: 60,
    height: 40,
  },
  row: {
    padding: 1,
    width: '100%',
    flexDirection: 'row',
    // marginRight:50,
  },
  tm: {
    marginTop: 24,
    marginLeft: -32,
    width: 33,
  },
  line: {
    borderWidth: 1,
    height: '500%',
    position: 'absolute',
    top: 254,
    left: 108,

  },
  dtext: {
    width: 150,
    left: 30,

  },
  textcontainer: {
    bottom: 12,
  },
  tfcontainer: {
    flexDirection: 'row',
    flexDirection:'column',
    width:'80%',
    top:50

},
tf: {
    padding: 15,
    fontSize: 20,

    backgroundColor: '#D1D1D1',
    width: '95%',
    borderRadius: 5,
    height: 50,
    margin: 5,
},fieldcontainer: {
  width:'100%',
          flexDirection: 'column',
      }
});
export default Home;