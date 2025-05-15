import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

export default function InfoBadge({ label, onInfoPress }) {
  return (
    <View style={{
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#d0de92',
      paddingVertical: 6,
      paddingHorizontal: 12,
      borderRadius: 12,
      marginRight: 8,
      marginBottom: 8
    }}>
      <Text style={{ fontWeight: '500', color: '#333' }}>{label}</Text>
      {onInfoPress && (
        <TouchableOpacity onPress={onInfoPress} style={{ marginLeft: 6 }}>
          <Ionicons name="help-circle-outline" size={18} color="#4a4a4a" />
        </TouchableOpacity>
      )}
    </View>
  );
}
