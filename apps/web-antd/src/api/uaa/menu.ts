import type { Recordable } from '@vben/types';

import type { UaaRoleApi } from '#/api/uaa/role';

import { requestClient } from '#/api/request';

export namespace UaaMenuApi {
  /** 徽标颜色集合 */
  export const BadgeVariants = [
    'default',
    'destructive',
    'primary',
    'success',
    'warning',
  ] as const;
  /** 徽标类型集合 */
  export const BadgeTypes = ['dot', 'normal'] as const;
  /** 菜单类型集合 */
  export const MenuTypes = [
    'catalog',
    'menu',
    'embedded',
    'link',
    'button',
  ] as const;
  /** 菜单元数据 */
  export interface UaaMenuMeta {
    /** 激活时显示的图标 */
    activeIcon?: string;
    /** 作为路由时，需要激活的菜单的Path */
    activePath?: string;
    /** 固定在标签栏 */
    affixTab?: boolean;
    /** 在标签栏固定的顺序 */
    affixTabOrder?: number;
    /** 徽标内容(当徽标类型为normal时有效) */
    badge?: string;
    /** 徽标类型 */
    badgeType?: (typeof BadgeTypes)[number];
    /** 徽标颜色 */
    badgeVariants?: (typeof BadgeVariants)[number];
    /** 在菜单中隐藏下级 */
    hideChildrenInMenu?: boolean;
    /** 在面包屑中隐藏 */
    hideInBreadcrumb?: boolean;
    /** 在菜单中隐藏 */
    hideInMenu?: boolean;
    /** 在标签栏中隐藏 */
    hideInTab?: boolean;
    /** 菜单图标 */
    icon?: string;
    /** 内嵌Iframe的URL */
    iframeSrc?: string;
    /** 是否缓存页面 */
    keepAlive?: boolean;
    /** 外链页面的URL */
    link?: string;
    /** 同一个路由最大打开的标签数 */
    maxNumOfOpenTab?: number;
    /** 无需基础布局 */
    noBasicLayout?: boolean;
    /** 是否在新窗口打开 */
    openInNewWindow?: boolean;
    /** 菜单排序 */
    order?: number;
    /** 额外的路由参数 */
    query?: Recordable<any>;
    /** 菜单标题 */
    title?: string;
  }

  /** 菜单 */
  export interface UaaMenu extends UaaMenuMeta {
    [key: string]: any;
    id: string;
    parentId?: string;
    pid?: string;
    path: string;
    name: string;
    component?: string;
    redirect?: string;
    type: (typeof MenuTypes)[number];
    createDate?: string;
    lastModifiedDate?: string;
    meta?: UaaMenuMeta;
  }

  /** 菜单树 */
  export interface UaaMenuTree {
    [key: string]: any;
    id: string;
    parentId?: string;
    pid?: string;
    path: string;
    name: string;
    component?: string;
    redirect?: string;
    type: (typeof MenuTypes)[number];
    createDate?: string;
    lastModifiedDate?: string;
    meta?: UaaMenuMeta;
  }
}

/**
 * 获取菜单分页数据
 */
async function getMenuPage(params: Recordable<any>) {
  return requestClient.get<Array<UaaMenuApi.UaaMenu>>('/uaa/upms/menus/page', {
    params,
  });
}

/**
 * 创建菜单
 * @param data 菜单数据
 */
async function createMenu(data: Omit<UaaMenuApi.UaaMenu, 'id'>) {
  return requestClient.post<UaaMenuApi.UaaMenu>('/uaa/upms/menus', data);
}

/**
 * 更新菜单
 *
 * @param id 菜单 ID
 * @param data 菜单数据
 */
async function updateMenu(id: string, data: Omit<UaaMenuApi.UaaMenu, 'id'>) {
  return requestClient.put<UaaMenuApi.UaaMenu>(`/uaa/upms/menus/${id}`, data);
}

/**
 * 获取菜单
 * @param id 菜单 ID
 * @returns 菜单数据
 */
async function getMenuById(id: string) {
  return requestClient.get<UaaMenuApi.UaaMenu>(`/uaa/upms/menus/${id}`);
}

/**
 * 删除菜单
 * @param id 菜单 ID
 */
async function deleteMenu(id: string) {
  return requestClient.delete(`/uaa/upms/menus/${id}`);
}

/**
 * 获取角色
 * @param id 菜单 ID
 * @returns 角色数据
 */
async function getMenuRolesById(id: string) {
  return requestClient.get<Array<UaaRoleApi.UaaRole>>(
    `/uaa/upms/menus/${id}/roles`,
  );
}

/**
 * 获取子菜单
 * @returns 菜单数据
 */
async function getMenuChildrenById(id: string) {
  return requestClient.get<Array<UaaMenuApi.UaaMenu>>(
    `/uaa/upms/menus/${id}/children`,
  );
}

/**
 * 获取顶级菜单
 * @returns 菜单数据
 */
async function getMenuRoot() {
  return requestClient.get<Array<UaaMenuApi.UaaMenu>>(`/uaa/upms/menus/root`);
}

/**
 * 获取所有菜单树
 * @param id 菜单 ID
 * @returns 菜单树数据
 */
async function getMenuAll() {
  return requestClient.get<Array<UaaMenuApi.UaaMenuTree>>(
    `/uaa/upms/menus/all`,
  );
}

/**
 * 获取所有菜单（树）路由
 * @param id 菜单 ID
 * @returns 菜单（树）路由数据
 */
async function getMenuRouterById() {
  return requestClient.get<Array<UaaMenuApi.UaaMenuTree>>(
    `/uaa/upms/menus/router`,
  );
}

export {
  createMenu,
  deleteMenu,
  getMenuAll,
  getMenuById,
  getMenuChildrenById,
  getMenuPage,
  getMenuRolesById,
  getMenuRoot,
  getMenuRouterById,
  updateMenu,
};
