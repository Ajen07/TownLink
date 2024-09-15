"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const SignupForm = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/auth/sign-up", user);
      console.log("Signup success", response.data);
      toast.success("Sign up success", { position: "top-right" });
      router.push("/dashboard");
    } catch (error: any) {
      console.log("Sign up failed", error);
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
        <Label htmlFor="email">Name</Label>
        <Input
          id="name"
          type="text"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          placeholder="John Doe"
          required
        />
      </div>
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
        <Label htmlFor="password">Password</Label>
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
        onClick={onSignup}
        disabled={loading}
      >
        {loading ? "Verifying..." : "Sign Up"}
      </Button>
    </div>
  );
};

export default SignupForm;
