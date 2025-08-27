import Script from 'next/script';
import React, { ReactNode } from 'react';
import '@styles/app.module.css'

type Props = {
  children: ReactNode;
};

const AppLayout = ({ children }: Props) => {
  return (
    <>
      <Script src="/assets_auth/js/feather.min.js" strategy="afterInteractive"></Script>
      <Script src="/assets_auth/plugins/slimscroll/jquery.slimscroll.min.js" strategy="afterInteractive"></Script>
      <Script src="/assets_auth/plugins/raphael/raphael.min.js" strategy="afterInteractive"></Script>
      <Script src="/assets_auth/plugins/morris/morris.min.js" strategy="afterInteractive"></Script>
      <Script src="/assets_auth/js/chart.morris.js" strategy="afterInteractive"></Script>

      <div className="main-wrapper">
        <main>{children}</main>
      </div>
    </>
  );
};

export default AppLayout;
