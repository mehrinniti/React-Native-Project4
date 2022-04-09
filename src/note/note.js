
//      Sakib       //
//      Login page design       //

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import { TouchableOpacity, TextInput } from 'react-native-web';

// export default function App() {
//     return (
//         <View style={styles.container}>
//             <h1 style={{ color: '#fff', fontSize: 40, marginBottom: 60 }}>LOGIN</h1>
//             <View>
//                 <View>

//                     <TextInput
//                         placeholder="Email"
//                         placeholderTextColor={'lightgray'}
//                         placeholderTextAlign={"center"}
//                         style={{ width: 300, height: 35, fontSize: 18, padding: 10, borderBottom: '1px solid lightgray', marginTop: -10, marginBottom: 25, outline: "none", textAlign: 'center' }}
//                     />
//                 </View>
//                 <View>
//                     <TextInput
//                         placeholder="Password"
//                         placeholderTextColor={'lightgray'}
//                         placeholderTextAlign={"center"}
//                         style={{ width: 300, height: 35, fontSize: 18, padding: 10, borderBottom: '1px solid lightgray', marginTop: -10, outline: "none", textAlign: 'center' }}
//                     />
//                 </View>
//                 <TouchableOpacity
//                     style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#2196f3', borderRadius: 50, paddingVertical: 7, marginTop: 35 }}

//                 >
//                     <View style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>

//                         <Text style={{ color: '#fff', fontSize: 21 }}>
//                             Secure Login
//                         </Text>

//                     </View>

//                 </TouchableOpacity>
//                 <Text style={{ color: '#fff', fontSize: 18, marginTop: 35, textAlign: 'center' }}>
//                     Don't have an account ?
//                     <TouchableOpacity style={{ color: 'rgb(124, 124, 234)' }}>Sign up Now !</TouchableOpacity>
//                 </Text>
//                 <Text style={{ color: '#fff', fontSize: 17, marginTop: 20, marginBottom: 25, textAlign: 'center' }}>
//                     -------------------- OR --------------------
//                 </Text>
//                 <Text style={{ color: '#fff', fontSize: 17, textAlign: 'center' }}>Sign in with Social Networks</Text>
//                 <Text style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 30 }}>
//                     <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#4d76ce', borderRadius: 50, paddingVertical: 7, paddingLeft: 30, paddingRight: 30, marginTop: 40 }}>
//                         <View style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>

//                             <Text style={{ color: '#fff', fontSize: 18 }}>
//                                 Facebook
//                             </Text>

//                         </View>

//                     </TouchableOpacity>
//                     <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgb(230, 63, 63)', borderRadius: 50, paddingVertical: 7, paddingLeft: 30, paddingRight: 30, marginTop: 40 }}>

//                         <View style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>

//                             <Text style={{ color: '#fff', fontSize: 18 }}>
//                                 Google
//                             </Text>

//                         </View>
//                     </TouchableOpacity>
//                 </Text>
//             </View>
//             <StatusBar style="auto" />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundImage: 'linear-gradient(royalblue, blueviolet)',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });



















//  Final
//  Q1


//      Niti        //
//      Login page design        //

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import { TouchableOpacity } from 'react-native-web';
// import InputFields from './src/login/InputFields';
// import LoginBtn from './src/login/LoginBtn';
// import SocialBtn from './src/login/SocialBtn';

// export default function App() {
//     return (
//         <View style={styles.container}>
//             <h1 style={{
//                 color: '#fff',
//                 fontFamily: "Segoe UI",
//                 letterSpacing: 2,
//                 fontSize: 45,
//                 fontWeight: 400,
//                 marginBottom: 70
//             }}>LOGIN</h1>
//             <View>
//                 <InputFields></InputFields>
//                 <LoginBtn></LoginBtn>
//                 <Text style={{
//                     color: '#fff',
//                     fontSize: 17,
//                     marginTop: 40,
//                     textAlign: 'center'
//                 }}>
//                     Don't have an account ?
//                     <TouchableOpacity style={{
//                         color: 'rgb(33, 150, 243)'
//                     }}>
//                         Sign up Now !
//                     </TouchableOpacity>
//                 </Text>
//                 <Text style={{
//                     color: '#fff',
//                     fontSize: 17,
//                     marginTop: 20,
//                     marginBottom: 25,
//                     textAlign: 'center'
//                 }}>
//                     ___________________ OR ___________________
//                 </Text>
//                 <Text style={{
//                     color: '#fff',
//                     fontSize: 17,
//                     // marginTop: 40,
//                     textAlign: 'center'
//                 }}>Sign in with Social Networks</Text>
//                 <SocialBtn></SocialBtn>
//             </View>
//             <StatusBar style="auto" />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundImage: 'linear-gradient(rgb(85, 85, 184), rgb(70, 31, 90))',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });











//  Q3



// import React, { useState } from 'react'
// import { View, StyleSheet, TouchableOpacity } from 'react-native'
// import Button from './src/inputValidations/Button'
// import TextInput from './src/inputValidations/TextInput'
// import { emailValidator } from './src/inputValidations/emailValidator'
// import { passwordValidator } from './src/inputValidations/passwordValidator'
// import { nameValidator } from './src/inputValidations/nameValidator'
// import UserImage from './src/inputValidations/UserImage'

// export default function App() {
//     const [name, setName] = useState({ value: '', error: '' })
//     const [email, setEmail] = useState({ value: '', error: '' })
//     const [password, setPassword] = useState({ value: '', error: '' })

//     const onSignUpPressed = () => {
//         const nameError = nameValidator(name.value)
//         const emailError = emailValidator(email.value)
//         const passwordError = passwordValidator(password.value)
//         if (emailError || passwordError || nameError) {
//             setName({ ...name, error: nameError })
//             setEmail({ ...email, error: emailError })
//             setPassword({ ...password, error: passwordError })
//             return
//         }
//     }

//     return (
//         <View style={styles.container}>
//             <View style={styles.loginContainer}>
//                 <UserImage></UserImage>
//                 <TextInput
//                     label="Name"
//                     placeholder="Name"
//                     returnKeyType="next"
//                     value={name.value}
//                     onChangeText={(text) => setName({ value: text, error: '' })}
//                     error={!!name.error}
//                     errorText={name.error}
//                 />
//                 <TextInput
//                     label="Email"
//                     placeholder="Email"
//                     returnKeyType="next"
//                     value={email.value}
//                     onChangeText={(text) => setEmail({ value: text, error: '' })}
//                     error={!!email.error}
//                     errorText={email.error}
//                     autoCapitalize="none"
//                     autoCompleteType="email"
//                     textContentType="emailAddress"
//                     keyboardType="email-address"
//                 />
//                 <TextInput
//                     label="Password"
//                     placeholder="Password"
//                     returnKeyType="done"
//                     value={password.value}
//                     onChangeText={(text) => setPassword({ value: text, error: '' })}
//                     error={!!password.error}
//                     errorText={password.error}
//                     secureTextEntry
//                 />
//                 <Button
//                     mode="contained"
//                     onPress={onSignUpPressed}
//                     style={{ marginTop: 24 }}
//                 >
//                     Sign Up
//                 </Button>
//             </View>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     loginContainer: {
//         backgroundColor: '#00ed962f',
//         borderRadius: '10px',
//         boxShadow: '3px 3px 16px 7px rgba(0, 0, 0, 0.2)',
//         paddingTop: '90px',
//         paddingBottom: '45px',
//         paddingLeft: '50px',
//         paddingRight: '50px'

//     }
// });














//  Q4


//  Portfolio or Profile



// import React from "react";
// import { ImageBackground, StyleSheet, Text, Button, View, ScrollView } from "react-native";
// import image from './src/images/portfolio-bg.png';
// import myImage from './src/images/my-image-zoom.svg';
// import FullImage from './src/images/my-image.svg'
// import { Image } from "react-native-web";
// import Icon from 'react-native-vector-icons/FontAwesome5';




// const App = () => (
//   <ScrollView>
//     <View style={styles.container}>
//       <ImageBackground source={image} resizeMode="cover" style={styles.bgImage}>
//         <Image
//           source={myImage}
//           style={{ width: 200, height: 200, marginTop: '100px', border: '8px solid rgba(0, 0, 0, .1)', borderRadius: 100 }}
//         />
//         <h1 style={{ fontSize: 45, fontWeight: 600, fontFamily: " sans-serif", color: '#fff' }}>SAYMA SULTANA</h1>
//         <h2 style={{ fontSize: '27px', marginTop: '-10px', color: '#fff', fontFamily: 'sans-serif', fontWeight: 700 }}>I'm Web Developer</h2>

//         <Text style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//           <a href="#" style={{ marginTop: 50, marginBottom: 10, marginRight: 15, textDecoration: 'none' }}><Icon name="facebook-square" size={30} color="#fff" /></a>
//           <a href="#" style={{ marginTop: 50, marginBottom: 10, marginRight: 15, textDecoration: 'none' }}><Icon name="twitter" size={30} color="#fff" /></a>
//           <a href="#" style={{ marginTop: 50, marginBottom: 10, marginRight: 15, textDecoration: 'none' }}><Icon name="discord" size={30} color="#fff" /></a>
//           <a href="#" style={{ marginTop: 50, marginBottom: 10, marginRight: 15, textDecoration: 'none' }}><Icon name="instagram" size={30} color="#fff" /></a>
//           <a href="#" style={{ marginTop: 50, marginBottom: 10, marginRight: 15, textDecoration: 'none' }}><Icon name="linkedin" size={30} color="#fff" /></a>
//         </Text>



//         <a href="#" style={{ border: "4px solid #fff", textDecoration: 'none', borderRadius: 50, color: '#fff', fontSize: 22, paddingTop: 10, paddingBottom: 10, paddingLeft: 20, paddingRight: 20, letterSpacing: 1.3, marginTop: 30 }}>Download Resume</a>

//       </ImageBackground>
//     </View>

//     <View style={{ marginTop: 200, marginBottom: 80, marginLeft: 100, marginRight: 100 }}>
//       <span style={{ fontFamily: 'sans-serif', fontSize: 14, color: '#888', fontWeight: 600, letterSpacing: 5 }}>INFORMATION</span>
//       <h2 style={{ color: '#101010', fontFamily: 'sans-serif', marginBottom: 30, fontWeight: 600, fontSize: 30, letterSpacing: 3 }}>ABOUT ME</h2>

//       <View style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', columnGap: 50 }}>
//         <Image
//           source={FullImage}
//           style={{ width: 500, height: 500, borderRadius: 10 }}
//         />
//         <View style={{ marginLeft: -110 }}>
//           <span style={{ fontFamily: 'sans-serif', fontSize: 14, color: '#888', fontWeight: 600, letterSpacing: 5 }}>HELLO</span>
//           <h2 style={{ fontFamily: 'sans-serif' }}>I'm Sayma Sultana</h2>
//           <p style={{
//             fontFamily: 'sans-serif', fontSize: 19, fontWeight: 500, color: '#888', margin: '0 0 20px', lineHeight: 1.6
//           }}>I am a web developer with a vast array of knowledge in many different front-end and back- end languages, responsive frameworks, databases, and best code practices. My objective is simply to be the best web developer that I can be and to contribute to the technology company all that I know and can do. I studied CSE, and I believe that my understanding of problem-solving and complex algorithms are also skills that have and will continue to contribute to my overall success as a developer.</p>

//           <Text style={{ color: 'rgba(148, 148, 148, 0.5)' }}>
//             ______________________________________________________________________________________________________________________________
//           </Text>

//           <h2 style={{ fontFamily: 'sans-serif', textTransform: 'uppercase' }}>Personal Info</h2>
//           <View style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', columnGap: 50, fontFamily: 'sans-serif' }}>
//             <View>
//               <Text style={{ fontWeight: 500, fontSize: 19, lineHeight: 30 }}> <span><Icon name="user" size={19} color="#888" /></span> <span style={{ color: '#888' }}> Name : </span>Sayma Sultana</Text>
//               <Text style={{ fontWeight: 500, fontSize: 19, lineHeight: 30 }}> <span><Icon name="user-plus" size={19} color="#888" /></span> <span style={{ color: '#888' }}>Age : </span>22</Text>
//               <Text style={{ fontWeight: 500, fontSize: 19, lineHeight: 30 }}> <span><Icon name="flag" size={19} color="#888" /></span> <span style={{ color: '#888' }}> Nationality : </span>Bangladeshi</Text><Text style={{ fontWeight: 500, fontSize: 19, lineHeight: 30 }}> <span><Icon name="phone-alt" size={19} color="#888" /></span> <span style={{ color: '#888' }}> Phone : </span>+880 1944449999</Text>


//             </View>
//             <View>
//               <Text style={{ fontWeight: 500, fontSize: 19, lineHeight: 30 }}> <span><Icon name="university" size={19} color="#888" /></span> <span style={{ color: '#888' }}> University : </span>Sonargaon University</Text>
//               <Text style={{ fontWeight: 500, fontSize: 19, lineHeight: 30 }}> <span><Icon name="laptop-code" size={19} color="#888" /></span> <span style={{ color: '#888' }}> Department : </span>CSE</Text>
//               <Text style={{ fontWeight: 500, fontSize: 19, lineHeight: 30 }}> <span><Icon name="map-marker-alt" size={19} color="#888" /></span> <span style={{ color: '#888' }}> Address : </span>Narayanganj</Text>
//               <Text style={{ fontWeight: 500, fontSize: 19, lineHeight: 30 }}> <span><Icon name="mail-bulk" size={19} color="#888" /></span> <span style={{ color: '#888' }}>Email : </span>sayma@gmail.com</Text>
//               {/* <Text style={{ fontWeight: 500, fontSize: 19, lineHeight: 30 }}> <span><Icon name="linkedin" size={19} color="#888" /></span> <span style={{ color: '#888' }}> Linkedin : </span>/saymasultana</Text> */}
//             </View>
//           </View>

//         </View>

//       </View>

//     </View>

//     <View>
//       <Text style={styles.footer}>&copy; 2022 || Designed By <span style={{ color: '#8c9bb5', fontWeight: 'bold' }}>Sayma Sultana</span></Text>
//     </View>

//   </ScrollView>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   bgImage: {
//     flex: 1,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: "center",
//     width: '100%',
//     height: '100%',
//     height: '100vh'
//   },
//   text: {
//     color: "white",
//     fontSize: 42,
//     lineHeight: 84,
//     fontWeight: "bold",
//     textAlign: "center",
//     backgroundColor: "#000000c0"
//   },
//   footer: {
//     backgroundColor: '#000',
//     color: '#fff',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     fontSize: 19,
//     paddingTop: 20,
//     paddingBottom: 20
//   }

// });

// export default App;