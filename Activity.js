import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const objective = () => {
    return (
        <View>
            <View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Click Me</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default objective

const styles = StyleSheet.create({
    button: {
        margin: 10,
        width: 100,
        height: 100,
        backgroundColor: 'gray',
        justifyContent: 'center',
        padding: 20,
        borderRadius: 20,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    }
});