import React from 'react';
import { Text, View } from 'react-native';

export default function InfoItem({ label, value }) {
  return (
    <View style={{ marginBottom: 8 }}>
      <Text style={{ fontWeight: 'bold' }}>{label}</Text>
      <Text>{value}</Text>
    </View>
  );
}
