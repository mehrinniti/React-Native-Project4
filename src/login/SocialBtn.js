import { View, Button, TouchableOpacity, Text } from 'react-native-web';
import Icon from 'react-native-vector-icons/Zocial';

const SocialBtn = () => {
    return (
        <View>
            <Text style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: 30
            }}>
                <TouchableOpacity
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#3b5998',
                        borderRadius: 50,
                        paddingVertical: 7,
                        paddingLeft: 20,
                        paddingRight: 27,
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
                            fontSize: 18,
                            fontFamily: "Segoe UI"
                        }}>
                            <span style={{
                                marginRight: 5
                            }}><Icon name={"facebook"} size={18} color="#fff" /></span>
                            Facebook
                        </Text>


                    </View>



                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#DB4437',
                        borderRadius: 50,
                        paddingVertical: 7,
                        paddingLeft: 20,
                        paddingRight: 27,
                        marginTop: 40
                    }}>

                    <View style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start'
                    }}>


                        <Text style={{
                            color: '#fff',
                            fontSize: 18,
                            fontFamily: "Segoe UI"
                        }}>
                            <span style={{
                                marginRight: 5
                            }}><Icon name={"google"} size={18} color="#fff" /></span>
                            Google
                        </Text>


                    </View>
                </TouchableOpacity>
            </Text>
        </View>
    );
};

export default SocialBtn;