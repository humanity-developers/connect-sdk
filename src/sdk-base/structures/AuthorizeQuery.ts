export type AuthorizeQuery = {
  client_id: string;
  redirect_uri: string;
  response_type: "code";
  scope: string;
  state?: undefined | string;

  /**
   * PKCE code challenge — required for public clients, optional for confidential clients (e.g. Cognito federation)
   */
  code_challenge?: undefined | string;
  code_challenge_method?: undefined | "S256";
  authorization_id?: undefined | string;
  login_hint?: undefined | string;
  locale?: undefined | string;
  nonce?: undefined | string;
};
