import React from 'react'
import { StyleSheet } from 'react-native'
import { Button as PaperButton } from 'react-native-web'
// import { theme } from '../core/theme'

export default function Button({ mode, style, ...props }) {
    return (
        <PaperButton
            // style={[
            //     styles.button,
            //     mode === 'outlined' && { backgroundColor: 'red' },
            //     style,
            // ]}
            // labelStyle={styles.text}
            title=' Submit'
            // mode={mode}
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
