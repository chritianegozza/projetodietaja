import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const goToProfile = () => {
    navigation.navigate('Profile'); // Navega para a tela Profile
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24 }}>Bem-vindo à tela Home!</Text>
      <Button title="Ir para o perfil" onPress={goToProfile} />
    </View>
  );
};

export default HomeScreen;
