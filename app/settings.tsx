import { StyleSheet, View, Button, Alert } from 'react-native';
import { useTransactions } from '@/hooks/useTransactions';

export default function SettingsScreen() {
  const { clearAllTransactions } = useTransactions();

  const handleClearData = () => {
    Alert.alert(
      "Clear All Data",
      "Are you sure you want to delete all transaction data? This action cannot be undone.",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Clear Data", style: "destructive", onPress: () => clearAllTransactions() },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Button title="Clear All Data" onPress={handleClearData} color="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});
