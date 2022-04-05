import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { TextInput as Input } from 'react-native-web'
// import { theme } from '../core/theme'

export default function TextInput({ errorText, description, ...props }) {
    return (
        <View style={styles.container}>
            <Input
                style={styles.input}
                // selectionColor={theme.colors.primary}
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
        marginVertical: 12,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        backgroundColor: 'red',
    },
    description: {
        fontSize: 13,
        color: 'green',
        paddingTop: 8,
    },
    error: {
        fontSize: 13,
        color: 'green',
        paddingTop: 8,
    },
})
