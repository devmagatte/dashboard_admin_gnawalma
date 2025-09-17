import ActivitesRecentesComp from '@/components/activitesrecentes/activitesRecentes';
import Footer from '@/components/footer';
import AuthLayout from '@/components/layout/authLayout';
import NavBar from '@/components/navBar';
import SideBar from '@/components/sideBar';
import React from 'react'

export default function index() {
    return (
      <>
        <div id="preloader">
            <div className="sk-three-bounce">
                <div className="sk-child sk-bounce1"></div>
                <div className="sk-child sk-bounce2"></div>
                <div className="sk-child sk-bounce3"></div>
            </div>
        </div>
        <div>
            <div id="main-wrapper">
                <NavBar />
                <SideBar />
                <ActivitesRecentesComp />
                <Footer />
            </div>
        </div>
      </>
    )
  }
  index.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <AuthLayout>
            {page}
        </AuthLayout>
    );
  };