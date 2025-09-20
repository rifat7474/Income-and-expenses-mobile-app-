import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useTransactions, Transaction } from '@/hooks/useTransactions';

export default function TransactionsScreen() {
  const { transactions } = useTransactions();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transactions</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }: { item: Transaction }) => (
          <View style={styles.transactionItem}>
            <Text>{item.description}</Text>
            <Text style={{ color: item.isIncome ? 'green' : 'red' }}>
              {item.isIncome ? '+' : '-'} ${item.amount.toFixed(2)}
            </Text>
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
    width: '100%',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
