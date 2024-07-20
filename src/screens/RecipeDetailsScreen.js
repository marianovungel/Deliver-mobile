import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {FontAwesome} from '@expo/vector-icons'

const RecipeDetailsScreen = ({navigation, route}) => {
    // const { item } = route.params;
    const { item } = route.params
    console.log(item)
  return (
    <View style={{ backgroundColor: "#6f4e37", flex:1}}>
        <SafeAreaView style={{ flexDirection: "row", marginHorizontal:16, marginTop: 10}}>
            <Pressable style={{ flex:1}} onPress={()=>navigation.goBack()}>
                <FontAwesome name={"arrow-circle-left"} size={28} color="white" />
            </Pressable>
            <FontAwesome name={"heart-o"} size={28} color="white" />
        </SafeAreaView>
      <View style={{ backgroundColor: "#fff", flex:1, marginTop:240, borderTopLeftRadius: 56, borderTopRightRadius:56, alignItems: "center"}}>
        <View style={{ width:300, height:300, position: "absolute", marginTop: -150, alignItems: "center", justifyContent: "center"}}>
            <Image source={item.image} />
        </View>
      </View>
    </View>
  )
}

export default RecipeDetailsScreen

const styles = StyleSheet.create({})