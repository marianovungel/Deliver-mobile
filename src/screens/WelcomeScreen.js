import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={{flex:1, alignItems: "center"}}>
      <Image source={require("../../assets/welcome.png")} />

      <Text style={{ color: "#f96163", fontSize: 22, fontWeight: "bold"}}>
        40K+ Premium Recipes
      </Text>

      <Text style={{ color: "#3c444c", fontSize: 42, fontWeight: "bold", marginTop:44, marginBottom: 40}}>
        Cool Like A Chef
      </Text>

      <TouchableOpacity
        onPress={()=>navigation.navigate("RecipeList")}
        style={{
            backgroundColor:"#f96163",
            borderRadius: 18,
            paddingVertical: 18,
            width: "80%",
            alignItems: "center"
        }}
      >
        <Text 
            style={{
                fontSize:18,
                color: "#fff",
                fontWeight: "700",
            }}
        >Let's Go</Text>
      </TouchableOpacity>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({})