import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Switch, Alert } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useTransactions } from '@/hooks/useTransactions';

export default function EditTransactionScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const { getTransactionById, updateTransaction } = useTransactions();

  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [isIncome, setIsIncome] = useState(false);

  useEffect(() => {
    if (id) {
      const transaction = getTransactionById(id);
      if (transaction) {
        setDescription(transaction.description);
        setAmount(transaction.amount.toString());
        setIsIncome(transaction.isIncome);
      }
    }
  }, [id, getTransactionById]);

  const handleUpdateTransaction = () => {
    if (!description || !amount) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    if (id) {
      updateTransaction(id, {
        description,
        amount: parseFloat(amount),
        isIncome,
      });
      router.back();
      Alert.alert('Success', 'Transaction updated successfully');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Transaction</Text>
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
      <Button title="Update Transaction" onPress={handleUpdateTransaction} />
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
