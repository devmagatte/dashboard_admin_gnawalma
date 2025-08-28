import { TopAtelierDashboard } from '@/hooks/dashboard/statDashboard';
import { ITopAtelier } from '@/types/dashboard/topAtelier';
import React, { useEffect, useState } from 'react'

export default function TopAtelier() {
    const [topAteliers, setTopAtelier] = useState<ITopAtelier[]>([]);
    const { mutateAsync, errorMessage } = TopAtelierDashboard();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchTopAtelier();
    }, []);

    const fetchTopAtelier = async () => {
        setLoading(true);
        try {
            const result = await mutateAsync();
            if (Array.isArray(result.data) && result.data.length > 0) {
                setTopAtelier(result.data);
            } else {
                setTopAtelier([]);
            }
        } catch (error: any) {
            // setErrorMessage(error?.response?.data?.errors || "Une erreur est survenue");
        } finally {
            setTimeout(() => setLoading(false), 1000);
        }
    };
  return (
    <>
         <div className="row">
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">Les meilleurs Couturiers</h4>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-responsive-md">
                                <thead>
                                    <tr>
                                        <th style={{width:"80px"}}>#</th>
                                        <th>Nom complet</th>
                                        <th>Nombre de client</th>
                                        <th>Nombre de commande</th>
                                        <th>Date</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {topAteliers.length > 0 ? (
                                        topAteliers.map((topAtelier, index) => (
                                            <tr key={index}>
                                                <td><strong className="text-black">{String(index + 1).padStart(2, '0')}</strong></td>
                                                <td>{topAtelier.name}</td>
                                                <td>{topAtelier._count.clients}</td>
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
                </div>
            </div>
        </div>
    </>
  )
}
