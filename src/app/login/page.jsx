
"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      email: form.email,
      password: form.password,
      redirect: false,
    });

    console.log("Login result:", result);

    if (result?.ok) {
      alert("Login successful");
      // router.push("/");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <main className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center">
            Welcome Back
          </h1>

          <p className="text-center text-base-content/60 mb-4">
            Login to your Hero Kidz account
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>

              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Remember / Forgot */}
            <div className="flex items-center justify-between">
              <label className="label cursor-pointer gap-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-sm"
                />
                <span className="label-text">Remember me</span>
              </label>

              <a className="link link-primary text-sm">
                Forgot password?
              </a>
            </div>

            {/* Login */}
            <button
              type="submit"
              className="btn btn-primary w-full"
            >
              Login
            </button>
          </form>

          <div className="divider">OR</div>

          {/* Google */}
          <button className="btn btn-outline w-full">
            Continue with Google
          </button>

          <p className="text-center mt-4">
            Do not have an account?{" "}
            <a
              href="/register"
              className="link link-primary font-semibold"
            >
              Register
            </a>
          </p>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;

