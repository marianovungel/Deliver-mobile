import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import SearchFilter from '../components/SearchFilter'
import CategoriesFilter from '../components/CategoriesFilter'
import RecipeCard from '../components/RecipeCard'

const RecipeListScreen = () => {
  return (
    <SafeAreaProvider style={{flex:1, marginHorizontal:16}}> 
      <StatusBar hidden={false} backgroundColor={"#f5f5f5"} />
      <Header headerText={"Hi, Mariano"} headerIcon={"bell-o"} />
      <SearchFilter icon={"search"} placeholder={"enter your fav recipe"} />

      <View style={{marginTop:22}}>
        <Text style={{ fontSize: 22, fontWeight: "bold"}}>Category</Text>
        <CategoriesFilter />
      </View>



      <View style={{marginTop:22, flex: 1}}>
        <Text style={{ fontSize: 22, fontWeight: "bold"}}>Recipes</Text>
        <RecipeCard />
      </View>
    </SafeAreaProvider>
  )
}

export default RecipeListScreen

const styles = StyleSheet.create({})