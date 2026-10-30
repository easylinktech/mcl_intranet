export const SESSION_KEY = "mcl-session";
export const signInAccounts = [
  {
    email: "it@metalcrowns.com",
    password: "Alpha@2026",
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
