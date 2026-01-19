import { logger } from '../utils/logger';

export interface Transaction {
  id: string;
  type: 'revenue' | 'expense';
  amount: number;
  description: string;
  pillar?: string;
  creatorSplit?: number; // 70% for revenue
  platformSplit?: number; // 30% for revenue
  date: string;
  createdAt: string;
}

export interface FinancialSummary {
  totalRevenue: number;
  totalExpenses: number;
  netIncome: number;
  creatorFund: number; // 70% of revenue
  platformFund: number; // 30% of revenue
  transactionCount: number;
  revenueCount: number;
  expenseCount: number;
  lastUpdated: string;
}

class FinancialService {
  // In-memory storage for ULTRA-MVP
  private transactions: Transaction[] = [];
  private nextId = 1;

  constructor() {
    logger.info('✅ Financial service initialized (in-memory mode)');
  }

  addTransaction(
    type: 'revenue' | 'expense',
    amount: number,
    description: string,
    pillar?: string
  ): Transaction {
    const transaction: Transaction = {
      id: String(this.nextId++),
      type,
      amount,
      description,
      pillar,
      date: new Date().toISOString().split('T')[0], // YYYY-MM-DD
      createdAt: new Date().toISOString(),
    };

    // Calculate 70/30 split for revenue
    if (type === 'revenue') {
      transaction.creatorSplit = amount * 0.7; // 70% to creator
      transaction.platformSplit = amount * 0.3; // 30% to platform
      logger.info(
        `💰 Revenue added: $${amount.toFixed(2)} → Creator: $${transaction.creatorSplit.toFixed(2)} | Platform: $${transaction.platformSplit.toFixed(2)}`
      );
    } else {
      logger.info(`💸 Expense added: $${amount.toFixed(2)} - ${description}`);
    }

    this.transactions.push(transaction);
    return transaction;
  }

  getTransactions(type?: 'revenue' | 'expense', pillar?: string): Transaction[] {
    let filtered = this.transactions;

    if (type) {
      filtered = filtered.filter((t) => t.type === type);
    }

    if (pillar) {
      filtered = filtered.filter((t) => t.pillar === pillar);
    }

    // Sort by date descending (newest first)
    return filtered.sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  getTransaction(id: string): Transaction | null {
    return this.transactions.find((t) => t.id === id) || null;
  }

  getSummary(pillar?: string): FinancialSummary {
    let transactions = this.transactions;

    if (pillar) {
      transactions = transactions.filter((t) => t.pillar === pillar);
    }

    const revenue = transactions.filter((t) => t.type === 'revenue');
    const expenses = transactions.filter((t) => t.type === 'expense');

    const totalRevenue = revenue.reduce((sum, t) => sum + t.amount, 0);
    const totalExpenses = expenses.reduce((sum, t) => sum + t.amount, 0);
    const creatorFund = revenue.reduce((sum, t) => sum + (t.creatorSplit || 0), 0);
    const platformFund = revenue.reduce((sum, t) => sum + (t.platformSplit || 0), 0);

    return {
      totalRevenue,
      totalExpenses,
      netIncome: totalRevenue - totalExpenses,
      creatorFund,
      platformFund,
      transactionCount: transactions.length,
      revenueCount: revenue.length,
      expenseCount: expenses.length,
      lastUpdated: new Date().toISOString(),
    };
  }

  getPillarBreakdown(): Record<
    string,
    { revenue: number; expenses: number; count: number }
  > {
    const breakdown: Record<
      string,
      { revenue: number; expenses: number; count: number }
    > = {};

    for (const transaction of this.transactions) {
      const pillar = transaction.pillar || 'uncategorized';

      if (!breakdown[pillar]) {
        breakdown[pillar] = { revenue: 0, expenses: 0, count: 0 };
      }

      if (transaction.type === 'revenue') {
        breakdown[pillar].revenue += transaction.amount;
      } else {
        breakdown[pillar].expenses += transaction.amount;
      }

      breakdown[pillar].count++;
    }

    return breakdown;
  }

  getRecentTransactions(limit = 10): Transaction[] {
    return this.transactions
      .sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )
      .slice(0, limit);
  }

  // For development/testing
  clearAll(): void {
    this.transactions = [];
    this.nextId = 1;
    logger.info('🗑️  All financial data cleared');
  }

  getDataSize(): { transactions: number; memory: string } {
    return {
      transactions: this.transactions.length,
      memory: 'in-memory (volatile)',
    };
  }
}

export const financialService = new FinancialService();
