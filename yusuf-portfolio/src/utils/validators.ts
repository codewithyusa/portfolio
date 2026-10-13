export const validateName = (v: string) =>
  v.trim().length < 2 ? "Please enter your name." : "";

export const validateEmail = (v: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? "" : "Please enter a valid email.";

export const validateMessage = (v: string) =>
  v.trim().length < 10 ? "Message must be at least 10 characters." : "";