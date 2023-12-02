import { useState, useEffect, useSyncExternalStore } from 'react'
import {View, Text, StyleSheet, VirtualizedList} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useIsFocused } from '@react-navigation/native'
import useStorage from '../../hooks/useStorage'
import { FlatList } from 'react-native'
import { PasswordItem } from './components/passwordItem'

export function Passwords() {
    const [listPasswords, setListPasswords] = useState([]);
    const focuse = useIsFocused();
    const { getItem, removeItem } = useStorage();

    useEffect(() => {
        async function loadPasswords(){
            const passwords = await getItem('@pass');
            setListPasswords(passwords);
        }
        loadPasswords();
    }, [focuse])

    async function handleDeletePassword(item) {
        const passwords = await removeItem('@pass', item);
        setListPasswords(passwords);
    }

    return(
        <SafeAreaView style={{ flex: 1, }}>
            <View style={ meuEstilo.header }>
                <Text style={ meuEstilo.title }>Minhas senhas</Text>
            </View>
            <View style={ meuEstilo.content}>
                <FlatList style={ {flex: 1, paddingTop: 14, } }
                    data={listPasswords}
                    // recuperando os itens e transformando em uma string
                    keyExtractor={ (item) => String(item)}
                    renderItem={ ({item}) => <PasswordItem data={item} removePassword={ () => handleDeletePassword(item) } />}
                />
            </View>
        </SafeAreaView>
    )
}

const meuEstilo = StyleSheet.create({
    header: {
        backgroundColor: "#392de9",
        paddingTop: 58,
        paddingBottom: 14,
        paddingLeft: 14,
        paddingRight: 14,
    },

    title: {
        fontSize: 18,
        color: "#FFF",
        fontWeight: 'bold'
    },
    content: {
        flex: 1,
        paddingRight: 14,
        paddingLeft: 14,
    }
})