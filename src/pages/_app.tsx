"use client";

import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "../utils/context/authContext";

function AuthWrapper({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <QueryClientProvider client={new QueryClient()}>
      <AuthProvider>
        <AuthWrapper>
          {getLayout(<Component {...pageProps} />)}
        </AuthWrapper>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
