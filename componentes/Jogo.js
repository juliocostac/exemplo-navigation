import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default function Jogo({
  jogo,
  navigation
}) {

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(
          'Detalhes',
          { jogo }
        )
      }
    >
      <View style={styles.card}>

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

      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    padding: 10,
    margin: 10,
    borderRadius: 10
  },

  imagem: {
    width: 250,
    height: 200,
    alignSelf: 'center'
  },

  nome: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});