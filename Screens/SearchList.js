import react, { useState } from "react";
import { Button, Text, View, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useRoute } from "@react-navigation/native";
import { collection, query, where, getDocs } from "firebase/firestore";
import db from './config'
import { async } from "@firebase/util";


const SearchList = ({navigation}) => {
    const route = useRoute();
    const Email = (route.params.Email);

    async function retervial() {
        //Refreshes list on each run to prevent duplicates
        setLists((prevItem) => {
            return[
                {title: '', docID: ''},
            ];
        })
        //creates an instance of the all the docs in List
        const listRef = collection(db, "List");
        //if there is an email field(all docs should have one) will reterive the doc
        const q = query(listRef, where("Email", "!=", ''));
        //goess through all the reterived docs on by one
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            setLists((prevItem) => {
                return[
                    //Takes the title from the reterived doc and its docID and adds it to the list 
                    {title: doc.data().Title, docID: doc.id},
                    ...prevItem
                ];
            })
        });
    }

    const pressHandler = (id, email) =>{
        console.log(id)
        navigation.navigate('SaveList', {Email}, {id})
    }
            
    const [listName, setLists] = useState([
        {title: '', docID: ''},
    ]);

    return(
        <View>
            <Button title="Retervial Test All Docs" onPress={() => retervial()}/>
            <FlatList 
                data = {listName}
                renderItem={({item})=>(
                    //change to redirect to view of list
                <TouchableOpacity onPress={()=> pressHandler(item.docID, Email)}>
                    <Text>{item.title}</Text>
                </TouchableOpacity>
                )}
            />
        </View>
    )

}

export default SearchList