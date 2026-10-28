import type { Recordable } from '@vben/types';

import type { UaaMenuApi } from './menu';
import type { UaaOrganizeApi } from './organize';
import type { UaaPermissionApi } from './permission';

import type { CommonApi } from '#/api/core/common';

import { requestClient } from '#/api/request';

export namespace UaaRoleApi {
  export interface UaaRole {
    [key: string]: any;
    id: string;
    code: string;
    name: string;
    description?: string;
    reserved?: (typeof CommonApi.YesNo)[number];
    enabled?: (typeof CommonApi.YesNo)[number];
    createDate?: string;
    lastModifiedDate?: string;
  }
}

/**
 * 获取角色分页数据
 */
async function getRoleByPage(params: Recordable<any>) {
  return requestClient.get<Array<UaaRoleApi.UaaRole>>('/uaa/upms/roles/page', {
    params,
  });
}

/**
 * 创建角色
 * @param data 角色数据
 */
async function createRole(data: Omit<UaaRoleApi.UaaRole, 'id'>) {
  return requestClient.post<UaaRoleApi.UaaRole>('/uaa/upms/roles', data);
}

/**
 * 更新角色
 *
 * @param id 角色 ID
 * @param data 角色数据
 */
async function updateRole(id: string, data: Omit<UaaRoleApi.UaaRole, 'id'>) {
  return requestClient.put<UaaRoleApi.UaaRole>(`/uaa/upms/roles/${id}`, data);
}

/**
 * 获取角色
 * @param id 角色 ID
 * @returns 角色数据
 */
async function getRoleById(id: string) {
  return requestClient.get<UaaRoleApi.UaaRole>(`/uaa/upms/roles/${id}`);
}

/**
 * 删除角色
 * @param id 角色 ID
 */
async function deleteRole(id: string) {
  return requestClient.delete(`/uaa/upms/roles/${id}`);
}

/**
 * 添加权限点
 *
 * @param id 角色 ID
 * @param permissionCodes 权限点代码数据
 */
async function roleAaddPermissions(id: string, permissionCodes: string[]) {
  return requestClient.put<UaaRoleApi.UaaRole>(
    `/uaa/upms/roles/${id}/permissions`,
    permissionCodes,
  );
}

/**
 * 添加菜单
 *
 * @param id 角色 ID
 * @param meunIds 菜单id数据
 */
async function roleAddMenus(id: string, menuIds: string[]) {
  return requestClient.put<UaaRoleApi.UaaRole>(
    `/uaa/upms/roles/${id}/menus`,
    menuIds,
  );
}

/**
 * 添加组织
 *
 * @param id 角色 ID
 * @param organizeIds 住址id数据
 */
async function roleAddOrganizes(id: string, organizeIds: string[]) {
  return requestClient.put<UaaRoleApi.UaaRole>(
    `/uaa/upms/roles/${id}/organizes`,
    organizeIds,
  );
}

/**
 * 获取权限点
 * @param id 角色 ID
 * @returns 权限点数据
 */
async function getRolePermissionsById(id: string) {
  return requestClient.get<Array<UaaPermissionApi.UaaPermission>>(
    `/uaa/upms/roles/${id}/permissions`,
  );
}

/**
 * 获取菜单
 * @param id 角色 ID
 * @returns 菜单数据
 */
async function getRoleMenusById(id: string) {
  return requestClient.get<Array<UaaMenuApi.UaaMenu>>(
    `/uaa/upms/roles/${id}/menus`,
  );
}

/**
 * 获取组织
 * @param id 角色 ID
 * @returns 组织数据
 */
async function getRoleOrganizesById(id: string) {
  return requestClient.get<Array<UaaOrganizeApi.UaaOrganize>>(
    `/uaa/upms/roles/${id}/organizes`,
  );
}

export {
  createRole,
  deleteRole,
  getRoleById,
  getRoleByPage,
  getRoleMenusById,
  getRoleOrganizesById,
  getRolePermissionsById,
  roleAaddPermissions,
  roleAddMenus,
  roleAddOrganizes,
  updateRole,
};
