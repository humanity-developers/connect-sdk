export type AuthorizationsQuery = {
  status?: undefined | "revoked" | "active";
  updated_since?: undefined | string;
  limit?: undefined | number;
};
