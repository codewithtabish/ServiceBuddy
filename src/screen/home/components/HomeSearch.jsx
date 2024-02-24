import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // You need to install '@expo/vector-icons' for this

const SearchBox = ({ onSearch }) => {
  return (
    <View style={styles.container}>
      <TextInput
      className="border-none  focus:outline-none"
        style={styles.input}
        placeholder="Search..."
        onChangeText={onSearch}
        // You can add other TextInput props as needed
      />
      <TouchableOpacity onPress={() => console.log('Search icon pressed')}>
        <Ionicons name="search" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal:15,
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    borderColor:"white"
  },
  input: {
    flex: 1,
    marginRight: 8,
    borderColor:"white"

  },
});

export default SearchBox;
