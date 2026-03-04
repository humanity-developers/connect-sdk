export type TokenRequest =
  | {
      grant_type: "authorization_code";
      code: string;
      redirect_uri: string;
      client_id: string;
      /** PKCE code verifier — required when the authorization used PKCE */
      code_verifier?: undefined | string;
    }
  | {
      grant_type: "refresh_token";
      refresh_token: string;
      client_id: string;
      scope?: undefined | string;
    }
  | {
      /** RFC 7523 JWT Bearer Grant — exchange a Cognito JWT for a Humanity OAuth token */
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer";
      /** The Cognito JWT (id_token or access_token) */
      assertion: string;
      client_id: string;
    };
