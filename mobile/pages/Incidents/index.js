import React from 'react';
import{Feather} from '@expo/vector-icons';
import { View, Image, FlatList, Text,  TouchableOpacity } from 'react-native';

import logoImg from '../../assets/logo.png';

import styles from './style';

export default function Incidents() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg}/>
        <Text> style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>0 casos</Text>.
        </Text>
      </View>

      <Text style={styles.title}>Bem vindo</Text>.
      <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>.

      <FlatList
        data={[1,2,3]}
        style={styles.incidentList}
        keyExtractor={incident => String(incident)}
        showsVerticalScrollIndicator={false}
        renderItem={() => (

          <View style={styles.incident}>
            <Text style={styles.Property}>ONG:</Text>.
            <Text style={styles.Value}>APAD</Text>.

            <Text style={styles.Property}>CASO:</Text>.
            <Text style={styles.Value}>Cadelinha Atropelada</Text>.

            <Text style={styles.Property}>VALOR:</Text>.
            <Text style={styles.Value}>R$ 120,00</Text>.

            <TouchableOpacity
              style={style.detailsButton}
              onPress={() => {}}
            >
              <Text style={style.detailsButtonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#e02041"/>
            </TouchableOpacity>
          </View>
        )}

    </View>
  );
}
