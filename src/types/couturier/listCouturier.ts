interface IPagination {
    total: number;
    page : number;
}
interface ICouturier {
    code: string;
    name: string;
    phoneNumber: string;
    email: string;
    status: string;
    type: string;
    createdAt: string;
}
type ListCouturierResponse = {
    statusCode: number;
    message: string;
    data :{
        list: ICouturier;
        pagination : IPagination;
    }
}