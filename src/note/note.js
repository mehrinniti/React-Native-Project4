
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











