import React, { cloneElement } from "react";
import { View, Text, StyleSheet, Pressable } from 'react-native';

export function PasswordItem({ data, removePassword }) {
    return (
        <Pressable onLongPress={removePassword} style={ meuEstilo.container }>
            <Text style={ meuEstilo.text }>{data}</Text>
        </Pressable>
    )
}

const meuEstilo = StyleSheet.create({
    container: {
        backgroundColor: "#0e0e0e",
        padding: 14,
        width: "100%",
        marginBottom: 14,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    text: {
        color: "#FFF"
    }
})