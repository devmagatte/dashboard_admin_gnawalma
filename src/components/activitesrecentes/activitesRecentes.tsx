import { ListRecentesActivites } from '@/hooks/recentesActivites/listRecentesActivites';
import { IRecentesActivites } from '@/types/activitesrecentes/listActivitesRecentes';
import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function ActivitesRecentesComp() {
  const [recentesActivites, setRecentesActivites] = useState<IRecentesActivites | null>(null);
  const { mutateAsync, errorMessage } = ListRecentesActivites();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchActivitesRecentes();
  }, []);

  const fetchActivitesRecentes = async () => {
      setLoading(true);
      try {
          const result = await mutateAsync();
          setRecentesActivites(result.data);
      } catch (error: any) {
          // setErrorMessage(error?.response?.data?.errors || "Une erreur est survenue");
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
            <li className="breadcrumb-item">
              <button className="btn btn-link p-0">Table</button>
            </li>
            <li className="breadcrumb-item active">
              <button className="btn btn-link p-0">Couturiers</button>
            </li>
          </ol>
        </div>

        <div className="row">
          <div className="col-lg-6">
            {errorMessage && (
              <div className="alert alert-danger">{errorMessage}</div>
            )}
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h4 className="card-title">Ateliers</h4>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-responsive-md">
                    <thead>
                      <tr>
                        <th style={{ width: '80px' }}>#</th>
                        <th>Nom</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {loading ? (
                        Array.from({ length: (recentesActivites?.recentShops?.length ?? 5) }).map((_, index) => (
                          <tr key={index}>
                            <td><Skeleton width={40} /></td>
                            <td><Skeleton width={160} /></td>
                            <td><Skeleton width={120} /></td>
                          </tr>
                        ))
                      ) : (recentesActivites?.recentShops?.length ?? 0) > 0 ? (
                        recentesActivites!.recentShops.map((shop, index) => (
                          <tr key={shop.id ?? index}>
                            <td><strong className="text-black">{String(index + 1).padStart(2, '0')}</strong></td>
                            <td>{shop.name}</td>
                            <td>{new Date(shop.createdAt).toLocaleString('fr-FR')}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={3} className="text-center">
                            Aucun couturier trouvé
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            {errorMessage && (
              <div className="alert alert-danger">{errorMessage}</div>
            )}
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h4 className="card-title">Couturiers</h4>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-responsive-md">
                    <thead>
                      <tr>
                        <th style={{ width: '80px' }}>#</th>
                        <th>Nom</th>
                        <th>Type</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {loading ? (
                        Array.from({ length: (recentesActivites?.recentUsers?.length ?? 5) }).map((_, index) => (
                          <tr key={index}>
                            <td><Skeleton width={40} /></td>
                            <td><Skeleton width={160} /></td>
                            <td><Skeleton width={120} /></td>
                            <td><Skeleton width={120} /></td>
                          </tr>
                        ))
                      ) : (recentesActivites?.recentUsers?.length ?? 0) > 0 ? (
                        recentesActivites!.recentUsers.map((shop, index) => (
                          <tr key={shop.id ?? index}>
                            <td><strong className="text-black">{String(index + 1).padStart(2, '0')}</strong></td>
                            <td>{shop.name}</td>
                            <td>{shop.type}</td>
                            <td>{new Date(shop.createdAt).toLocaleString('fr-FR')}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={3} className="text-center">
                            Aucun couturier trouvé
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            {errorMessage && (
              <div className="alert alert-danger">{errorMessage}</div>
            )}
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h4 className="card-title">Commandes</h4>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-responsive-md">
                    <thead>
                      <tr>
                        <th style={{ width: '80px' }}>#</th>
                        <th>Nom du client</th>
                        <th>Nom du model</th>
                        <th>Prix</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {loading ? (
                        Array.from({ length: (recentesActivites?.recentOrders?.length ?? 5) }).map((_, index) => (
                          <tr key={index}>
                            <td><Skeleton width={40} /></td>
                            <td><Skeleton width={160} /></td>
                            <td><Skeleton width={160} /></td>
                            <td><Skeleton width={120} /></td>
                            <td><Skeleton width={120} /></td>
                          </tr>
                        ))
                      ) : (recentesActivites?.recentOrders?.length ?? 0) > 0 ? (
                        recentesActivites!.recentOrders.map((shop, index) => (
                          <tr key={shop.id ?? index}>
                            <td><strong className="text-black">{String(index + 1).padStart(2, '0')}</strong></td>
                            <td>{shop.client.name}</td>
                            <td>{shop.modeleName}</td>
                            <td>{shop.price}</td>
                            <td>{new Date(shop.createdAt).toLocaleString('fr-FR')}</td>
                            </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={3} className="text-center">
                            Aucun couturier trouvé
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            {errorMessage && (
              <div className="alert alert-danger">{errorMessage}</div>
            )}
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h4 className="card-title">Abonnements</h4>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-responsive-md">
                    <thead>
                      <tr>
                        <th style={{ width: '80px' }}>#</th>
                        <th>Nom</th>
                        <th>Nom</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {loading ? (
                        Array.from({ length: (recentesActivites?.recentSubscriptions?.length ?? 5) }).map((_, index) => (
                          <tr key={index}>
                            <td><Skeleton width={40} /></td>
                            <td><Skeleton width={160} /></td>
                            <td><Skeleton width={120} /></td>
                          </tr>
                        ))
                      ) : (recentesActivites?.recentSubscriptions?.length ?? 0) > 0 ? (
                        recentesActivites!.recentSubscriptions.map((shop, index) => (
                          <tr key={shop.id ?? index}>
                            <td><strong className="text-black">{String(index + 1).padStart(2, '0')}</strong></td>
                            <td>{shop.user.name}</td>
                            <td><span className="badge light badge-success">{shop.typeSubscription.name}</span></td>
                            <td>{new Date(shop.createdAt).toLocaleString('fr-FR')}</td>
                            </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={3} className="text-center">
                            Aucun couturier trouvé
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</>
  )
}
