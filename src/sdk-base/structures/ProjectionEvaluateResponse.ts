import type { Recordstringunknown } from "./Recordstringunknown";

/**
 * Response from projection query evaluation.
 */
export type ProjectionEvaluateResponse = {
  type: "projection";

  /**
   * Extracted data from the projection query.
   */
  data: Recordstringunknown.o1;

  /**
   * Timestamp when the query was evaluated.
   */
  evaluatedAt: string;

  /**
   * Claims used during evaluation.
   */
  claimsUsed: {
    path: string;
    value: any;
    credentialId?: undefined | string;
    source?: undefined | string;
  }[];

  /**
   * Earliest credential expiry date (if any).
   */
  expiresAt?: undefined | string;
};
