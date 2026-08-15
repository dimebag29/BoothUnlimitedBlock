function checkSyncStorageCapacity() {
    return Promise.resolve();
}

/**
 * SyncStorageからデータを取得する関数
 * ※内部ではLocalStorageを使用
 * @param {*} key key
 * @returns data
 */
export function getFromSyncStorage(key) {
    return new Promise((resolve, reject) => {
        chrome.storage.local.get(key, (result) => {
            if (chrome.runtime.lastError) {
                reject(new Error(chrome.runtime.lastError));
            } else {
                resolve(result[key]);
            }
        });
    });
}

/**
 * SyncStorageにデータを保存する関数
 * ※内部ではLocalStorageを使用
 * @param {*} key key
 * @param {*} data data
 */
export async function setToSyncStorage(key, data) {
    await checkSyncStorageCapacity();

    return new Promise((resolve, reject) => {
        chrome.storage.local.set({ [`${key}`]: data }, () => {
            if (chrome.runtime.lastError) {
                reject(new Error(chrome.runtime.lastError));
            } else {
                resolve();
            }
        });
    });
}

export async function mergeToSyncStorage(key, data) {
    await checkSyncStorageCapacity();

    return new Promise((resolve, reject) => {
        chrome.storage.local.get(key, (result) => {
            if (chrome.runtime.lastError) {
                reject(new Error(chrome.runtime.lastError));
            } else {
                const oldData = result[key] || {};
                const mergedData = {
                    ...oldData,
                    ...data
                };

                chrome.storage.local.set({ [`${key}`]: mergedData }, () => {
                    if (chrome.runtime.lastError) {
                        reject(new Error(chrome.runtime.lastError));
                    } else {
                        resolve();
                    }
                });
            }
        });
    });
}

export function removeFromSyncStorage(key) {
    return new Promise((resolve, reject) => {
        chrome.storage.local.remove(key, () => {
            if (chrome.runtime.lastError) {
                reject(new Error(chrome.runtime.lastError));
            } else {
                resolve();
            }
        });
    });
}

export function getFromLocalStorage(key) {
    return new Promise((resolve, reject) => {
        chrome.storage.local.get(key, (result) => {
            if (chrome.runtime.lastError) {
                reject(new Error(chrome.runtime.lastError));
            } else {
                resolve(result[key]);
            }
        });
    });
}

export function setToLocalStorage(key, data) {
    return new Promise((resolve, reject) => {
        chrome.storage.local.set({ [`${key}`]: data }, () => {
            if (chrome.runtime.lastError) {
                reject(new Error(chrome.runtime.lastError));
            } else {
                resolve();
            }
        });
    });
}

export function mergeToLocalStorage(key, data) {
    return new Promise((resolve, reject) => {
        chrome.storage.local.get(key, (result) => {
            if (chrome.runtime.lastError) {
                reject(new Error(chrome.runtime.lastError));
            } else {
                const oldData = result[key] || {};
                const mergedData = {
                    ...oldData,
                    ...data
                };

                chrome.storage.local.set({ [`${key}`]: mergedData }, () => {
                    if (chrome.runtime.lastError) {
                        reject(new Error(chrome.runtime.lastError));
                    } else {
                        resolve();
                    }
                });
            }
        });
    });
}

export function removeFromLocalStorage(key) {
    return new Promise((resolve, reject) => {
        chrome.storage.local.remove(key, () => {
            if (chrome.runtime.lastError) {
                reject(new Error(chrome.runtime.lastError));
            } else {
                resolve();
            }
        });
    });
}