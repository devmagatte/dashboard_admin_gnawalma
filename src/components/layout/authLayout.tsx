import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  return (
    <div className="main-wrapper">
      <main>{children}</main>
    </div>
  );
};

export default AuthLayout;
