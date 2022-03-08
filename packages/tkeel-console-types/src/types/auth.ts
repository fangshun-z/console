export interface TenantInfo {
  tenant_id: string;
}

export interface TokenInfo {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  token_type: string;
}
