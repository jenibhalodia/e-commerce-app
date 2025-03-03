"use client";
import ButtonComponent from "@/components/core/Button";
import InputComponent from "@/components/core/Input";
// import { register } from "@/components/store/authSlice";
import { registrationAPI } from "@/services/page";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
// import { useDispatch } from "react-redux";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  // const dispatch = useDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // const token = "dummy-token";
    // dispatch(register({ email, token }));
    // router.push("/dashboard");

    try {
      setLoading(true);
      const response = await registrationAPI(firstName,lastName, email, password);
      console.log(response);
      console.log("Signup clicked", { email, password });
      if (response && response.statusCode === 201) {
        router.push("/dashboard");
        toast.success("User Registered Successfully")
      }else(
        toast.error("Error while Sign-in")
      )
    } catch (error) {
      console.error(error);
      toast.error("Error while Sign-in")
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <div className="text-2xl font-bold text-center mb-6 text-black">
          Sign up
        </div>

        <form>
          <div className="mb-4">
            <InputComponent
              label="First Name"
              value={firstName}
              onChange={(e: any) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <InputComponent
              label="Last Name"
              value={lastName}
              onChange={(e: any) => setLastName(e.target.value)}
              required
            />
          </div>

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
            disabled={loading}
            onClick={handleSubmit}
            variant="contained"
            size="medium"
            label="Sign in"
            loading={loading}
          />
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
