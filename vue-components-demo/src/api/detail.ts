import request from "../utils/request";

export function getTableList(params: any) {
    return request({
        url: 'https://easy-mock.com/mock/5d333afb9de4c138ca5a9d6c/backstage/api/get-list',
        method: 'post',
        data: params
    })
}
