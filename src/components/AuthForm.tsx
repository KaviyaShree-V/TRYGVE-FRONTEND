// AuthForm.tsx
import React from "react";

interface AuthFormProps {
  isSignup: boolean;
  formData: {
    name: string;
    email: string;
    password: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ isSignup, formData, handleChange }) => {
  return (
    <>
      {isSignup && (
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      )}
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
      />
    </>
  );
};

export default AuthForm;