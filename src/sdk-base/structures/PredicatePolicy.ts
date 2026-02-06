/**
 * Forward declaration for recursive predicate policy schema.
 */
export type PredicatePolicy = {
  allOf?:
    | undefined
    | (
        | {
            check: {
              claim: string;
              operator:
                | "startsWith"
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
                | "matchRegex";
              value?: any | undefined;
            };
          }
        | {
            policy: PredicatePolicy;
          }
      )[];
  anyOf?:
    | undefined
    | (
        | {
            check: {
              claim: string;
              operator:
                | "startsWith"
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
                | "matchRegex";
              value?: any | undefined;
            };
          }
        | {
            policy: PredicatePolicy;
          }
      )[];
  not?:
    | undefined
    | {
        check: {
          claim: string;
          operator:
            | "startsWith"
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
            | "matchRegex";
          value?: any | undefined;
        };
      }
    | {
        policy: PredicatePolicy;
      };
};
