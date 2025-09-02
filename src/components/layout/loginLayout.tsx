import React, { ReactNode } from "react";
import '../../styles/auth.module.css';
import Script from "next/script";

type Props = {
  children: ReactNode;
};

const LoginLayout = ({ children }: Props) => {
  return (
    <>  
        <Script src="/js/deznav-init.js" strategy="afterInteractive"></Script>
        <Script src="/js/custom.min.js" strategy="afterInteractive"></Script>
      <div >
        <main>{children}</main>
      </div>
      </>

  );
};

export default LoginLayout;