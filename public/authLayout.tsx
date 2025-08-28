import Script from 'next/script'
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  return (
    <>
    <Script src="/vendor/global/global.min.js" ></Script>
    <Script src="/vendor/bootstrap-select/js/bootstrap-select.min.js" strategy="afterInteractive"></Script>
    <Script src="/vendor/chart-js/chart.bundle.min.js" strategy="afterInteractive"></Script>
    <Script src="/vendor/owl-carousel/owl.carousel.js" strategy="afterInteractive"></Script>
    
    <Script src="/vendor/peity/jquery.peity.min.js" strategy="afterInteractive"></Script>  
    
    <Script src="/vendor/apexchart/apexchart.js" strategy="afterInteractive"></Script>
    
    <Script src="/js/dashboard/dashboard-1.js" strategy="afterInteractive"></Script>
    <Script src="/js/custom.min.js" strategy="afterInteractive"></Script>
    <Script src="js/deznav-init.js" strategy="afterInteractive"></Script>
    <div>
      <main>{children}</main>
    </div>
    </>
  );
};

export default AuthLayout;
