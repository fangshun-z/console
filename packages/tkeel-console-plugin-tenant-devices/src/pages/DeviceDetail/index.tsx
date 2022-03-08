/* eslint-disable no-underscore-dangle */
import { Flex } from '@chakra-ui/react';
import qs from 'qs';
import { useLocation } from 'react-router-dom';

import useDeviceDetailQuery from '@/tkeel-console-plugin-tenant-devices/hooks/queries/useDeviceDetailQuery';
import {
  BasicInfo,
  // RawData as RawDataType,
  SysField,
} from '@/tkeel-console-plugin-tenant-devices/hooks/queries/useDeviceDetailQuery/types';
import useDeviceDetailSocket from '@/tkeel-console-plugin-tenant-devices/hooks/websockets/useDeviceDetailSocket';

import DeviceDetailLeftPanel from './components/DeviceDetailLeftPanel';
import DeviceDetailRightPanel from './components/DeviceDetailRightPanel';

function DeviceDetail(): JSX.Element {
  const location = useLocation();
  const { search } = location;
  const { id } = qs.parse(search, { ignoreQueryPrefix: true });

  const { deviceObject, refetch } = useDeviceDetailQuery({
    id: id as string,
  });
  const properties = deviceObject?.properties;
  const { sysField, basicInfo } = properties ?? {};
  const originConnectInfo = properties?.connectInfo;
  const configs = deviceObject?.configs ?? {};
  const { rawData, connectInfo } = useDeviceDetailSocket({ id: id as string });
  const connectData = connectInfo || originConnectInfo;

  const deviceInfo = {
    id: id as string,
    configs,
    properties: {
      sysField: sysField as SysField,
      basicInfo: basicInfo as BasicInfo,
      rawData,
      connectInfo: connectData,
    },
  };

  return (
    <Flex justifyContent="space-between">
      <DeviceDetailLeftPanel refetch={refetch} deviceObject={deviceInfo} />
      <DeviceDetailRightPanel deviceObject={deviceInfo} />
    </Flex>
  );
}

export default DeviceDetail;
