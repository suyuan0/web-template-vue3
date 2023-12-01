/**
 * @description 本地存储
 * @param key   键
 * @param value 值
 */
export function setItem(key: string, value: any) {
    window.sessionStorage.setItem(key, JSON.stringify(value))
}

/**
 * @description 获取本地存储
 * @param key 键
 * @returns 本地存储的值
 */
export function getItem<T>(key: string): T {
    const value = window.sessionStorage.getItem(key) as T
    try {
        return JSON.parse(window.localStorage.getItem(key) as string)
    } catch (error) {
        return value
    }
}

/**
 * @description 删除本地存储
 * @param key 键
 */
export function removeItem(key: string) {
    window.sessionStorage.removeItem(key)
}

/** 清空本地数据 */
export function removeAll() {
    window.sessionStorage.clear()
}

/**
 * @description 判断数据类型
 * @param {*} val 需要判断类型的数据
 * @returns {String}
 */
export function isType(val: any) {
    if (val === null) return 'null'
    if (typeof val !== 'object') return typeof val
    else return Object.prototype.toString.call(val).slice(8, -1).toLocaleLowerCase()
}

/**
 * @description 生成唯一 uuid
 * @returns {String}
 */
export function generateUUID() {
    let uuid = ''
    for (let i = 0; i < 32; i++) {
        let random = (Math.random() * 16) | 0
        if (i === 8 || i === 12 || i === 16 || i === 20) uuid += '-'
        uuid += (i === 12 ? 4 : i === 16 ? (random & 3) | 8 : random).toString(16)
    }
    return uuid
}

/**
 * @description 生成随机数
 * @param {Number} min 最小值
 * @param {Number} max 最大值
 * @returns {Number}
 */
export function randomNum(min: number, max: number): number {
    let num = Math.floor(Math.random() * (min - max) + max)
    return num
}

/**
 * @description 使用递归扁平化菜单，方便添加动态路由
 * @param {Array} menuList 菜单列表
 * @returns {Array}
 */
export function getFlatMenuList(menuList: Menu.MenuOptions[]): Menu.MenuOptions[] {
    let newMenuList: Menu.MenuOptions[] = JSON.parse(JSON.stringify(menuList))
    return newMenuList.flatMap(item => [item, ...(item.children ? getFlatMenuList(item.children) : [])])
}
