export interface Category {
  id: string;
  name: string;
  color: string;
  icon: string; // Corresponds to a lucide-react-native icon name
  isIncome?: boolean;
}

export const categories: Category[] = [
  // Income
  { id: 'salary', name: 'Salary', icon: 'briefcase', color: '#16a34a', isIncome: true },
  { id: 'freelance', name: 'Freelance', icon: 'pencil', color: '#2563eb', isIncome: true },
  { id: 'investment', name: 'Investment', icon: 'trending-up', color: '#ca8a04', isIncome: true },

  // Expenses
  { id: 'food', name: 'Food', icon: 'utensils', color: '#ea580c', isIncome: false },
  { id: 'transport', name: 'Transport', icon: 'car', color: '#ef4444', isIncome: false },
  { id: 'housing', name: 'Housing', icon: 'home', color: '#0891b2', isIncome: false },
  { id: 'shopping', name: 'Shopping', icon: 'shopping-bag', color: '#a855f7', isIncome: false },
  { id: 'entertainment', name: 'Entertainment', icon: 'film', color: '#db2777', isIncome: false },
  { id: 'health', name: 'Health', icon: 'heart-pulse', color: '#65a30d', isIncome: false },
  { id: 'other', name: 'Other', icon: 'shapes', color: '#71717a', isIncome: false },
];
