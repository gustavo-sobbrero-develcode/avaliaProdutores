import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';

import estrelaCinza from '../../assets/estrelaCinza.png';
import estrela from '../../assets/estrela.png';

export default function Star({
  onPress,
  desabilitada = true,
  preenchida,
  grande = false,
}) {
  const styles = stylesFunction(grande);

  const getImagem = () => {
    if (preenchida) {
      return estrela;
    }
    return estrelaCinza;
  };

  return (
    <TouchableOpacity onPress={onPress} disabled={desabilitada}>
      <Image source={getImagem()} style={styles.estrela} />
    </TouchableOpacity>
  );
}

const stylesFunction = (grande) =>
  StyleSheet.create({
    estrela: {
      height: grande ? 36 : 12,
      width: grande ? 36 : 12,
      marginRight: 2,
    },
  });
