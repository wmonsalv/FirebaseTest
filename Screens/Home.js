import react from "react";
import { Button, StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import { useRoute } from "@react-navigation/native";

const Home = ({navigation}) => {

const route = useRoute();

const Email = (route.params.Email);


const createList = ()=>{
    navigation.navigate('listGen', {Email})
}

const searchList = () =>{
    navigation.navigate('SearchList', {Email})
}

return(
    <View>
        <Button title="Create a List" onPress={createList}/>
        <Button title="Search Lists" onPress={searchList}/>
        <Button title="View Your Lists" onPress={searchList}/>
        <Button title="Signout"/>
    </View>
)
}
export default Home