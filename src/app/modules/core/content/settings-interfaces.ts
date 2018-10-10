export interface OktaSettings {
  url?: string;
  clientSignOnIdp?: string;
  deloitteSignOnIdp?: string;
  clientId?: string;
  oidcId?: string;
}

export interface EnvironmentSettings {
  okta?: OktaSettings;
  microservices?: { url: string };
  webapp?: { url: string };
  userDashboard?: UserDashboardSettings;
  notificationDelay?: number;
}

export interface UserDashboardSettings {
  licensing?: { active_users: number };
  filters?: UserFilterSettings;
}


export interface UserFilterSettings {
  exclude_email_suffix?: string[];
  exclusions_active: boolean;
  exclude_for?: string[];
}
