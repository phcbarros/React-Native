import React from 'react'
import { SectionList, StyleSheet, Text, View, ScrollView } from 'react-native'

const MySectionList = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Padrinhos</Text>
      <SectionList
        sections={props.data}
        renderItem={({ item }) => (
          <View
            style={{
              borderBottomColor: '#e3e3e3',
              borderBottomWidth: 1,
              marginTop: 5,
            }}>
            <Text style={styles.item}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={(_, index) => index}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 22,
  },
  sectionHeader: {
    padding: 10,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 16,
  },
})

export default MySectionList
