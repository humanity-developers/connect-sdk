import type { PredicatePolicy } from "./PredicatePolicy";

/**
 * Request body for query evaluation.
 */
export type QueryEvaluateRequest = {
  /**
   * The query to evaluate. Can be a simple check or compound policy.
   *
   * @example { "check": { "claim": "identity.age", "operator": ">=", "value": 18 } }
   */
  query:
    | {
        check: {
          claim: string;
          operator:
            | "=="
            | "!="
            | ">"
            | ">="
            | "<"
            | "<="
            | "in"
            | "notIn"
            | "contains"
            | "isDefined"
            | "startsWith"
            | "matchRegex";
          value?: any | undefined;
        };
      }
    | {
        policy: PredicatePolicy;
      }
    | {
        projections: {
          claim: string;
          lens: "pluck" | "pick" | "at";
        }[];
      };
};
