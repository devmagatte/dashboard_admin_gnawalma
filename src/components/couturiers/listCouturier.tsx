import { ListCouturier } from '@/hooks/couturier/listCouturier';
import React, { useEffect, useState } from 'react'

export default function ListCouturierComp() {
    const [couturiers, setCouturiers] = useState<ICouturier[]>([]);
    const [errorMessages, setErrorMessage] = useState<string | null>(null);
    const { mutateAsync, errorMessage } = ListCouturier();


    const [typeCouturier, setTypeCouturier] = useState<string>('ADMIN_SHOP');

    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
    const couturiersPerPage = 10;
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchCouturierss(typeCouturier, currentPage + 1);
    }, [currentPage]);

    const fetchCouturierss = async (type:string, page: number) => {
        setLoading(true);
        try {
            const result = await mutateAsync({type, page, limit: couturiersPerPage });
            if (result.data && Array.isArray(result.data.list) && result.data.list.length > 0) {
                setCouturiers(result.data.list);
                setTotalPages(Math.ceil(result.data.pagination.total / couturiersPerPage));
            } else {
                setCouturiers([]);
                setTotalPages(1);
            }
        } catch (error) {
            setErrorMessage('Échec du chargement des courturiers');
        } finally {
            setTimeout(() => setLoading(false), 1000);
        }
    };
  return (
    <>
          <div className="content-body default-height">
            <div className="container-fluid">
                <div className="page-titles">
					<ol className="breadcrumb">
						<li className="breadcrumb-item"><a href="javascript:void(0)">Table</a></li>
						<li className="breadcrumb-item active"><a href="javascript:void(0)">Bootstrap</a></li>
					</ol>
                </div>

                 <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Recent Payments Queue</h4>
                            </div>
                            <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-responsive-md">
                                <thead>
                                    <tr>
                                        <th style={{width:"80px"}}>#</th>
                                        <th>complet</th>
                                        <th>Numéro de téléphone</th>
                                        <th>Nombre de commande</th>
                                        <th>Date</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {couturiers.length > 0 ? (
                                        couturiers.map((couturier, index) => (
                                            <tr key={index}>
                                                <td><strong className="text-black">{String(index + 1).padStart(2, '0')}</strong></td>
                                                <td>{couturier.name}</td>
                                                <td>{couturier.phoneNumber}</td>
                                                <td>{topAtelier._count.orders}</td>
                                                <td><span className="badge light badge-success">{topAtelier.createdAt}</span></td>
                                                <td>
                                                    <div className="dropdown">
                                                        <button type="button" className="btn btn-success light sharp" data-bs-toggle="dropdown">
                                                            <svg width="20px" height="20px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"/><circle fill="#000000" cx="5" cy="12" r="2"/><circle fill="#000000" cx="12" cy="12" r="2"/><circle fill="#000000" cx="19" cy="12" r="2"/></g></svg>
                                                        </button>
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#">Edit</a>
                                                            <a className="dropdown-item" href="#">Delete</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan={6}>pas donné</td>
                                        </tr>
                                    )}
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                            <nav className='center'>
                                    <ul className="pagination pagination-gutter">
                                        <li className="page-item page-indicator">
                                            <a className="page-link" href="javascript:void()">
                                                <i className="la la-angle-left"></i></a>
                                        </li>
                                        <li className="page-item active"><a className="page-link" href="javascript:void()">1</a>
                                        </li>
                                        <li className="page-item"><a className="page-link" href="javascript:void()">2</a></li>
                                        <li className="page-item"><a className="page-link" href="javascript:void()">3</a></li>
                                        <li className="page-item"><a className="page-link" href="javascript:void()">4</a></li>
                                        <li className="page-item page-indicator">
                                            <a className="page-link" href="javascript:void()">
                                                <i className="la la-angle-right"></i></a>
                                        </li>
                                    </ul>
                                </nav>
                        </div>
                    </div>
				</div>
            </div>
        </div>
    </>
  )
}
