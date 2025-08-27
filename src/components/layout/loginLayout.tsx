import React, { ReactNode } from "react";
import '../../styles/auth.module.css';
import Script from "next/script";

type Props = {
  children: ReactNode;
};

const LoginLayout = ({ children }: Props) => {
  return (
    <>  
      <Script src="/assets/vendor/libs/jquery/jquery.js"></Script>

      <Script src="/assets/vendor/libs/popper/popper.js"></Script>
      <Script src="/assets/vendor/js/bootstrap.js"></Script>
      <Script src="/assets/vendor/libs/node-waves/node-waves.js"></Script>

      <Script src="/assets/vendor/libs/@algolia/autocomplete-js.js"></Script>

      <Script src="/assets/vendor/libs/pickr/pickr.js"></Script>

      <Script src="/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js"></Script>

      <Script src="/assets/vendor/libs/hammer/hammer.js"></Script>

      <Script src="/assets/vendor/libs/i18n/i18n.js"></Script>

      <Script src="/assets/vendor/js/menu.js"></Script>

      <Script src="/assets/vendor/libs/@form-validation/popular.js"></Script>
      <Script src="/assets/vendor/libs/@form-validation/bootstrap5.js"></Script>
      <Script src="/assets/vendor/libs/@form-validation/auto-focus.js"></Script>


      <Script src="/assets/js/main.js"></Script>

      <Script src="/assets/js/pages-auth.js"></Script>
      <div className="main-wrapper">
        <main>{children}</main>
      </div>
      </>

  );
};

export default LoginLayout;