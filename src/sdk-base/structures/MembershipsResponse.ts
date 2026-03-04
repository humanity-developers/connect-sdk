import type { BaseMembership } from "./BaseMembership";
import type { MembershipsSummary } from "./MembershipsSummary";

/**
 * Response from GET /memberships endpoint.
 * Returns all loyalty program memberships grouped by category.
 */
export type MembershipsResponse = {
  summary: MembershipsSummary;
  airlines: BaseMembership[];
  hotels: BaseMembership[];
  casinos: BaseMembership[];
  lastUpdated: string;
};
