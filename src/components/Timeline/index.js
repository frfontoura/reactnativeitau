import React from 'react';
import {
  View, Text, FlatList, StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { format, isAfter } from 'date-fns';
import locale from 'date-fns/locale/pt';

export default function Timeline({ data, future }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => `${item.id}`}
        renderItem={({ item }) => (
          <View style={[styles.itemContainer, isAfter(item.date, new Date()) && !future ? styles.futureContainer : {}]}>
            <View style={styles.dateContainer}>
              <Text style={styles.dateText}>{format(item.date, 'DD [de] MMMM', { locale })}</Text>
            </View>
            {item.values.map(v => (
              <View key={v.id} style={styles.transactionContainer}>
                <Icon name={v.type === 'ENTRADA' ? 'dollar-sign' : 'receipt'} size={18} color="#ff7300" />
                <Text style={styles.valueText}>{v.text}</Text>
                <Text style={v.type === 'ENTRADA' ? styles.incomingText : null}>{v.type === 'SAIDA' ? '-' : ''}R$ {v.value}</Text>
              </View>
            ))}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    padding: 10,
    backgroundColor: '#fff',
  },
  dateContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateText: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 15,
    width: 100,
    textAlign: 'center',
  },
  transactionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  incomingText: {
    color: '#080',
  },
  valueText: {
    flex: 1,
    marginLeft: 30,
  },
  futureContainer: {
    backgroundColor: 'transparent',
  },
});
