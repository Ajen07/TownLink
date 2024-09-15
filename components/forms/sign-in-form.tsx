"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const SigninForm = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/auth/sign-in", user);
      console.log("Login success", response.data);
      toast.success("Login success", { position: "top-right" });
      router.push("/dashboard");
    } catch (error: any) {
      console.log("Login failed", error);
      toast.error(error?.response?.data?.error || "Something went wrong", {
        position: "top-right",
        
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="m@example.com"
          required
        />
      </div>
      <div className="grid gap-2">
        <div className="flex items-center">
          <Label htmlFor="password">Password</Label>
          <Link
            href="/forgot-password"
            className="ml-auto inline-block text-sm underline"
          >
            Forgot your password?
          </Link>
        </div>
        <Input
          id="password"
          type="password"
          required
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </div>
      <Button
        type="submit"
        variant="primaryTheme"
        className="w-full"
        onClick={onLogin}
        disabled={loading}
      >
        {loading ? "Authenticating..." : "Login"}
      </Button>
    </div>
  );
};

export default SigninForm;
