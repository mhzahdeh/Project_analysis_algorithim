import axios from 'axios';

const API_BASE_URL = "https://your-backend-api.com"; // Replace with real URL later

export const fetchOrders = async () => {
  // Dummy data until backend is ready:
  return Promise.resolve([
    { id: 'ORD001', item: 'Burger', amount: 12, status: 'Delivered', deliveryTime: '35 mins' },
    { id: 'ORD002', item: 'Pizza', amount: 20, status: 'Pending', deliveryTime: '-' },
  ]);
};

export const fetchReviews = async () => {
  return Promise.resolve([
    { id: 'REV001', customer: 'John', comment: 'Great food!', rating: 5 },
    { id: 'REV002', customer: 'Emma', comment: 'Average service.', rating: 3 },
  ]);
};

export const fetchRefunds = async () => {
  return Promise.resolve([
    { id: 'REF001', orderId: 'ORD001', reason: 'Late delivery', amount: 5 },
    { id: 'REF002', orderId: 'ORD002', reason: 'Wrong item', amount: 12 },
  ]);
};

export const fetchDashboardAnalytics = async () => {
  return Promise.resolve({
    totalOrders: 1450,
    avgDeliveryTime: '32 mins',
    satisfactionScore: '87%'
  });
};
