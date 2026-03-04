/**
 * Memberships API contract types.
 * These types define the structure of the unified memberships response.
 */

/**
 * Normalized tier levels across all loyalty programs.
 */
export type NormalizedTier = 'basic' | 'silver' | 'gold' | 'platinum' | 'diamond' | 'elite' | 'unknown';

/**
 * Labels for points/miles depending on the provider's terminology.
 */
export type PointsLabel = 'miles' | 'points' | 'credits';

/**
 * A single normalized membership from any loyalty program.
 */
export interface BaseMembership {
  provider: string;
  programName: string;
  providerId: string;
  credentialId: string;
  tier: NormalizedTier | null;
  tierOriginal: string | null;
  points: number | null;
  pointsLabel: PointsLabel | null;
  isActive: boolean;
  verifiedAt: string;
  logoUrl: string | null;
}

/**
 * Summary counts of memberships by category.
 */
export interface MembershipsSummary {
  totalPrograms: number;
  airlines: number;
  hotels: number;
  casinos: number;
}

/**
 * Response from GET /memberships endpoint.
 */
export interface MembershipsResponse {
  summary: MembershipsSummary;
  airlines: BaseMembership[];
  hotels: BaseMembership[];
  casinos: BaseMembership[];
  lastUpdated: string;
}

