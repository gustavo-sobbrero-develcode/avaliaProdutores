import React, {useState, useReducer} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Stars from '../../../components/Stars';

export default function Produtor({nome, imagem, distancia, estrelas}) {
  const [selecionado, inverterSelecionado] = useReducer(
    (selecionado) => !selecionado,
    false 
  );

  return (

    <TouchableOpacity 
    style={styles.card}
    onPress={inverterSelecionado}
    >

      <Image style={styles.imagem} source={imagem} accessibilityLabel={nome} />
      
      <View style={styles.infos}>
        
        <View>
          
          <Text style={styles.nome}>{nome}</Text>
          <Stars quantidade={estrelas}
          editavel={selecionado}
          grande={selecionado}
          />
       
        </View>
       
        <Text style={styles.distancia}>{distancia}</Text>
      
      </View>
    
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#F6F6F6',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6,
    elevation: 4,
  },
  imagem: {
    width: 48,
    height: 48,
    borderRadius: 6,
    marginVertical: 16,
    marginLeft: 16,
  },
  infos: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 8,
    marginVertical: 16,
    marginRight: 16,
  },
  nome: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold',
  },
  distancia: {
    fontSize: 12,
    lineHeight: 19,
  },
});
