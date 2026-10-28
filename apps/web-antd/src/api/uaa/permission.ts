import type { Recordable } from '@vben/types';

import type { UaaRoleApi } from '#/api/uaa/role';

import { requestClient } from '#/api/request';

export namespace UaaPermissionApi {
  export interface UaaPermission {
    [key: string]: any;
    id: string;
    code: string;
    name: string;
    description?: string;
    reserved?: boolean;
    enabled?: boolean;
    createDate?: string;
    lastModifiedDate?: string;
  }
}

/**
 * 获取权限点分页数据
 */
async function getPermissionByPage(params: Recordable<any>) {
  return requestClient.get<Array<UaaPermissionApi.UaaPermission>>(
    '/uaa/upms/permissions/page',
    { params },
  );
}

/**
 * 创建权限点
 * @param data 权限点数据
 */
async function createPermission(
  data: Omit<UaaPermissionApi.UaaPermission, 'id'>,
) {
  return requestClient.post<UaaPermissionApi.UaaPermission>(
    '/uaa/upms/permissions',
    data,
  );
}

/**
 * 更新权限点
 *
 * @param id 权限点 ID
 * @param data 权限点数据
 */
async function updatePermission(
  id: string,
  data: Omit<UaaPermissionApi.UaaPermission, 'id'>,
) {
  return requestClient.put<UaaPermissionApi.UaaPermission>(
    `/uaa/upms/permissions/${id}`,
    data,
  );
}

/**
 * 获取权限点
 * @param id 权限点 ID
 * @returns 权限点数据
 */
async function getPermissionById(id: string) {
  return requestClient.get<UaaPermissionApi.UaaPermission>(
    `/uaa/upms/permissions/${id}`,
  );
}

/**
 * 删除权限点
 * @param id 权限点 ID
 */
async function deletePermission(id: string) {
  return requestClient.delete(`/uaa/upms/permissions/${id}`);
}

/**
 * 获取角色
 * @param id 权限点 ID
 * @returns 角色数据
 */
async function getPermissionRolesById(id: string) {
  return requestClient.get<Array<UaaRoleApi.UaaRole>>(
    `/uaa/upms/permissions/${id}/roles`,
  );
}

export {
  createPermission,
  deletePermission,
  getPermissionById,
  getPermissionByPage,
  getPermissionRolesById,
  updatePermission,
};
