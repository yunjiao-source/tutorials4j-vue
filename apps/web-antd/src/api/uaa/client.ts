import type { Recordable } from '@vben/types';

import { requestClient } from '#/api/request';

export namespace UaaClientApi {
  export interface UaaClient {
    [key: string]: any;
    id: string;
    clientId: string;
    clientSecret: string;
    clientName: string;
    reserved?: boolean;
    enabled?: boolean;
    contractScopes?: string[];
    allowRedirectUris?: string[];
    allowGrantTypes?: string[];
    subjectId?: string;
    accessTokenTimeout?: number;
    refreshTokenTimeout?: number;
    clientTokenTimeout?: number;
    maxAccessTokenCount?: number;
    maxRefreshTokenCount?: number;
    maxClientTokenCount?: number;
    isNewRefresh?: boolean;
    isAutoConfirm?: boolean;
    createDate?: string;
    lastModifiedDate?: string;
  }
}

/**
 * 获取应用端分页数据
 */
async function getClientByPage(params: Recordable<any>) {
  return requestClient.get<Array<UaaClientApi.UaaClient>>(
    '/uaa/upms/clients/page',
    { params },
  );
}

/**
 * 创建应用端
 * @param data 应用端数据
 */
async function createClient(data: Omit<UaaClientApi.UaaClient, 'id'>) {
  return requestClient.post<UaaClientApi.UaaClient>('/uaa/upms/clients', data);
}

/**
 * 更新应用端
 *
 * @param id 应用端 ID
 * @param data 应用端数据
 */
async function updateClient(
  id: string,
  data: Omit<UaaClientApi.UaaClient, 'id'>,
) {
  return requestClient.put<UaaClientApi.UaaClient>(
    `/uaa/upms/clients/${id}`,
    data,
  );
}

/**
 * 获取应用端
 * @param id 应用端 ID
 * @returns 应用端数据
 */
async function getClientById(id: string) {
  return requestClient.get<UaaClientApi.UaaClient>(`/uaa/upms/clients/${id}`);
}

/**
 * 删除应用端
 * @param id 应用端 ID
 */
async function deleteClient(id: string) {
  return requestClient.delete(`/uaa/upms/clients/${id}`);
}

export {
  createClient,
  deleteClient,
  getClientById,
  getClientByPage,
  updateClient,
};
