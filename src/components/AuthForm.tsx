"use client";

import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import FormField from "./FormField";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { IoCheckbox, IoCheckboxOutline } from "react-icons/io5";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {
  authApi,
  useLoginMutation,
  useRegisterMutation,
} from "@/store/features/auth/authApi";
import { toast } from "sonner";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setLoading } from "@/store/features/auth/authSlice";

const AuthForm = ({
  setIsClose,
}: {
  setIsClose: Dispatch<SetStateAction<boolean>>;
}) => {
  const { loading: isLoginLoading } = useAppSelector((state) => state?.auth);

  const [type, setType] = useState("login");
  const [showPass, setShowPass] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();
  const [register, { isLoading: isRegisterLoading }] = useRegisterMutation();

  // Manual Login/Register handler
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setLoading(true));
    const form = e.currentTarget as HTMLFormElement;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;
    const fullName = (form.elements.namedItem("fullName") as HTMLInputElement)
      ?.value;

    try {
      if (type === "login") {
        await login({ email, password }).unwrap();
        await dispatch(
          authApi.endpoints.getProfile.initiate(undefined, {
            forceRefetch: true,
            subscribe: false,
          })
        ).unwrap();

        toast.success("Login Successful", {});
        setIsClose?.(false);
      } else {
        await register({ email, fullName, password }).unwrap();

        toast.success("Account Created", {
          description: "You can now log in with your new account.",
        });
        form.reset();
        setType("login");
      }
    } catch (err: any) {
      toast.error("Oops! Something went wrong", {
        description:
          err?.data?.message ||
          err?.error ||
          "Please check your credentials and try again.",
      });
    } finally {
      dispatch(setLoading(false));
    }
  };

  // Google/GitHub login handler
  const handleOAuthLogin = async (provider: "google" | "facebook") => {
    try {
      const res = await signIn(provider, {
        callbackUrl: "/",
        redirect: false,
      });

      // console.log(res);
    } catch (err) {
      console.log(err);
      const message = err || "Something went wrong!";
      alert(message);
    }
  };

  const renderLoginForm = () => (
    <form onSubmit={onSubmit} className="flex flex-col gap-1">
      <FormField
        label="Email"
        id="email"
        type="email"
        placeholder="Enter your email"
        required
      />
      <div className="relative">
        <FormField
          label="Password"
          id="password"
          type={showPass ? "text" : "password"}
          placeholder="Enter your password"
          required
        />
        <button
          type="button"
          onClick={() => setShowPass(!showPass)}
          className="absolute right-5 top-9 size-3"
        >
          {showPass ? (
            <AiOutlineEye className="size-5" />
          ) : (
            <AiOutlineEyeInvisible className="size-5" />
          )}
        </button>
      </div>
      <div className="flex items-center justify-between">
        <button
          onClick={() => setRememberMe(!rememberMe)}
          className="flex items-center select-none text-sm text-gray-100 font-medium gap-2 "
        >
          {rememberMe ? (
            <IoCheckbox className="size-6 text-primary" />
          ) : (
            <IoCheckboxOutline className="size-6 text-primary" />
          )}{" "}
          Remember Me
        </button>
        <button className="font-medium text-sm hover:underline text-gray-100">
          Forgot Password
        </button>
      </div>

      <button
        type="submit"
        disabled={isLoginLoading}
        className="w-full mt-4 bg-primary text-white py-[9px] rounded-sm hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-primary"
      >
        {isLoginLoading ? "Login in..." : "Login"}
      </button>
    </form>
  );

  const renderRegisterForm = () => (
    <form onSubmit={onSubmit} className="flex flex-col gap-1">
      <FormField
        label="Full Name"
        id="fullName"
        type="text"
        placeholder="Enter your name"
        required
      />
      <FormField
        label="Email"
        id="email"
        type="email"
        placeholder="Enter your email"
        required
      />
      <div className="relative">
        <FormField
          label="Password"
          id="password"
          type={showPass ? "text" : "password"}
          placeholder="Enter your password"
          required
        />
        <button
          type="button"
          onClick={() => setShowPass(!showPass)}
          className="absolute right-5 top-9 size-3"
        >
          {showPass ? (
            <AiOutlineEye className="size-5" />
          ) : (
            <AiOutlineEyeInvisible className="size-5" />
          )}
        </button>
      </div>

      <button
        type="submit"
        disabled={isRegisterLoading}
        className="w-full bg-primary text-white py-[9px] rounded-sm hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-primary"
      >
        {isLoginLoading ? "Registering..." : "Register"}
      </button>
    </form>
  );

  return (
    <div>
      <header className="text-center space-y-2 mb-6">
        <h1 className="text-3xl font-medium font-rubik">
          {type === "login" ? "Login" : "Register"}
        </h1>
      </header>

      {type === "login" ? renderLoginForm() : renderRegisterForm()}

      <div className="flex items-center my-4">
        <hr className="flex-1 border-neutral-200" />
        <span className="px-2 text-muted-foreground text-sm">
          Or Continue With
        </span>
        <hr className="flex-1 border-neutral-200" />
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => handleOAuthLogin("google")}
          className="flex-1 flex cursor-pointer items-center justify-center gap-2 border rounded-md py-2 transition-colors hover:bg-neutral-100"
        >
          <FcGoogle size={20} /> Google
        </button>
        <button
          onClick={() => handleOAuthLogin("facebook")}
          className="flex-1 flex cursor-pointer items-center justify-center gap-2 border rounded-md py-2 transition-colors hover:bg-neutral-100"
        >
          <FaFacebook size={20} className="text-blue-500" /> Facebook
        </button>
      </div>

      <p className="mt-4 text-sm text-center text-muted-foreground">
        {type === "login" ? (
          <>
            Don&apos;t have an account?{" "}
            <button
              onClick={() => setType("register")}
              className="text-primary font-semibold"
            >
              Register
            </button>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <button
              onClick={() => setType("login")}
              className="text-primary font-semibold"
            >
              Login
            </button>
          </>
        )}
      </p>
    </div>
  );
};

export default AuthForm;
