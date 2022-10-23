import react, { useState } from "react";
import { Button, Text, View, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useRoute } from "@react-navigation/native";
import uuid from 'react-native-uuid';
import { collection, query, where, setDoc, doc, getDocs } from "firebase/firestore";
import db from './config'


const ListGen = ({navigation}) => {
    const route = useRoute();
    const Email = (route.params.Email);

    const [change, setChange] = useState('')
    const pressHandler = (key) =>{
        setItem((prevItem) => {
            return prevItem.filter(item => item.key != key)
        })
    }

    const addItem = (text) => {
        setItem((prevItem) => {
            return[
                {text: text, key: Math.random().toString()},
                ...prevItem
            ];
        })
    }

    const [item, setItem] = useState([
        {text: '', key: ''},
    ]);


    async function CreateList(Email, item) {
        const docData = {
            Email: Email,
            Title: 'Test',
            Item: item
        }
        const ListRef = doc(db, 'List', uuid.v4());
        await setDoc(ListRef, docData)
    }

    return(
    <View>
        <Button onPress={() => CreateList(Email, item)} title="Create List"/>
        <TextInput
            style={styles.input}
            placeholder='Enter Item' 
            onChangeText={(val) => setChange(val)}/>
        <Button onPress={() => addItem(change)} title="Add Item"/>
        <FlatList 
            data = {item}
            renderItem={({item})=>(
            <TouchableOpacity onPress={()=> pressHandler(item.key)}>
                <Text>{item.text}</Text>
            </TouchableOpacity>
        )}
        />
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      borderWidth: 1,
      borderColor: '#000',
      padding: 8,
      margin: 10,
      width: 200
    }
  });

export default ListGen