import react, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, View, TextInput, Alert, FlatList, TouchableOpacity } from 'react-native';
import { useRoute } from "@react-navigation/native";
import { collection, query, where, getDocs, doc, getDoc } from "firebase/firestore";
import db from './config'


const SaveList = ({navigation}) => {

const route = useRoute();

const Email = (route.params.Email);

const id = (route.params.id);

useEffect(() => {
    console.log(id)
    setLists((prevItem) => {
        return[
            {item: id, key: ''},
        ];
    })
}, [])

async function LoadList() {
    //creates an instance of the all the docs in List
    const listRef = doc(db, 'List', id);
    //if there is an email field(all docs should have one) will reterive the doc
    const q = query(listRef);
    //goess through all the reterived docs on by one
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        setLists((prevItem) => {
            return[
                //Takes the title from the reterived doc and its docID and adds it to the list 
                {item: doc.data().Item.text, key: doc.data().Item.key},
                ...prevItem
            ];
        })
    });
}

const [list, setLists] = useState([
    {text: '', key: ''},
]);

return(
    <View>
        <Button title="Save List" onPress={() => saveList()}/>
        <FlatList 
            data = {list}
            renderItem={({item})=>(
                //change to redirect to view of list
            <TouchableOpacity>
                <Text>{item.text}</Text>
            </TouchableOpacity>
            )}
        />
    </View>
)

}
export default SaveList