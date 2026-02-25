import type { Recordstringunknown } from "./Recordstringunknown";

export type PresetResult = {
  preset:
    | "humanity_uuid"
    | "humanity_score"
    | "is_human"
    | "country_of_residence"
    | "age"
    | "address_postal_code"
    | "legal_name"
    | "residency_region"
    | "age_over_18"
    | "nationality"
    | "address_full"
    | "date_of_birth"
    | "email"
    | "phone"
    | "age_over_21"
    | "social_accounts"
    | "wallet_address"
    | "primary_wallet_address"
    | "kyc_passed"
    | "kyc_last_updated_at"
    | "document_number"
    | "document_country"
    | "document_expiry_date"
    | "net_worth_above_10k"
    | "net_worth_above_100k"
    | "net_worth_total"
    | "bank_balance_total"
    | "loan_balance_total"
    | "google_connected"
    | "linkedin_connected"
    | "facebook_connected"
    | "twitter_connected"
    | "discord_connected"
    | "github_connected"
    | "telegram_connected"
    | "palm_verified"
    | "humanity_user"
    | "proof_of_assets"
    | "proof_of_investments"
    | "proof_of_mortgage"
    | "proof_of_residency"
    | "proof_of_retirement";
  value: any;
  status: "valid" | "expired" | "pending" | "unavailable";
  expires_at: string;
  verified_at?: undefined | string;
  evidence?: undefined | Recordstringunknown;
};
