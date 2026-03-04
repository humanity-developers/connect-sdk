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
      )[];
  anyOf?:
    | undefined
    | (
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
      )[];
  not?:
    | undefined
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
      };
};
