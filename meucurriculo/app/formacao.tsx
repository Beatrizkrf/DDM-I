import { StyleSheet, Text, View } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> 

      Formações Acadêmicas (fictícias)

       Tecnólogo em Design Digital – Faculdade Criativa de São Paulo (2019 – 2021)

      Bacharelado em Comunicação Interativa – Universidade Nova Geração (2017 – 2020)

      Curso Técnico em Produção Multimídia – Instituto Arte & Tecnologia (2020 – 2022)

      Cursos Livres / Complementares (fictícios)

      Curso de UX/UI Design – Escola Virtual de Inovação (Carga horária: 120h – 2022)

      Oficina de Produção de Conteúdo para Redes Sociais – Academia Digital Trends (Carga horária: 60h – 2021)

      Workshop de Inteligência Artificial Aplicada ao Marketing – Hub Criativo Brasil (2023)

      Certificações (fictícias)

      Certificação em Front-End Moderno – TechMasters Academy (2022)

      Certificação em Gestão de Projetos Ágeis – Global Project School (2021)

      Certificação em Edição de Vídeo Avançada – MediaLab Institute (2020)

      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
  View:{
    textAlign: 'justify',
    marginLeft: '20%',
  },
});
