import type { Recordable } from '@vben/types';

import { requestClient } from '#/api/request';

export namespace UaaAuthHistoryApi {
  export interface UaaAuthHistory {
    [key: string]: any;
    id: string;
    authStatus: string;
    createdTime?: string;
  }
}

/**
 * 获取认证示例分页数据
 */
async function getAuthHistoryByPage(params: Recordable<any>) {
  return requestClient.get<Array<UaaAuthHistoryApi.UaaAuthHistory>>(
    '/uaa/upms/auth-histories/page',
    { params },
  );
}

export { getAuthHistoryByPage };
