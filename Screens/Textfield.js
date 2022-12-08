// import { useNavigation } from '@react-navigation/native';
// import { StatusBar } from 'expo-status-bar';
// import React, { useState } from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';



// const Textfield = () => {
//     const [heading, setHeading] = useState('')
//     const [content, setContent] = useState('')

//     const navigation = useNavigation('');

//     const register = () => {
//           navigation.goBack({
//                 heading : heading,
//                 content : content,
//             })
            
//     }


//     return (
//         <View style={styles.addcontainer}>
//             <Text> {heading} </Text>
//             <Text> {content} </Text>

//             <View style={styles.tfcontainer}>
//                 <View style={styles.fieldcontainer}>
//                     <TextInput style={styles.tf} placeholder='Task Heading!!' onChange={e => setHeading(e.target.value)}></TextInput>
//                     <TextInput style={styles.tf} placeholder='Content!!' onChange={e => setContent(e.target.value)} ></TextInput>
//                 </View>
//                 <TouchableOpacity style={styles.btn} onPress={register}><Text style={styles.button}>Add</Text></TouchableOpacity>
//             </View>
//         </View>
//     )


// }
// const styles = StyleSheet.create({
//     addcontainer: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',

//     },
//     tfcontainer: {
//         flexDirection: 'row',

//     },
//     tf: {
//         padding: 15,
//         fontSize: 20,

//         backgroundColor: '#D1D1D1',
//         width: '90%',
//         borderRadius: 5,
//         height: 50,
//         margin: 5,
//     },
//     // tf1: {
//     //     padding: 10,
//     //     fontSize: 20,

//     //     backgroundColor: '#D1D1D1',
//     //     width: '100%',
//     //     borderRadius: 5,
//     //     height: 50,
//     // },
//     btn: {
//         backgroundColor: '#E6FBFF',
//         width: 60,
//         borderRadius: 15,

//     },
//     button: {
//         fontSize: 30,

//     },
//     fieldcontainer: {
//         flexDirection: 'column',
//     }





// })

// export default Textfield;