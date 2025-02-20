import { useMutation } from '@tkeel/console-hooks';

type RequestData = {
  reset_key: string;
  new_password: string;
};

type ApiData = {
  '@type': string;
  has_reset: boolean;
  tenant_id: string;
  username: string;
};

export default function useOAuthResetPasswordMutation({
  onSuccess,
}: {
  onSuccess: () => void;
}) {
  return useMutation<ApiData, undefined, RequestData>({
    /* cspell: disable-next-line */
    url: '/security/v1/oauth/rspwd',
    method: 'POST',
    reactQueryOptions: { onSuccess },
    extras: {
      isWithToken: false,
      handleNoAuth: false,
    },
  });
}
