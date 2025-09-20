import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Switch, Alert } from 'react-native';
import { useTransactions } from '@/hooks/useTransactions';

export default function AddTransactionScreen() {
  const { addTransaction } = useTransactions();
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [isIncome, setIsIncome] = useState(false);

  const handleAddTransaction = () => {
    if (!description || !amount) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    addTransaction({
      description,
      amount: parseFloat(amount),
      isIncome,
    });

    setDescription('');
    setAmount('');
    setIsIncome(false);
    Alert.alert('Success', 'Transaction added successfully');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Transaction</Text>
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      <View style={styles.switchContainer}>
        <Text>Expense</Text>
        <Switch
          value={isIncome}
          onValueChange={setIsIncome}
        />
        <Text>Income</Text>
      </View>
      <Button title="Add Transaction" onPress={handleAddTransaction} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  }
});
