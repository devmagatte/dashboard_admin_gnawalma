export interface IUser {
    total: number;
    byType: {
        ADMIN_SHOP: number;
        EMPLOYER: number;
    };
    byStatus: {
        ENABLED: number;
        DESABLED: number;
        BLOCKED: number;
    };
    recentRegistrations: number;
}
export interface IShops {
    total: number;
    withEmployers: number;
    withClients: number;
    averageEmployersPerShop: number;
    averageClientsPerShop: number;
}

export interface IOrders {
    total: number;
    delivered: number;
    pending: number;
    totalRevenue: number;
    averageOrderValue: number;
    recentOrders: number;
}



export interface ISubscriptions {
  active: number;
  expired: number;
  totalRevenue: number;
  byType: Array<{
    name: string;
    count: number;
    revenue: number;
  }>;
}

export interface ITransactions {
    total: number;
    totalAmount: number;
    recentTransactions: number;
}
export interface IGrowth {
    usersGrowthRate: number;
    shopsGrowthRate: number;
    ordersGrowthRate: number;
    revenueGrowthRate: number;
}
export interface IStatDashboard{
    users: IUser;
    shops: IShops;
    orders: IOrders;
    subscriptions: ISubscriptions;
    transactions: ITransactions;
    growth: IGrowth;
}

export type StatDashbordResponse = {
    statusCode: number;
    message: string;
    data: IStatDashboard
  };