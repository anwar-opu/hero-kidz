"use client";

import { postUser } from "@/actions/server/auth";
import SocialButton from "@/components/buttons/SocialButton";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";

const RegisterPage = () => {
  const router = useRouter();

  const params = useSearchParams();
  const redirectTo = params.get("redirect") || "/login";

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await postUser(form);

    console.log("Result:", result);

    if (result?.success) {
      Swal.fire("success", "Welcome to Hero Kidz", "success");
      router.push(redirectTo);
    }
  };

  return (
    <main className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center">Create Account</h1>

          <p className="text-center text-base-content/60 mb-4">
            Create your Hero Kidz account
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="input input-bordered w-full"
                required
              />
            </div>

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
                placeholder="Create a password"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Confirm Password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>

              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Register */}
            <button type="submit" className="btn btn-primary w-full">
              Create Account
            </button>
          </form>

          <div className="divider">OR</div>

          {/* Google */}
          <SocialButton></SocialButton>

          <p className="text-center mt-4">
            Already have an account?{" "}
            <a href="/login" className="link link-primary font-semibold">
              Login
            </a>
          </p>
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;
