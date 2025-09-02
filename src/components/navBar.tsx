import { DASHBOARD, LOGIN } from '@/utils/constants/routeName'
import { useAuth } from '@/utils/context/authContext';
import { deleteCookie } from 'cookies-next';
import router from 'next/router';
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { getCookie } from 'cookies-next/client';

function NavBarInner() {
	const {logoutContext} = useAuth();
    const [isClient, setIsClient] = useState(false)
    const [profil, setprofil] = useState<IUser | null>(null);
	const handleLogout = () => {
		deleteCookie('access_token_gnawalma');
		logoutContext();
		router.push(LOGIN);
	  }
      
      useEffect(() => {
        setIsClient(true);
        const profilString: any = getCookie('profil_paygo_gnawalma') as string | undefined;
            if(profilString){
            try {
                const parsedProfile = JSON.parse(profilString);
                setprofil(parsedProfile);
            } catch (error) {
                setprofil(null)
            }
            }
      },[]);
      
  return (
    <>
        <div className="nav-header">
            <a href={DASHBOARD} className="brand-logo" aria-label="Gymove">
                <img className="brand-title" src="./images/gnawalma/logo1.png" alt="" />
            </a>
            <div className="nav-control">
                <div className="hamburger">
                    <span className="line"></span><span className="line"></span><span className="line"></span>
                </div>
            </div>
        </div>
        <header className="header">
            <div className="header-content">
                <nav className="navbar navbar-expand">
                    <div className="collapse navbar-collapse justify-content-between">
                        <div className="header-left">
                            <div className="dashboard_bar">
								Tableau de bord
                            </div>
                        </div>
                        <ul className="navbar-nav header-right">
							<li className="nav-item">
								<form>
									<div className="input-group search-area d-lg-inline-flex d-none me-3">
									  <span className="input-group-text" id="header-search">
											<button className="bg-transparent border-0" type="button" aria-label="header-search">
												<i className="flaticon-381-search-2"></i>
											</button>
									  </span>
									  <input type="text" className="form-control" placeholder="Search here" aria-label="Username" aria-describedby="header-search" />
									</div>
								</form>
							</li>
							<li className="nav-item dropdown notification_dropdown">
                                <a className="nav-link bell dz-theme-mode" href="#" onClick={(e) => e.preventDefault()} aria-label="theme-mode">
									<i id="icon-light" className="fas fa-sun"></i>
                                    <i id="icon-dark" className="fas fa-moon"></i>
                                </a>
							</li>
                            <li className="nav-item dropdown header-profile">
                                <a className="nav-link" href="javascript:void(0)" role="button" data-bs-toggle="dropdown">
                                    <img src="images/gnawalma/profil.png" width="20" alt="" />
									<div className="header-info">
										<span className="text-black"><strong>{profil && profil.name}</strong></span>
										<p className="fs-12 mb-0">{profil && profil.type}</p>
									</div>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                    <a href="#" className="dropdown-item ai-icon">
                                        <svg id="icon-user1" xmlns="http://www.w3.org/2000/svg" className="text-primary" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                        <span className="ms-2">Profile </span>
                                    </a>
                                    <a href="#" onClick={handleLogout} className="dropdown-item ai-icon">
                                        <svg id="icon-logout" xmlns="http://www.w3.org/2000/svg" className="text-danger" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                                        <span className="ms-2">Déconnexion </span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    </>
  )
}

// Eviter l'hydratation côté serveur pour la chatbox/tabs bootstrap
const NavBar = dynamic(() => Promise.resolve(NavBarInner), { ssr: false });

export default NavBar;
