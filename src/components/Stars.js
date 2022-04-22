import React, {useState} from 'react';
import { StyleSheet, View} from 'react-native';
import Star from './Star';

export default function Stars({
  quantidade:  quantidadeAntiga,
  editavel = false,
  grande = false,
}) {

  const [quantidade, setQuantidade] = useState(quantidadeAntiga);

  const RenderEstrelas = () => {
    const listaEstrelas = [];
    for (let i = 0; i < 5; i++) {
      listaEstrelas.push(
        <Star
        key = {i}
        onPress = {() => setQuantidade(i + 1)}
        desabilitada={!editavel}
        preenchida={i < quantidade}
        grande={grande}
        />
        
      );
    }
    return listaEstrelas;
  };

  return (
    <View style={styles.estrelas}>
      <RenderEstrelas />
    </View>
  );
}

const styles = StyleSheet.create({
    estrelas: {
      flexDirection: 'row',
    },
  });
