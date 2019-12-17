import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { dsFonts } from 'resources/ds'

const MyFlatList = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Noivos</Text>
      <FlatList
        data={props.data}
        renderItem={({ item }) => (
          <View style={{ borderBottomColor: '#e3e3e3', borderBottomWidth: 1 }}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    ...dsFonts.montserratRegular,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    ...dsFonts.montserratBold,
  },
})

export default MyFlatList
