import { useState } from 'react';

import {
  View,
  Text,
  Button,
  TextInput,
  Alert,
  StyleSheet
} from 'react-native';

export default function Estatisticas() {

  const [curtidas, setCurtidas] =
    useState(0);

  const [comentarios, setComentarios] =
    useState(0);

  const [favorito, setFavorito] =
    useState(false);

  const [comentario, setComentario] =
    useState('');

  function curtir() {
    setCurtidas(curtidas + 1);
  }

  function descurtir() {
    if (curtidas > 0) {
      setCurtidas(curtidas - 1);
    }
  }

  function enviarComentario() {

    if (comentario.trim() === '') {
      Alert.alert(
        'Atenção',
        'Digite um comentário.'
      );
      return;
    }

    setComentarios(comentarios + 1);

    Alert.alert(
      'Sucesso',
      'Comentário enviado!'
    );

    setComentario('');
  }

  return (
    <View style={styles.container}>

      <Text>
        ❤️ Curtidas: {curtidas}
      </Text>

      <Text>
        💬 Comentários: {comentarios}
      </Text>

      <Text>
        {favorito
          ? '⭐ Favoritado'
          : '☆ Não Favoritado'}
      </Text>

      <Button
        title="Curtir"
        onPress={curtir}
      />

      <Button
        title="Descurtir"
        onPress={descurtir}
      />

      <Button
        title="Favoritar"
        onPress={() =>
          setFavorito(!favorito)
        }
      />

      <TextInput
        style={styles.input}
        placeholder="Digite um comentário"
        value={comentario}
        onChangeText={setComentario}
      />

      <Button
        title="Enviar Comentário"
        onPress={enviarComentario}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },

  input: {
    borderWidth: 1,
    padding: 8,
    marginVertical: 10,
    borderRadius: 5
  }
});