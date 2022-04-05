import { View, Button, TouchableOpacity, Text } from 'react-native-web';
import Icon from 'react-native-vector-icons/MaterialIcons';

const LoginBtn = () => {
    return (
        <View>
            <TouchableOpacity
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#2196f3',
                    borderRadius: 50,
                    paddingVertical: 7,
                    marginTop: 40
                }}

            >
                <View style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start'
                }}>


                    <Text style={{
                        color: '#fff',
                        fontSize: 22,
                        fontFamily: "Segoe UI"
                    }}>
                        <span style={{
                            marginRight: 5
                        }}><Icon name={"lock"} size={22} color="#fff" /></span>
                        Secure Login
                    </Text>


                </View>

            </TouchableOpacity>
        </View>

    );
};

export default LoginBtn;