import { StyleSheet, Text, View } from 'react-native';
import { useTransactions } from '@/hooks/useTransactions';

export default function HomeScreen() {
  const { transactions } = useTransactions();

  const income = transactions
    .filter((t) => t.isIncome)
    .reduce((sum, t) => sum + t.amount, 0);

  const expenses = transactions
    .filter((t) => !t.isIncome)
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = income - expenses;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.separator} />
      <Text style={styles.text}>Income: ${income.toFixed(2)}</Text>
      <Text style={styles.text}>Expenses: ${expenses.toFixed(2)}</Text>
      <Text style={styles.text}>Balance: ${balance.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    backgroundColor: '#eee',
  },
  text: {
    fontSize: 18,
    marginVertical: 5,
  }
});
