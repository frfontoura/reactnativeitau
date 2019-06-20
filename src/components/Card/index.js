import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';

export default function Card({ text, children, actions }) {
  const [showChildren, setShowChildren] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>{text}</Text>
        <TouchableOpacity onPress={() => setShowChildren(!showChildren)}>
          <Text>expandir</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.actions}>
        {actions && actions.map(a => (
          <TouchableOpacity key={a.text} onPress={a.onPress}>
            <Text style={styles.action}>{a.text}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {showChildren ? <View>{children}</View> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    minHeight: 120,
    padding: 25,
    borderRadius: 4,
    justifyContent: 'space-between',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  actions: {
    flexDirection: 'row',
  },
  text: {
    flex: 1,
    fontSize: 23,
    flexWrap: 'wrap',
    marginRight: 10,
  },
  action: {
    color: '#0078c8',
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
