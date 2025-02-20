import { Box, Center, Flex } from '@chakra-ui/react';

import { Logo } from '@tkeel/console-types';

// import tkeelLogo from '@/tkeel-console-portal-base/assets/images/tkeel-logo.svg';
import useMenusQuery from '@/tkeel-console-portal-base/hooks/queries/useMenusQuery';

// import MenuItem from './MenuItem';
import MenuLink from './MenuLink';
import SubMenus from './SubMenus';

type Props = {
  logo: Logo;
};

function CollapsedMenus({ logo }: Props) {
  const { menus } = useMenusQuery();

  return (
    <Box position="relative" width="60px" height="100%">
      <Center height="96px">
        {/* <Image
          htmlWidth={isQingCloudTheme ? '32px' : '46px'}
          src={isQingCloudTheme ? qingcloudLogo : tkeelLogo}
          alt=""
        /> */}
        {logo.mark}
      </Center>
      <Flex flexDirection="column" alignItems="center">
        {/* <Box>
          <MenuItem icon="MagnifierFilledIcon" active={false} />
        </Box> */}
        {menus.map(({ id, path, icon, children }) => {
          if (children && children[0]) {
            return (
              <SubMenus key={id} icon={icon as string} subMenus={children} />
            );
          }
          return (
            <MenuLink key={id} path={path as string} icon={icon as string} />
          );
        })}
      </Flex>
    </Box>
  );
}

export default CollapsedMenus;
