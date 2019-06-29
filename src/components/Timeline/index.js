import React from 'react';
import {
  View, Text, FlatList, StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { format, isAfter, addDays } from 'date-fns';
import locale from 'date-fns/locale/pt';

const data = [
  {
    id: Math.floor(Math.random() * (1000 - 1)) + 1,
    date: addDays(new Date(), 1),
    values: [
      {
        id: Math.floor(Math.random() * (1000 - 1)) + 1,
        type: 'ENTRADA',
        value: 123.11,
        text: 'futuro',
      },
    ],
  },
  {
    id: Math.floor(Math.random() * (1000 - 1)) + 1,
    date: new Date(2019, 5, 28),
    values: [
      {
        id: Math.floor(Math.random() * (1000 - 1)) + 1,
        type: 'ENTRADA',
        value: 123.11,
        text: 'bla bla bla',
      },
      {
        id: Math.floor(Math.random() * (1000 - 1)) + 1,
        type: 'SAIDA',
        value: 123.11,
        text: 'bla bla bla',
      },
      {
        id: Math.floor(Math.random() * (1000 - 1)) + 1,
        type: 'SAIDA',
        value: 123.11,
        text: 'bla bla bla',
      },
    ],
  },
  {
    id: Math.floor(Math.random() * (1000 - 1)) + 1,
    date: new Date(2019, 5, 27),
    values: [
      {
        id: Math.floor(Math.random() * (1000 - 1)) + 1,
        type: 'ENTRADA',
        value: 123.11,
        text: 'bla bla bla',
      },
      {
        id: Math.floor(Math.random() * (1000 - 1)) + 1,
        type: 'SAIDA',
        value: 123.11,
        text: 'bla bla bla',
      },
      {
        id: Math.floor(Math.random() * (1000 - 1)) + 1,
        type: 'SAIDA',
        value: 123.11,
        text: 'bla bla bla',
      },
    ],
  },
  {
    id: Math.floor(Math.random() * (1000 - 1)) + 1,
    date: new Date(2019, 5, 26),
    values: [
      {
        id: Math.floor(Math.random() * (1000 - 1)) + 1,
        type: 'ENTRADA',
        value: 123.11,
        text: 'bla bla bla',
      },
      {
        id: Math.floor(Math.random() * (1000 - 1)) + 1,
        type: 'SAIDA',
        value: 123.11,
        text: 'bla bla bla',
      },
      {
        id: Math.floor(Math.random() * (1000 - 1)) + 1,
        type: 'SAIDA',
        value: 123.11,
        text: 'bla bla bla',
      },
    ],
  },
];

export default function Timeline() {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => `${item.id}`}
        renderItem={({ item }) => (
          <View style={[styles.itemContainer, isAfter(item.date, new Date()) ? { backgroundColor: 'transparent' } : {}]}>
            <View style={styles.dateContainer}>
              <Text style={styles.dateText}>{format(item.date, 'DD [de] MMMM', { locale })}</Text>
            </View>
            {item.values.map(v => (
              <View key={v.id} style={styles.transactionContainer}>
                <Icon name={v.type === 'ENTRADA' ? 'dollar-sign' : 'receipt'} size={18} color="#ff7300" />
                <Text>{v.text}</Text>
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
});
