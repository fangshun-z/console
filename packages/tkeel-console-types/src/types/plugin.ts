import { NavigateFunction } from 'react-router-dom';

import { TenantInfo, TokenInfo } from './auth';

export interface GlobalPluginPropsPortalProps {
  portalName: 'admin' | 'tenant';
  client: {
    themeName: string;
    theme: Record<string, unknown>;
    tenantInfo: TenantInfo;
    tokenInfo: TokenInfo;
    navigate: NavigateFunction;
    refetchMenus: () => void;
  };
  backend: {
    api: {
      origin?: string;
      basePath: string;
    };
    websocket: {
      origin?: string;
      basePath: string;
    };
  };
}

export interface BaseGlobalPluginProps {
  portalProps: GlobalPluginPropsPortalProps;
}

export interface GlobalPluginProps extends BaseGlobalPluginProps {
  name: string;
  container: HTMLElement;
}
