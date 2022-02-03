import Copy from '@/tkeel-console-icons/assets/icons/filled/copy.svg?svgr';
import FilledIcon from '@/tkeel-console-icons/components/Icon/FilledIcon';
import { FilledIconProps } from '@/tkeel-console-icons/components/Icon/types';

export default function ExpandFilledIcon(props: FilledIconProps) {
  return <FilledIcon {...props} svgComponent={Copy} />;
}
