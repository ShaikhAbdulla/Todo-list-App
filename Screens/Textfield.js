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