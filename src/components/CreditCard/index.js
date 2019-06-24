import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function CreditCard({
  text, final, type, children, actions,
}) {
  const [showChildren, setShowChildren] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>{text}</Text>
        <TouchableOpacity onPress={() => setShowChildren(!showChildren)}>
          <Text style={styles.expand}>{showChildren ? 'ocultar' : 'expandir'}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardNumberContainer}>
        <Icon name={type} size={40} color="#fff" />
        <Text style={styles.cardNumber}>final {final}</Text>
      </View>

      <View style={styles.actions}>
        {actions && actions.map(a => (
          <TouchableOpacity key={a.text} onPress={a.onPress}>
            <Text style={styles.action}>{a.text}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {showChildren ? <View style={styles.children}>{children}</View> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b88337',
    minHeight: 130,
    padding: 25,
    borderRadius: 4,
    justifyContent: 'space-between',
    marginBottom: 5,
    marginTop: 5,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  cardNumberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  actions: {
    flexDirection: 'row',
  },
  children: {
    borderTopWidth: 0.5,
    borderTopColor: '#ddd',
    paddingTop: 10,
  },
  text: {
    flex: 1,
    fontSize: 17,
    flexWrap: 'wrap',
    marginRight: 10,
    color: '#fff',
  },
  cardNumber: {
    fontSize: 17,
    marginLeft: 10,
    color: '#fff',
  },
  expand: {
    color: '#fff',
  },
  action: {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
