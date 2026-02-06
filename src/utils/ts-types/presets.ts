import type { IsoDateString, PresetStatus } from './common';

/**
 * All available preset scopes.
 * Scopes are used to request access to specific presets during OAuth authorization.
 */
export enum PresetScope {
  // Identity presets - low/medium sensitivity
  IS_HUMAN = 'hp:presets.is_human',
  HUMANITY_UUID = 'hp:presets.humanity_uuid',
  HUMANITY_SCORE = 'hp:presets.humanity_score',
  HUMANITY_USER = 'hp:presets.humanity_user',
  PALM_VERIFIED = 'hp:presets.palm_verified',
  EMAIL = 'hp:presets.email',
  PHONE = 'hp:presets.phone',
  COUNTRY_OF_RESIDENCE = 'hp:presets.country_of_residence',
  RESIDENCY_REGION = 'hp:presets.residency_region',
  NATIONALITY = 'hp:presets.nationality',
  SOCIAL_ACCOUNTS = 'hp:presets.social_accounts',
  WALLET_ADDRESS = 'hp:presets.wallet_address',
  PRIMARY_WALLET_ADDRESS = 'hp:presets.primary_wallet_address',

  // Age-related presets
  AGE = 'hp:presets.age',
  AGE_OVER_18 = 'hp:presets.age_over_18',
  AGE_OVER_21 = 'hp:presets.age_over_21',
  DATE_OF_BIRTH = 'hp:presets.date_of_birth',

  // Address presets
  LEGAL_NAME = 'hp:presets.legal_name',
  ADDRESS_POSTAL_CODE = 'hp:presets.address_postal_code',
  ADDRESS_FULL = 'hp:presets.address_full',

  // KYC presets
  KYC_PASSED = 'hp:presets.kyc_passed',
  KYC_LAST_UPDATED_AT = 'hp:presets.kyc_last_updated_at',
  DOCUMENT_NUMBER = 'hp:presets.document_number',
  DOCUMENT_COUNTRY = 'hp:presets.document_country',
  DOCUMENT_EXPIRY_DATE = 'hp:presets.document_expiry_date',

  // Financial presets
  NET_WORTH_ABOVE_10K = 'hp:presets.net_worth_above_10k',
  NET_WORTH_ABOVE_100K = 'hp:presets.net_worth_above_100k',
  NET_WORTH_TOTAL = 'hp:presets.net_worth_total',
  BANK_BALANCE_TOTAL = 'hp:presets.bank_balance_total',
  LOAN_BALANCE_TOTAL = 'hp:presets.loan_balance_total',
  IS_ACCREDITED_INVESTOR = 'hp:presets.is_accredited_investor',
  IS_QUALIFIED_PURCHASER = 'hp:presets.is_qualified_purchaser',
  IS_INSTITUTIONAL_INVESTOR = 'hp:presets.is_institutional_investor',

  // Proof presets
  PROOF_OF_ASSETS = 'hp:presets.proof_of_assets',
  PROOF_OF_INVESTMENTS = 'hp:presets.proof_of_investments',
  PROOF_OF_MORTGAGE = 'hp:presets.proof_of_mortgage',
  PROOF_OF_RESIDENCY = 'hp:presets.proof_of_residency',
  PROOF_OF_RETIREMENT = 'hp:presets.proof_of_retirement',
}

/**
 * All available preset names.
 */
export type PresetName =
  // Identity presets - low/medium sensitivity
  | 'is_human'
  | 'humanity_uuid'
  | 'humanity_score'
  | 'humanity_user'
  | 'palm_verified'
  | 'email'
  | 'phone'
  | 'country_of_residence'
  | 'residency_region'
  | 'nationality'
  | 'social_accounts'
  | 'wallet_address'
  | 'primary_wallet_address'
  // Age-related presets
  | 'age'
  | 'age_over_18'
  | 'age_over_21'
  | 'date_of_birth'
  // Address presets
  | 'legal_name'
  | 'address_postal_code'
  | 'address_full'
  // KYC presets
  | 'kyc_passed'
  | 'kyc_last_updated_at'
  | 'document_number'
  | 'document_country'
  | 'document_expiry_date'
  // Financial presets
  | 'net_worth_above_10k'
  | 'net_worth_above_100k'
  | 'net_worth_total'
  | 'bank_balance_total'
  | 'loan_balance_total'
  | 'is_accredited_investor'
  | 'is_qualified_purchaser'
  | 'is_institutional_investor'
  // Proof presets
  | 'proof_of_assets'
  | 'proof_of_investments'
  | 'proof_of_mortgage'
  | 'proof_of_residency'
  | 'proof_of_retirement';

/**
 * Mapping from preset names to their scopes.
 */
export const PRESET_SCOPE_MAP: Record<PresetName, PresetScope> = {
  // Identity presets
  is_human: PresetScope.IS_HUMAN,
  humanity_uuid: PresetScope.HUMANITY_UUID,
  humanity_score: PresetScope.HUMANITY_SCORE,
  humanity_user: PresetScope.HUMANITY_USER,
  palm_verified: PresetScope.PALM_VERIFIED,
  email: PresetScope.EMAIL,
  phone: PresetScope.PHONE,
  country_of_residence: PresetScope.COUNTRY_OF_RESIDENCE,
  residency_region: PresetScope.RESIDENCY_REGION,
  nationality: PresetScope.NATIONALITY,
  social_accounts: PresetScope.SOCIAL_ACCOUNTS,
  wallet_address: PresetScope.WALLET_ADDRESS,
  primary_wallet_address: PresetScope.PRIMARY_WALLET_ADDRESS,
  // Age-related presets
  age: PresetScope.AGE,
  age_over_18: PresetScope.AGE_OVER_18,
  age_over_21: PresetScope.AGE_OVER_21,
  date_of_birth: PresetScope.DATE_OF_BIRTH,
  // Address presets
  legal_name: PresetScope.LEGAL_NAME,
  address_postal_code: PresetScope.ADDRESS_POSTAL_CODE,
  address_full: PresetScope.ADDRESS_FULL,
  // KYC presets
  kyc_passed: PresetScope.KYC_PASSED,
  kyc_last_updated_at: PresetScope.KYC_LAST_UPDATED_AT,
  document_number: PresetScope.DOCUMENT_NUMBER,
  document_country: PresetScope.DOCUMENT_COUNTRY,
  document_expiry_date: PresetScope.DOCUMENT_EXPIRY_DATE,
  // Financial presets
  net_worth_above_10k: PresetScope.NET_WORTH_ABOVE_10K,
  net_worth_above_100k: PresetScope.NET_WORTH_ABOVE_100K,
  net_worth_total: PresetScope.NET_WORTH_TOTAL,
  bank_balance_total: PresetScope.BANK_BALANCE_TOTAL,
  loan_balance_total: PresetScope.LOAN_BALANCE_TOTAL,
  is_accredited_investor: PresetScope.IS_ACCREDITED_INVESTOR,
  is_qualified_purchaser: PresetScope.IS_QUALIFIED_PURCHASER,
  is_institutional_investor: PresetScope.IS_INSTITUTIONAL_INVESTOR,
  // Proof presets
  proof_of_assets: PresetScope.PROOF_OF_ASSETS,
  proof_of_investments: PresetScope.PROOF_OF_INVESTMENTS,
  proof_of_mortgage: PresetScope.PROOF_OF_MORTGAGE,
  proof_of_residency: PresetScope.PROOF_OF_RESIDENCY,
  proof_of_retirement: PresetScope.PROOF_OF_RETIREMENT,
};

/**
 * Preset value types for type-safe preset handling.
 */
export type PresetValueType =
  | 'boolean'
  | 'string'
  | 'number'
  | 'integer'
  | 'date'
  | 'datetime'
  | 'array'
  | 'enum'
  | 'bundled';

export enum ErrorCode {
  E4003 = 'E4003',
  E4004 = 'E4004',
  E4010 = 'E4010',
  E4041 = 'E4041',
  E4042 = 'E4042',
  E4044 = 'E4044',
}

export type ConsentPresetsRequest = {
  presets: Array<{
    name: PresetName;
    value: boolean | string | number;
  }>;
  computed_at: IsoDateString;
};

export type ConsentPresetsResponse = {
  accepted: boolean;
  expires_at?: IsoDateString;
};

export type PresetValue = boolean | string | number | null | unknown[];

export type PresetResult = {
  preset: PresetName;
  value: PresetValue;
  status: PresetStatus;
  expires_at: IsoDateString | null;
  verified_at?: IsoDateString;
  evidence?: Record<string, unknown>;
};

export type VerifyPresetResponse = PresetResult;

export type VerifyPresetsRequest = {
  presets: PresetName[];
};

export type PresetError = {
  error: string;
  error_code: ErrorCode;
  error_description: string;
  error_subcode?: string;
  context?: Record<string, unknown>;
};

export type VerifyPresetsResponse = {
  results: PresetResult[];
  errors: Array<{ preset: PresetName; error: PresetError }>;
};
