import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { TextInput as Input } from 'react-native-web'

export default function TextInput({ errorText, description, ...props }) {
    return (
        <View style={styles.container}>
            <Input
                style={styles.input}
                underlineColor="transparent"
                mode="outlined"
                {...props}
            />
            {description && !errorText ? (
                <Text style={styles.description}>{description}</Text>
            ) : null}
            {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '50%',
        marginVertical: 13,
    },
    input: {
        backgroundColor: "#00ed9648",
        width: 300,
        height: 35,
        fontSize: 18,
        padding: 10,
        borderRadius: 5,
        marginTop: -10,
        marginBottom: 8,
        outline: "none"
    },
    description: {
        fontSize: 13,
        color: '#00ed96',
        paddingTop: 8,
    },
    error: {
        fontSize: 13,
        color: 'red',
        paddingTop: 8,
    },
})
