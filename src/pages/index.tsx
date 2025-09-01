import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useLogin } from '@/hooks/auth/useLogin';
import LoginLayout from '@/components/layout/loginLayout';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();
  const { mutate, errorMessage } = useLogin();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle login logic here
    mutate({ email, password });
  };

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Discover Gymove, the ultimate fitness solution that is designed to help you achieve a healthier lifestyle with its cutting-edge features and personalized programs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
      </Head>

      <div className="authincation h-100">
        <div className="container h-100">
          <div className="row justify-content-center h-100 align-items-center">
            <div className="col-md-6">
              <div className="authincation-content">
                <div className="row no-gutters">
                  <div className="col-xl-12">
                    <div className="auth-form">
                      <div className="text-center mb-3">
                        <a href=""><img src="/images/gnawalma/logo1.png" alt="Gymove Logo" /></a>
                      </div>
                      <h4 className="text-center mb-4">Sign in your account</h4>
                      {errorMessage && (
                        <div className="alert alert-danger" role="alert">
                          {errorMessage}
                        </div>
                      )}
                      <form onSubmit={handleSubmit}>
                        <div className="form-group">
                          <label className="mb-1 form-label">Email</label>
                          <input 
                            type="email" 
                            className="form-control" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                        <div className="mb-4 position-relative">
                          <label className="mb-1 form-label">Password</label>
                          <input 
                            type={showPassword ? "text" : "password"}
                            id="dz-password" 
                            className="form-control" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                          <span 
                            className="show-pass eye"
                            onClick={() => setShowPassword(!showPassword)}
                            style={{ cursor: 'pointer' }}
                          >
                            <i className={`fa ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`}></i>
                          </span>
                        </div>
                        <div className="form-row d-flex justify-content-between mt-4 mb-2">
                          <div className="form-group">
                            <div className="form-check custom-checkbox ms-1">
                              <input 
                                type="checkbox" 
                                className="form-check-input" 
                                id="basic_checkbox_1"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                              />
                              <label className="form-check-label" htmlFor="basic_checkbox_1">
                                Remember my preference
                              </label>
                            </div>
                          </div>
                          <div className="form-group">
                            <a href="/forgot-password">Forgot Password?</a>
                          </div>
                        </div>
                        <div className="text-center">
                          <button type="submit" className="btn btn-primary light btn-block">
                            Sign Me In
                          </button>
                        </div>
                      </form>
                      <div className="new-account mt-3">
                        <p>Don&apos;t have an account? <a className="text-primary" href="/register">Sign up</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
LoginPage.getLayout = function getLayout(page: React.ReactElement) {
  return (
      <LoginLayout>
          {page}
      </LoginLayout>
  );
};