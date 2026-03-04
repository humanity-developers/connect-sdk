/**
 * A single normalized membership from any loyalty program.
 */
export type BaseMembership = {
  /**
   * Display name of the provider (e.g., "Delta", "Marriott")
   */
  provider: string;

  /**
   * Name of the loyalty program (e.g., "SkyMiles", "Bonvoy")
   */
  programName: string;

  /**
   * Provider UUID
   */
  providerId: string;

  /**
   * Credential UUID for reference
   */
  credentialId: string;

  /**
   * Normalized tier level, null if provider doesn't support tiers
   */
  tier:
    | null
    | "basic"
    | "silver"
    | "gold"
    | "platinum"
    | "diamond"
    | "elite"
    | "unknown";

  /**
   * Original tier name from the provider (e.g., "Diamond Medallion")
   */
  tierOriginal: null | string;

  /**
   * Points/miles balance, null if not available
   */
  points: null | number;

  /**
   * Label for points field ('miles', 'points', or 'credits')
   */
  pointsLabel: null | "miles" | "points" | "credits";

  /**
   * Whether the membership is currently active
   */
  isActive: boolean;

  /**
   * ISO timestamp when the credential was last verified
   */
  verifiedAt: string;

  /**
   * URL to the provider's logo, null if not available
   */
  logoUrl: null | string;
};
