export {
  HumanitySDK,
  type HumanitySdkConfig,
  type AuthorizationUrlOptions,
  type AuthorizationUrlResult,
  type TokenResult,
  type ExchangeCodeOptions,
  type RefreshTokenOptions,
  type RevokeTokenOptions,
  type RevokeTokenResult,
  type VerifyPresetsOptions,
  type VerifyPresetOptions,
  type PollCredentialUpdatesOptions,
  type PollAuthorizationUpdatesOptions,
  type ClientUserTokenOptions,
  type ClientUserTokenResult,
  // Memberships
  type GetMembershipsOptions,
  type MembershipsResult,
  type MembershipsResponse,
  type MembershipsSummary,
  type BaseMembership,
  type NormalizedTier,
  type PointsLabel,
  // Cognito JWT Bearer Grant
  type ExchangeCognitoTokenOptions,
  // Query Engine types
  type Query,
  type QueryEvaluateOptions,
  type QueryPredicateResult,
  type QueryProjectionResult,
  type QueryEvaluateResult,
  HttpError,
} from './HumanitySDK';

export {
  type PresetCheckResult,
  type PresetBatchResult,
  type PresetErrorResult,
} from './adapters/presets.adapter';

export {
  type CredentialUpdates,
  type AuthorizationUpdates,
  type CredentialRecord,
  type AuthorizationRecord,
} from './adapters/status.adapter';

export { EnvironmentRegistry, type EnvironmentDescriptor, type EnvironmentName } from './internal/environment';

export { type RateLimitInfo } from './types/rate-limit';

export { HumanityError } from './types/humanity-error';

// Preset types
export {
  PresetScope,
  type PresetName,
  type PresetValueType,
  PRESET_SCOPE_MAP,
  type ConsentPresetsRequest,
  type ConsentPresetsResponse,
  type PresetResult,
  type PresetValue,
  type VerifyPresetResponse,
  type VerifyPresetsRequest,
  type VerifyPresetsResponse,
  type PresetError,
  ErrorCode,
} from './utils/ts-types/presets';
