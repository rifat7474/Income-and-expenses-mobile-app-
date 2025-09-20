import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { useTransactions } from '@/hooks/useTransactions';
import { Ionicons } from '@expo/vector-icons';

interface StatCardProps {
  title: string;
  value: number;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
}

const StatCard = ({ title, value, icon, color }: StatCardProps) => (
  <View style={styles.card}>
    <Ionicons name={icon} size={32} color={color} />
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={[styles.cardValue, { color }]}>${value.toFixed(2)}</Text>
  </View>
);

export default function HomeScreen() {
  const { transactions, isLoading } = useTransactions();

  if (isLoading) {
    return (
      <View style={[styles.container, { justifyContent: 'center' }]}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

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
      <StatCard title="Income" value={income} icon="arrow-up-circle" color="green" />
      <StatCard title="Expenses" value={expenses} icon="arrow-down-circle" color="red" />
      <StatCard title="Balance" value={balance} icon="wallet" color="blue" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
  },
  cardValue: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 5,
  }
});
