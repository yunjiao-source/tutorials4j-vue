import type { Recordable } from '@vben/types';

import { requestClient } from '#/api/request';

export namespace SystemConfigApi {
  export interface SystemConfig {
    [key: string]: any;
    id: string;
    name: string;
    code: string;
    value: string;
    category?: string;
    description?: string;
    reserved?: boolean;
    enabled?: boolean;
    createdTime?: string;
    lastModifiedDate?: string;
  }
}

/**
 * 获取配置分页数据
 */
async function getConfigByPage(params: Recordable<any>) {
  return requestClient.get<Array<SystemConfigApi.SystemConfig>>(
    '/system/basic/config/page',
    { params },
  );
}

/**
 * 创建配置
 * @param data 配置数据
 */
async function createConfig(data: Omit<SystemConfigApi.SystemConfig, 'id'>) {
  return requestClient.post<SystemConfigApi.SystemConfig>(
    '/system/basic/config',
    data,
  );
}

/**
 * 更新配置
 *
 * @param id 配置 ID
 * @param data 配置数据
 */
async function updateConfig(
  id: string,
  data: Omit<SystemConfigApi.SystemConfig, 'id'>,
) {
  return requestClient.put<SystemConfigApi.SystemConfig>(
    `/system/basic/config/${id}`,
    data,
  );
}

/**
 * 获取配置
 * @param id 配置 ID
 * @returns 配置数据
 */
async function getConfigById(id: string) {
  return requestClient.get<SystemConfigApi.SystemConfig>(
    `/system/basic/config/${id}`,
  );
}

/**
 * 删除配置
 * @param id 配置 ID
 */
async function deleteConfig(id: string) {
  return requestClient.delete(`/system/basic/config/${id}`);
}

/**
 * 获取配置
 * @param code 配置 code
 * @returns 配置数据
 */
async function getConfigByCode(code: string) {
  return requestClient.get<SystemConfigApi.SystemConfig>(
    `/system/basic/config/by-code/${code}`,
  );
}

/**
 * 获取配置
 * @param code 配置 code
 * @returns 配置数据
 */
async function getConfigByCategroy(category: string) {
  return requestClient.get<SystemConfigApi.SystemConfig>(
    `/system/basic/config/by-category/${category}`,
  );
}

export {
  createConfig,
  deleteConfig,
  getConfigByCategroy,
  getConfigByCode,
  getConfigById,
  getConfigByPage,
  updateConfig,
};
