import { EnvironmentSettings } from './settings-interfaces';
import { environment } from './../../../../environments/environment';

export class Settings {

  static config = () => {
    switch (environment.env) {
      case 'mocks': return Settings.Mocks();
      case 'dev': return Settings.Dev();
      case 'local': return Settings.Local();
      case 'test' : return Settings.Test();
      case 'preprod' : return Settings.PreProd();
      case 'prod' : return Settings.Prod();
    }
  };

  static Mocks = (): EnvironmentSettings => {
    return {
      okta: {
        url: 'https://deloittesandbox.oktapreview.com',
        clientSignOnIdp: '0oaevz86xgG3Gcqdp0h7',
        deloitteSignOnIdp: '0oaewdknoqVhPere40h7',
        clientId: '0oaf9xk23uLmpN2Ee0h7',
        oidcId: 'aln5z7uhkbM6y7bMy0g7'
      },
      microservices: {
        url: 'https://api-dev-cremi.deloittecloud.co.uk'
      },
      webapp: {
        url: 'http://localhost:8080'
      },
      userDashboard: {
        licensing: {
          active_users: 100
        },
        filters: {
          exclude_email_suffix: ['deloitte'],
          exclusions_active: true,
          exclude_for: ['hsbc']
        }
      },
      notificationDelay: 5000
    };
  };

  static Local = (): EnvironmentSettings => {
    return {
      okta: {
        url: 'https://deloittesandbox.oktapreview.com',
        clientSignOnIdp: '0oaevz86xgG3Gcqdp0h7',
        deloitteSignOnIdp: '0oaewdknoqVhPere40h7',
        clientId: '0oaf9xk23uLmpN2Ee0h7',
        oidcId: 'aln5z7uhkbM6y7bMy0g7'
      },
      microservices: {
        url: 'https://api-dev-cremi.deloittecloud.co.uk'
      },
      webapp: {
        url: 'http://localhost:8080'
      },
      userDashboard: {
        licensing: {
          active_users: 200
        },
        filters: {
          exclude_email_suffix: ['deloitte'],
          exclusions_active: true,
          exclude_for: ['hsbc']
        }
      },
      notificationDelay: 5000
    };
  };

  static Dev = (): EnvironmentSettings => {
    return {
      okta: {
        url: 'https://deloittesandbox.oktapreview.com',
        clientSignOnIdp: '0oaevz86xgG3Gcqdp0h7',
        deloitteSignOnIdp: '0oaewdknoqVhPere40h7',
        clientId: '0oaf1g7gibDP6DQww0h7',
        oidcId: 'aln5z7uhkbM6y7bMy0g7'
      },
      microservices: {
        url: 'https://api-dev-cremi.deloittecloud.co.uk'
      },
      webapp: {
        url: 'https://cremi-dev.deloittecloud.co.uk'
      },
      userDashboard: {
        licensing: {
          active_users: 100
        },
        filters: {
          exclude_email_suffix: ['deloitte'],
          exclusions_active: true,
          exclude_for: ['hsbc']
        }
      },
      notificationDelay: 5000
    };
  };

  static Test = (): EnvironmentSettings => {
    return {
      okta: {
        url: 'https://deloittesandbox.oktapreview.com',
        clientSignOnIdp: '0oaevz86xgG3Gcqdp0h7',
        deloitteSignOnIdp: '0oaewdknoqVhPere40h7',
        clientId: '0oaf7vsce4LwkjxJy0h7',
        oidcId: 'aln5z7uhkbM6y7bMy0g7'
      },
      microservices: {
        url: 'https://api-tst-cremi.deloittecloud.co.uk'
      },
      webapp: {
        url: 'https://cremi-test.deloittecloud.co.uk'
      },
      userDashboard: {
        licensing: {
          active_users: 100
        },
        filters: {
          exclude_email_suffix: ['deloitte'],
          exclusions_active: true,
          exclude_for: ['hsbc']
        }
      },
      notificationDelay: 5000
    };
  };

  static PreProd = (): EnvironmentSettings => {
    return {
      okta: {
        url: 'https://deloittesandbox.oktapreview.com',
        clientSignOnIdp: '0oaevz86xgG3Gcqdp0h7',
        deloitteSignOnIdp: '0oaewdknoqVhPere40h7',
        clientId: '0oaf7wjq8zYadxjGv0h7',
        oidcId: 'aln5z7uhkbM6y7bMy0g7'
      },
      microservices: {
        url: 'https://api-pprd-cremi.deloittecloud.co.uk'
      },
      webapp: {
        url: 'https://cremi-preprod.deloittecloud.co.uk'
      },
      userDashboard: {
        licensing: {
          active_users: 100
        },
        filters: {
          exclude_email_suffix: ['deloitte'],
          exclusions_active: true,
          exclude_for: ['hsbc']
        }
      },
      notificationDelay: 5000
    };
  };

  static Prod = (): EnvironmentSettings => {
    return {
      okta: {
        url: 'https://cremi.okta-emea.com',
        clientSignOnIdp: '0oa1wetj03S9PTqtT0i7',
        deloitteSignOnIdp: '0oa1vn5nfkXdLI6350i7',
        clientId: '0oa1vz9rc3djT4Nvr0i7',
        oidcId: 'aln2ysuixJR74D7Lc0g6'
      },
      microservices: {
        url: 'https://api-prd-cremi.deloittecloud.co.uk'
      },
      webapp: {
        url: 'https://cremi.deloittecloud.co.uk'
      },
      userDashboard: {
        licensing: {
          active_users: 100
        },
        filters: {
          exclude_email_suffix: ['deloitte'],
          exclusions_active: true,
          exclude_for: ['hsbc']
        }
      },
      notificationDelay: 5000
    };
  };

}

