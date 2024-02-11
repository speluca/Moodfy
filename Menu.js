// Menu.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Menu = () => {
  const navigation = useNavigation();

  const handleMenuItemPress = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuItemPress('FirstScreen')}>
        <Text style={styles.menuItemText}>Tela 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuItemPress('SecondScreen')}>
        <Text style={styles.menuItemText}>Tela 2</Text>
      </TouchableOpacity>
      {/* Adicione mais itens de menu conforme necessário */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20, // Ajuste conforme necessário
    paddingHorizontal: 20, // Ajuste conforme necessário
  },
  menuItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuItemText: {
    fontSize: 18,
  },
});

export default Menu;
