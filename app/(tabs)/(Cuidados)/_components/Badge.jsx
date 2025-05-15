import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';

export default function Badge({ icon, label }) {
  return (
    <View style={{
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#e0f2f1',
      borderRadius: 16,
      paddingVertical: 4,
      paddingHorizontal: 8,
      marginRight: 8,
      marginBottom: 8
    }}>
      <Ionicons name={icon} size={16} color="#00796b" />
      <Text style={{ marginLeft: 6, color: '#004d40' }}>{label}</Text>
    </View>
  );
}
