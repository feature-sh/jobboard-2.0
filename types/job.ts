export interface Job {
  id: string;
  title: string;
  repository: string;
  price: number;
  currency: string;
  status: 'Disputed' | 'Engaged' | 'Open';
  timeRemaining: string;
  depositCost?: number;
  depositCurrency?: string;
  label?: string;
  network?: string;
  endDate?: string;
  arbitrationFee?: number;
  arbitrator?: string;
}
