import { RectangleButton, toast } from '@tkeel/console-components';
import { CaretRightFilledIcon, LoadingFilledIcon } from '@tkeel/console-icons';
import { plugin } from '@tkeel/console-utils';

import useEnablePluginMutation from '@/tkeel-console-plugin-tenant-plugins/hooks/mutations/useEnablePluginMutation';

type Props = {
  pluginName: string;
  buttonCanHover?: boolean;
  refetchData: () => unknown;
};

function EnableButton({
  pluginName,
  buttonCanHover = false,
  refetchData,
}: Props) {
  const { portalProps } = plugin.getGlobalPluginProps();
  const { refetchMenus } = portalProps.client;

  const { mutate, isLoading } = useEnablePluginMutation({
    pluginName,
    onSuccess() {
      toast({ status: 'success', title: '启用插件成功' });
      refetchData();
      refetchMenus();
    },
  });

  const iconColor = buttonCanHover ? 'primary' : 'white';
  return (
    <RectangleButton
      leftIcon={
        isLoading ? (
          <LoadingFilledIcon color={iconColor} />
        ) : (
          <CaretRightFilledIcon color={iconColor} />
        )
      }
      canHover={buttonCanHover}
      onClick={(e) => {
        e.stopPropagation();
        mutate({
          data: {},
        });
      }}
    >
      启用
    </RectangleButton>
  );
}

export default EnableButton;
