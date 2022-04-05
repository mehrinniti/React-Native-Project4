import { View } from 'react-native';
import { TextInput } from 'react-native-web';
import Icon from 'react-native-vector-icons/MaterialIcons'

const InputFields = () => {
    return (
        <View>
            <View>
                <span style={{
                    position: 'relative',
                    top: 25,
                }}><Icon name="mail-outline" size={23} color="#6D7B8D" /></span>
                <TextInput
                    placeholder="Email"
                    placeholderTextColor={'#C0C0C0'}
                    placeholderTextAlign={"center"}
                    style={{
                        width: 300,
                        height: 35,
                        fontSize: 18,
                        padding: 10,
                        borderBottom: '1px solid #6D7B8D',
                        marginTop: -10,
                        outline: "none",
                        textAlign: 'center'

                    }}
                />
            </View>
            <View>

                <span style={{
                    position: 'relative',
                    top: 25,
                }}><Icon name="lock-outline" size={23} color="#6D7B8D" /></span>
                <TextInput
                    placeholder="Password"
                    placeholderTextColor={'#C0C0C0'}
                    placeholderTextAlign={"center"}
                    style={{
                        width: 300,
                        height: 35,
                        fontSize: 18,
                        padding: 10,
                        borderBottom: '1px solid #6D7B8D',
                        marginTop: -10,
                        outline: "none",
                        textAlign: 'center'

                    }}
                />
            </View>
        </View>
    );
};

export default InputFields;