import React from 'react';
import {
  View, Text, FlatList, StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const data = [
  {
    date: '10/10/2010',
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
    date: '09/10/2010',
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
    date: '08/10/2010',
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
        keyExtractor={item => `${item.date}`}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <View style={styles.dateContainer}>
              <Text style={styles.dateText}>{item.date}</Text>
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
