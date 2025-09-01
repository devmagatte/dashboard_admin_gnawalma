import { ListCouturier } from '@/hooks/couturier/listCouturier';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function ListCouturierComp() {
  const [couturiers, setCouturiers] = useState<ICouturier[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { mutateAsync } = ListCouturier();

  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const couturiersPerPage = 10;
  const [loading, setLoading] = useState(false);
  const [types, setTypes] = useState<'ADMIN_SHOP' | 'ASSISTANT'>('ADMIN_SHOP');

  useEffect(() => {
    fetchCouturiers(currentPage + 1);
  }, [currentPage, types]);

  const fetchCouturiers = async (page: number) => {
    setLoading(true);
    try {
      const result = await mutateAsync({ type: types, page, limit: couturiersPerPage });
      if (result.data && Array.isArray(result.data.list) && result.data.list.length > 0) {
        setCouturiers(result.data.list);
        setTotalPages(Math.ceil(result.data.pagination.total / couturiersPerPage));
      } else {
        setCouturiers([]);
        setTotalPages(1);
      }
    } catch {
      setErrorMessage("Échec du chargement des couturiers");
    } finally {
      setLoading(false);
    }
  };

  const handlePageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected);
  };

  return (
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
          <div className="col-lg-12">
            {errorMessage && (
              <div className="alert alert-danger">{errorMessage}</div>
            )}
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h4 className="card-title">Liste des Couturiers</h4>
                <select
                  value={types}
                  onChange={(e) => {
                    setTypes(e.target.value as 'ADMIN_SHOP' | 'ASSISTANT');
                    setCurrentPage(0);
                  }}
                  className="form-select w-auto"
                >
                  <option value="ADMIN_SHOP">Admin Shop</option>
                  <option value="ASSISTANT">Assistant</option>
                </select>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-responsive-md">
                    <thead>
                      <tr>
                        <th style={{ width: '80px' }}>#</th>
                        <th>Nom complet</th>
                        <th>Numéro de téléphone</th>
                        <th>Email</th>
                        <th>Date d’inscription</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {loading ? (
                        Array.from({ length: couturiers.length || couturiersPerPage }).map((_, index) => (
                          <tr key={index}>
                            <td><Skeleton width={40} /></td>
                            <td><Skeleton width={120} /></td>
                            <td><Skeleton width={100} /></td>
                            <td><Skeleton width={150} /></td>
                            <td><Skeleton width={100} /></td>
                            <td><Skeleton width={80} /></td>
                            <td><Skeleton width={50} /></td>
                          </tr>
                        ))
                      ) : couturiers.length > 0 ? (
                        couturiers.map((couturier, index) => (
                          <tr key={index}>
                            <td>
                              <strong className="text-black">
                                {String(index + 1 + currentPage * couturiersPerPage).padStart(2, '0')}
                              </strong>
                            </td>
                            <td>{couturier.name}</td>
                            <td>{couturier.phoneNumber}</td>
                            <td>{couturier.email}</td>
                            <td>{new Date(couturier.createdAt).toLocaleDateString('fr-FR')}</td>
                            <td>
                              <span className={`badge light ${couturier.status === 'ENABLED' ? 'badge-success' : couturier.status === 'PENDING' ? 'badge-warning' : 'badge-danger'}`}>
                                {couturier.status}
                              </span>
                            </td>
                            <td>
                              <div className="dropdown">
                                <button
                                  type="button"
                                  className="btn btn-success light sharp"
                                  data-bs-toggle="dropdown"
                                >
                                  <svg width="20px" height="20px" viewBox="0 0 24 24">
                                    <g fill="none" fillRule="evenodd">
                                      <circle fill="#000000" cx="5" cy="12" r="2" />
                                      <circle fill="#000000" cx="12" cy="12" r="2" />
                                      <circle fill="#000000" cx="19" cy="12" r="2" />
                                    </g>
                                  </svg>
                                </button>
                                <div className="dropdown-menu">
                                  <button className="dropdown-item">Edit</button>
                                  <button className="dropdown-item">Delete</button>
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={7} className="text-center">
                            Aucun couturier trouvé
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
                <ReactPaginate
                  previousLabel={'<<'}
                  nextLabel={'>>'}
                  breakLabel={'...'}
                  pageCount={totalPages}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={handlePageClick}
                  containerClassName={'pagination justify-content-center mt-2'}
                  pageClassName={'page-item'}
                  pageLinkClassName={'page-link'}
                  previousClassName={'page-item'}
                  previousLinkClassName={'page-link'}
                  nextClassName={'page-item'}
                  nextLinkClassName={'page-link'}
                  activeClassName={'active'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
