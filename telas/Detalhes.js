import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

import Estatisticas from '../componentes/Estatisticas';

export default function Detalhes({ route }) {

  const { jogo } = route.params;

  return (
    <View style={styles.container}>

      <Image
        source={{ uri: jogo.imagem }}
        style={styles.imagem}
      />

      <Text style={styles.nome}>
        {jogo.nome}
      </Text>

      <Text>
        Categoria: {jogo.categoria}
      </Text>

      <Text>
        Plataforma: {jogo.plataforma}
      </Text>

      <Text>
        Data: {jogo.data}
      </Text>

      <Text>
        {jogo.descricao}
      </Text>

      <Estatisticas />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15
  },

  imagem: {
    width: 300,
    height: 250,
    alignSelf: 'center'
  },

  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10
  }
});