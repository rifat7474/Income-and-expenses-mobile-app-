import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';
import { TransactionsProvider } from '@/hooks/useTransactions';

export default function RootLayout() {
  return (
    <TransactionsProvider>
      <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
          }}
        />
        <Tabs.Screen
          name="add"
          options={{
            title: 'Add',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="plus-square" color={color} />,
          }}
        />
        <Tabs.Screen
          name="transactions"
          options={{
            title: 'Transactions',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="list" color={color} />,
          }}
        />
      </Tabs>
      <StatusBar style="auto" />
    </TransactionsProvider>
  );
}
