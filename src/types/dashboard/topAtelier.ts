export interface  ITopAtelier {
    id: string;
    name: string;
    slug: string;
    avatar: string;
    createdAt: string;
    updatedAt : string;
    _count : {
        orders: number;
        clients: number;
        employers_shops: number;
    },
    orders:[
        {
            price: number;
        }
    ]
}

export type TopAtelierResponse = {
    statusCode: number;
    message: string;
    data: ITopAtelier;
  };