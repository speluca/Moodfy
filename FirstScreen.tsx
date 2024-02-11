import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';



const FirstScreen = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const handleButtonPress = () => {
    navigation.navigate('SecondScreen');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/APP-logoMoodfy.png')} 
        style={styles.image}
      />
      <Text style={styles.mainText}>MOODFY</Text>
      <TouchableOpacity style={styles.buttonContainer} onPress={handleButtonPress}>
        <Text style={styles.buttonText}>Começar</Text>
      </TouchableOpacity>
      <Text style={styles.secondaryText}>Moodfy</Text>
      <Text style={styles.secondaryText}>Version 1.0.0</Text>
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
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  mainText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonContainer: {
    backgroundColor: 'blue', // Cor de fundo do botão
    paddingHorizontal: 20, // Espaçamento horizontal interno
    paddingVertical: 10, // Espaçamento vertical interno
    borderRadius: 32, // Borda arredondada
  },
  buttonText: {
    color: 'white', // Cor do texto do botão
    fontSize: 18, // Tamanho do texto do botão
  },
  secondaryText: {
    fontSize: 18,
    marginBottom: 5,
  },
});

export default FirstScreen;
