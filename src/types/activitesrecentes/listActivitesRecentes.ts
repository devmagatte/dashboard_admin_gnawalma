interface IRecentUsers {
    id: string;
    name: string;
    createdAt: string;
    type: string;
  }
  
  interface IRecentShops {
    id: string;
    name: string;
    createdAt: string;
  }
  
  interface IRecentOrders {
    id: string;
    modeleName: string;
    price: number;
    createdAt: string;
    client: {
      name: string;
    };
  }
  
  interface IRecentSubscriptions {
    id: string;
    createdAt: string;
    user: {
      name: string;
    };
    typeSubscription: {
      name: string;
    };
  }
  export interface IRecentesActivites{
    recentUsers: IRecentUsers[];
    recentShops: IRecentShops[];
    recentOrders: IRecentOrders[];
    recentSubscriptions: IRecentSubscriptions[];
  }
  
  export  type ListRecentesActivitesResponse = {
    statusCode: number;
    message: string;
    data: IRecentesActivites;
  };