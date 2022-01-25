import { Menu } from '@tkeel/console-types';

import useMutation from '@/tkeel-console-plugin-admin-plugins/hooks/useMutation';
import { BriefInstallerInfo } from '@/tkeel-console-plugin-admin-plugins/types/plugin-info';

export interface PluginDetail {
  id: string;
  tkeel_version: string;
  secret: string;
  register_timestamp: string;
  status: string;
  brief_installer_info: BriefInstallerInfo;
  console_entries: Menu[];
}

export interface ApiData {
  '@types': string;
  plugin: PluginDetail;
}

const url = '/rudder/v1/plugins';
const method = 'DELETE';

type Props = {
  name: string;
  onSuccess: () => void;
};

export default function useDeletePluginMutation({ name, onSuccess }: Props) {
  return useMutation<ApiData>({
    url: `${url}/${name}`,
    method,
    reactQueryOptions: {
      onSuccess,
    },
  });
}