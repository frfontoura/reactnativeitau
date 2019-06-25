import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Extrato() {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.balanceTitle}>saldo disponível</Text>
        <View style={styles.balance}>
          <Text style={styles.balanceValue}>R$ 123,99</Text>
          <TouchableOpacity onPress={() => setShowDetail(!showDetail)}>
            <Icon name="chevron-down" size={18} color="#ddd" />
          </TouchableOpacity>
        </View>
      </View>

      {showDetail && (
      <View style={styles.detail}>
        <Text>Detalhes...</Text>
      </View>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 50,
    borderTopWidth: 0.5,
    borderTopColor: '#ddd',
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd',
    padding: 10,
  },
  balance: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  balanceTitle: {
    fontWeight: 'bold',
  },
  balanceValue: {
    color: '#080',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
  },
  detail: {
    padding: 10,
    backgroundColor: '#fff',
    height: 200,
  },
});
