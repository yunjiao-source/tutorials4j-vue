import type { Recordable } from '@vben/types';

import type { UaaUserApi } from './user';

import { requestClient } from '#/api/request';

export namespace UaaAuthHistoryApi {
  export interface UaaAuthHistory {
    [key: string]: any;
    id: string;
    ipAddress?: string;
    region?: string;
    platform?: string;
    browser?: string;
    authStatus: string;
    createdTime?: string;
    user?: UaaUserApi.UaaUser;
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
