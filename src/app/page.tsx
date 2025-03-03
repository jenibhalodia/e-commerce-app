"use client";
import ButtonComponent from "@/components/core/Button";
import InputComponent from "@/components/core/Input";
import { loginUser } from "@/services/page";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await loginUser(email, password);
      console.log("Login clicked", { email, password });
      console.log(response)
      if (response && response.statusCode === 200) {
        const token = response.data.token;
        console.log(token);
        localStorage.setItem("loginToken", token);
        toast.success("User Logged in Successfully");
        router.push("/dashboard");
      } else toast.error("Error while logging1");
    } catch (error) {
      console.error(error);
      toast.error("Error while logging2");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <div className="text-2xl font-bold text-center mb-6 text-black">
          Login
        </div>

        <form>
          <div className="mb-4">
            <InputComponent
              label="Email"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6 relative">
            <InputComponent
              label="Password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
              required
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-0 top-4 rounded-full bg-transparent p-2 shadow-none transition-all duration-300 ease-in-out hover:bg-black hover:bg-opacity-10 hover:shadow-none"
            >
              {showPassword ? (
                <FaEye className="h-5 w-5 text-slate-600" />
              ) : (
                <FaEyeSlash className="h-5 w-5 text-slate-600" />
              )}
            </button>
          </div>
          <ButtonComponent
            type="submit"
            onClick={handleSubmit}
            disabled={loading}
            variant="contained"
            size="medium"
            label="Log in"
            loading={loading}
          />
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link href="/signup" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
