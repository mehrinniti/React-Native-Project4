import React from 'react'
import { StyleSheet } from 'react-native'
import { Button as PaperButton } from 'react-native-web'

export default function Button({ mode, style, ...props }) {
    return (
        <PaperButton
            title=' Submit'
            {...props}
        />
    )
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        marginVertical: 10,
        paddingVertical: 2,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 15,
        lineHeight: 26,
    },
})
