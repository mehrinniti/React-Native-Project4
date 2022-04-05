
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import InputFields from './src/login/InputFields';
import LoginBtn from './src/login/LoginBtn';
import SocialBtn from './src/login/SocialBtn';

export default function App() {
  return (
    <View style={styles.container}>
      <h1 style={{
        color: '#fff',
        fontFamily: "Segoe UI",
        letterSpacing: 2,
        fontSize: 45,
        fontWeight: 400,
        marginBottom: 70
      }}>LOGIN</h1>
      <View>
        <InputFields></InputFields>
        <LoginBtn></LoginBtn>
        <Text style={{
          color: '#fff',
          fontSize: 17,
          marginTop: 40,
          textAlign: 'center'
        }}>
          Don't have an account ?
          <TouchableOpacity style={{
            color: 'rgb(33, 150, 243)'
          }}>
            Sign up Now !
          </TouchableOpacity>
        </Text>
        <Text style={{
          color: '#fff',
          fontSize: 17,
          marginTop: 20,
          marginBottom: 25,
          textAlign: 'center'
        }}>
          ___________________ OR ___________________
        </Text>
        <Text style={{
          color: '#fff',
          fontSize: 17,
          // marginTop: 40,
          textAlign: 'center'
        }}>Sign in with Social Networks</Text>
        <SocialBtn></SocialBtn>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: 'linear-gradient(rgb(85, 85, 184), rgb(70, 31, 90))',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
