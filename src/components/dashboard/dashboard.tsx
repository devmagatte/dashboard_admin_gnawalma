import { StatDashboard } from '@/hooks/dashboard/statDashboard';
import type { IStatDashboard } from '@/types/dashboard/statDashbord';
import React, { useEffect, useState } from 'react'
import TopAtelier from './topAtelier';
import { GiTakeMyMoney } from 'react-icons/gi';

export default function Dashboard() {
	const [dashboard, setDashboard] = useState<IStatDashboard | null>();

	const { mutateAsync, errorMessage } = StatDashboard();
  
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		fetchStateDashboard();
	  }, []);
	
	  const fetchStateDashboard = async () => {
		setLoading(true);
		const result = await mutateAsync();
	
		try {
		  if (result.data) {
			setDashboard(result.data)
		  }
		} catch (error) {
		  // errorMessage(error);
		}finally {
		   setTimeout(() => {
			   setLoading(false);
		   }, 1000);
	   }
	  }
  return (
    <>
        <div className="content-body default-height">
			<div className="container-fluid">
				<div className="row">
					<div className="col-xl-12 col-xxl-12">
						<div className="row">
							<div className="col-xl-4 col-lg-6 col-sm-6">
								<div className="widget-stat card">
									<div className="card-body p-4">
										<div className="media ai-icon">
											<span className="me-3 bgl-primary text-primary">
												<svg id="icon-customers" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-user">
													<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
													<circle cx="12" cy="7" r="4"></circle>
												</svg>
											</span>
											<div className="media-body">
												<p className="mb-1">Atéliers</p>
												<h4 className="mb-0">{dashboard?.shops.total}</h4>
												{/* <span className="badge badge-primary">+3.5%</span> */}
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl-4 col-lg-6 col-sm-6">
								<div className="widget-stat card">
									<div className="card-body p-4">
										<div className="media ai-icon">
											<span className="me-3 bgl-warning text-warning">
												<svg id="icon-orders" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-file-text">
													<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
													<polyline points="14 2 14 8 20 8"></polyline>
													<line x1="16" y1="13" x2="8" y2="13"></line>
													<line x1="16" y1="17" x2="8" y2="17"></line>
													<polyline points="10 9 9 9 8 9"></polyline>
												</svg>
											</span>
											<div className="media-body">
												<p className="mb-1">Commandes</p>
												<h4 className="mb-0">{dashboard?.orders.total}</h4>
												{/* <span className="badge badge-warning">+3.5%</span> */}
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="col-xl-4 col-lg-6 col-sm-6">
								<div className="widget-stat card">
									<div className="card-body p-4">
										<div className="media ai-icon">
											<span className="me-3 bgl-success text-success">
												<svg id="icon-database-widget" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-database">
													<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
													<path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
													<path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
												</svg>
											</span>
											<div className="media-body">
												<p className="mb-1">Transactions</p>
												<h4 className="mb-0">{dashboard?.transactions.total}	</h4>
												{/* <span className="badge badge-success">-3.5%</span> */}
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl-4 col-lg-6 col-sm-6">
								<div className="widget-stat card">
									<div className="card-body  p-4">
										<div className="media ai-icon">
											<span className="me-3 bgl-danger text-danger">
												<svg id="icon-revenue" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-dollar-sign">
													<line x1="12" y1="1" x2="12" y2="23"></line>
													<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
												</svg>
											</span>
											<div className="media-body">
												<p className="mb-1">Abonnement {dashboard?.subscriptions.byType[0].name}</p>
												<h4 className="mb-0">{dashboard?.subscriptions.byType[0].revenue} XOF</h4> /
												<span className="badge badge-danger">{dashboard?.subscriptions.byType[0].count}</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							
							<div className="col-xl-4 col-lg-6 col-sm-6">
								<div className="widget-stat card">
									<div className="card-body  p-4">
										<div className="media ai-icon">
											<span className="me-3 bgl-danger text-danger">
												<svg id="icon-revenue" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-dollar-sign">
													<line x1="12" y1="1" x2="12" y2="23"></line>
													<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
												</svg>
											</span>
											<div className="media-body">
												<p className="mb-1">Abonnement {dashboard?.subscriptions.byType[1].name}</p>
												<h4 className="mb-0">{dashboard?.subscriptions.byType[1].revenue} XOF</h4> /
												<span className="badge badge-danger">{dashboard?.subscriptions.byType[1].count}</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							
							<div className="col-xl-4 col-lg-6 col-sm-6">
								<div className="widget-stat card">
									<div className="card-body  p-4">
										<div className="media ai-icon">
											<span className="me-3 bgl-danger text-danger">
												<svg id="icon-revenue" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-dollar-sign">
													<line x1="12" y1="1" x2="12" y2="23"></line>
													<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
												</svg>
											</span>
											<div className="media-body">
												<p className="mb-1">Abonnement {dashboard?.subscriptions.byType[2].name}</p>
												<h4 className="mb-0">{dashboard?.subscriptions.byType[2].revenue} XOF</h4> /
												<span className="badge badge-danger">{dashboard?.subscriptions.byType[2].count}</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <div className="col-xl-6 col-xxl-12">
						<div className="card">
							<div className="card-header d-sm-flex d-block pb-0 border-0">
								<div className="me-auto pe-3 mb-sm-0 mb-3">
									<h4 className="text-black fs-20">Plan List</h4>
									<p className="fs-13 mb-0">Lorem ipsum dolor sit amet, consectetur</p>
								</div>
								<div className="dropdown mb-3 show">
									<button type="button" className="btn rounded btn-primary light" data-bs-toggle="dropdown" aria-expanded="true">
										<svg className="me-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<g clip-path="url(#clip5)">
											<path d="M0.988957 17.0741C0.328275 17.2007 -0.104585 17.8386 0.0219823 18.4993C0.133362 19.0815 0.644694 19.4865 1.21678 19.4865C1.29272 19.4865 1.37119 19.4789 1.44713 19.4637L6.4592 18.5018C6.74524 18.4461 7.00091 18.2917 7.18316 18.0639L9.33481 15.3503L8.61593 14.9832C8.08435 14.7149 7.71475 14.2289 7.58818 13.6391L5.55804 16.1983L0.988957 17.0741Z" fill="#A02CFA"/>
											<path d="M18.84 6.49306C20.3135 6.49306 21.508 5.29854 21.508 3.82502C21.508 2.3515 20.3135 1.15698 18.84 1.15698C17.3665 1.15698 16.1719 2.3515 16.1719 3.82502C16.1719 5.29854 17.3665 6.49306 18.84 6.49306Z" fill="#A02CFA"/>
											<path d="M13.0179 3.15677C12.7369 2.86819 12.4762 2.75428 12.1902 2.75428C12.0864 2.75428 11.9826 2.76947 11.8712 2.79479L7.29203 3.88073C6.6592 4.03008 6.26937 4.66545 6.41872 5.29576C6.54782 5.83746 7.02877 6.20198 7.56289 6.20198C7.65404 6.20198 7.74514 6.19185 7.8363 6.16907L11.7371 5.24513C11.9902 5.52611 13.2584 6.90063 13.4888 7.14364C11.8763 8.87002 10.2639 10.5939 8.65137 12.3202C8.62605 12.3481 8.60329 12.3759 8.58049 12.4038C8.10966 13.0037 8.25397 13.9454 8.96275 14.3023L13.9064 16.826L11.3397 20.985C10.9878 21.5571 11.165 22.3064 11.7371 22.6608C11.9371 22.7848 12.1573 22.843 12.375 22.843C12.7825 22.843 13.1824 22.638 13.4128 22.2659L16.6732 16.983C16.8529 16.6919 16.901 16.34 16.8074 16.0135C16.7137 15.6844 16.4884 15.411 16.1821 15.2566L12.8331 13.553L16.3543 9.78636L19.0122 12.0393C19.2324 12.2266 19.5032 12.3177 19.7716 12.3177C20.0601 12.3177 20.3487 12.2114 20.574 12.0038L23.6243 9.16112C24.1002 8.71814 24.128 7.97392 23.685 7.49803C23.4521 7.24996 23.1383 7.12339 22.8244 7.12339C22.5383 7.12339 22.2497 7.22717 22.0245 7.43727L19.7412 9.56107C19.7386 9.56361 14.0178 4.18196 13.0179 3.15677Z" fill="#A02CFA"/>
											</g>
											<defs>
											<clipPath id="clip5">
											<rect width="24" height="24" fill="white"/>
											</clipPath>
											</defs>
										</svg>
										Running
										<svg className="ms-2" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M1 0.999999L7 7L13 1" stroke="#0B2A97" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
										</svg>
									</button>
									<div className="dropdown-menu dropdown-menu-end">
										<a className="dropdown-item" href="javascript:void(0);">Edit</a>
										<a className="dropdown-item" href="javascript:void(0);">Delete</a>
									</div>
								</div>
							</div>
							<div className="card-body pt-0 pb-0">
								<div id="chartBar"></div>
							</div>
						</div>
					</div> */}
					<TopAtelier />
				</div>
            </div>
        </div>
    </>
  )
}
