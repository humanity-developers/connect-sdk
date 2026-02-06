export type AuthorizationUpdate = {
  authorization_id: string;
  organization_id: string;
  app_scoped_user_id: string;
  status: "revoked" | "active";
  updated_at: string;
};
