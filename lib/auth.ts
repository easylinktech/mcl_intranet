export const SESSION_KEY = "mcl-session";
export const signInAccounts = [
  {
    email: "it@metalcrowns.com",
    name: "IT user",
    role: "ICT",
    initials: "IT",
  },
];
export type SessionUser = {
  email: string;
  name: string;
  role: string;
  initials: string;
};

export function getDemoUser(email: string): SessionUser | null {
  const normalizedEmail = email.trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) return null;
  const account = signInAccounts.find((a) => a.email === normalizedEmail);
  if (account) return account;
  const parts = normalizedEmail.split("@")[0].split(/[._+-]+/).filter(Boolean);
  return {
    email: normalizedEmail,
    name: parts.map((part) => part[0].toUpperCase() + part.slice(1)).join(" "),
    role: "Demo user",
    initials: parts.map((part) => part[0].toUpperCase()).join("").slice(0, 2),
  };
}
