import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SecondScreen = () => {
  const navigation = useNavigation();

  const handleMenuPress = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  const handleButtonPress = () => {
   
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuButton} onPress={handleMenuPress}>
        {/* Ícone do menu sanduíche */}
        <Icon name="bars" size={24} color="black" /> 
      </TouchableOpacity>
      <Text style={styles.timeText}>08:00 AM</Text>
      <Text style={styles.descriptionText}>Alarme programado para acordar</Text>
      <TouchableOpacity style={styles.iconButton} onPress={handleButtonPress}>
        <Icon name="plus" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  menuButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 999,
  },
  iconButton: {
    marginTop: 20, // Adicione um espaçamento acima do botão de ícone
  },
  timeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default SecondScreen;
