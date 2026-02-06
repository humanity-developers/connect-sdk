/**
 * Response from predicate query evaluation.
 */
export type PredicateEvaluateResponse = {
  type: "predicate";

  /**
   * Whether the query passed.
   */
  passed: boolean;

  /**
   * Timestamp when the query was evaluated.
   */
  evaluatedAt: string;

  /**
   * Evidence collected during evaluation.
   */
  evidence: {
    claimsUsed: {
      path: string;
      value: any;
      credentialId?: undefined | string;
      source?: undefined | string;
    }[];
    checkResults: {
      claim: string;
      operator: string;
      expectedValue: any;
      actualValue: any;
      passed: boolean;
    }[];
  };

  /**
   * Earliest credential expiry date (if any).
   */
  expiresAt?: undefined | string;
};
