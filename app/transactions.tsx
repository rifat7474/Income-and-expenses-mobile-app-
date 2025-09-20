import { StyleSheet, Text, View, FlatList, ActivityIndicator, TouchableOpacity, Alert } from 'react-native';
import { useTransactions, Transaction } from '@/hooks/useTransactions';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TransactionsScreen() {
  const { transactions, isLoading, deleteTransaction } = useTransactions();

  const handleDelete = (id: string) => {
    Alert.alert(
      "Delete Transaction",
      "Are you sure you want to delete this transaction?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Delete", style: "destructive", onPress: () => deleteTransaction(id) },
      ]
    );
  };

  if (isLoading) {
    return (
      <View style={[styles.container, { justifyContent: 'center' }]}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transactions</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }: { item: Transaction }) => (
          <View style={styles.transactionItem}>
            <View>
              <Text style={styles.itemDescription}>{item.description}</Text>
              <Text style={{ color: item.isIncome ? 'green' : 'red' }}>
                {item.isIncome ? '+' : '-'} ${item.amount.toFixed(2)}
              </Text>
            </View>
            <View style={styles.buttonsContainer}>
              <Link href={`/edit/${item.id}`} asChild>
                <TouchableOpacity style={styles.button}>
                  <Ionicons name="pencil" size={20} color="blue" />
                </TouchableOpacity>
              </Link>
              <TouchableOpacity style={styles.button} onPress={() => handleDelete(item.id)}>
                <Ionicons name="trash" size={20} color="red" />
              </TouchableOpacity>
            </View>
          </View>
        )}
        ListEmptyComponent={<Text style={{textAlign: 'center'}}>No transactions yet.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemDescription: {
    fontSize: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  button: {
    marginLeft: 15,
  }
});
