import { FlatList } from 'react-native';
import Jogo from '../componentes/Jogo';

export default function Home({ navigation }) {

  const jogos = [
  {
    id: '1',
    nome: 'Minecraft',
    categoria: 'Sandbox',
    plataforma: 'PC',
    descricao: 'Jogo de construção e exploração em mundo aberto.',
    imagem:
      'https://images.igdb.com/igdb/image/upload/t_cover_big/co49x5.jpg',
    data: '01/06/2026'
  },
  {
    id: '2',
    nome: 'Super Mario Bros. Wonder',
    categoria: 'Plataforma',
    plataforma: 'Nintendo Switch',
    descricao: 'Aventura clássica do Mario com novas mecânicas e fases.',
    imagem:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWo8IqSrLInCFtKP-CVmminrtrSH8DKnO15Q&s',
    data: '02/06/2026'
  },
  {
    id: '3',
    nome: 'The Sims 4',
    categoria: 'Simulação',
    plataforma: 'PC',
    descricao: 'Simulador de vida onde o jogador cria e controla personagens.',
    imagem:
      'https://upload.wikimedia.org/wikipedia/pt/3/34/Nova_capa_de_The_Sims_4.png',
    data: '03/06/2026'
  },
  {
    id: '4',
    nome: 'Grand Theft Auto V',
    categoria: 'Ação',
    plataforma: 'PC',
    descricao: 'Jogo de ação e mundo aberto da Rockstar Games.',
    imagem:
      'https://images.igdb.com/igdb/image/upload/t_cover_big/co2lbd.jpg',
    data: '04/06/2026'
  }
];

  return (
    <FlatList
      data={jogos}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Jogo
          jogo={item}
          navigation={navigation}
        />
      )}
    />
  );
}