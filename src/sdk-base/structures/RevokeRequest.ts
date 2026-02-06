export type RevokeRequest = {
  token?: undefined | string;
  tokens?: undefined | string[];
  token_type_hint?:
    | undefined
    | "authorization"
    | "refresh_token"
    | "access_token";
  authorization_id?: undefined | string;
  cascade?: undefined | "0" | "true" | "false" | "1" | boolean;
  client_id?: undefined | string;
};
