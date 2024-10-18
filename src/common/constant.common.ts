export const ROLES = {
  ADMIN: "ADMIN",
  USER: "USER",
} as const;
export type ROLES_TYPE = keyof typeof ROLES;
