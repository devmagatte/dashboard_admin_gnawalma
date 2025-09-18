import { ACTIVITES_RECENTES, COUTURIERS, DASHBOARD } from '@/utils/constants/routeName'
import React from 'react'
import dynamic from 'next/dynamic'

function SideBarInner() {
  return (
    <>
    <div className="deznav">
            <div className="deznav-scroll">
				<ul className="metismenu" id="menu">
                    <li><a className="ai-icon" href={DASHBOARD} aria-expanded="false">
							<i className="flaticon-381-networking"></i>
							<span className="nav-text">Tableau de board</span>
						</a>
                    </li>
                    <li><a href={COUTURIERS} className="ai-icon" aria-expanded="false">
							<i className="flaticon-381-settings-2"></i>
							<span className="nav-text">Les Couturiers</span>
						</a>
					</li>
					<li><a href={ACTIVITES_RECENTES} className="ai-icon" aria-expanded="false">
							<i className="flaticon-381-compact-disc-1"></i>
							<span className="nav-text">Activités récentes</span>
						</a>
					</li>
					
                </ul>
			</div>
    </div>    
    </>
  )
}

const SideBar = dynamic(() => Promise.resolve(SideBarInner), { ssr: false });

export default SideBar;
