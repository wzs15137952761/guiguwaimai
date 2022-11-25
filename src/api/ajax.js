/**
 * ajax请求函数模块
 * 返回值：Promise对象
 */
import axios from "axios"
export default function ajax (url='',data={},type='GET') {
    // 接收函数的函数叫做高阶函数
    return new Promise((resolve,reject) => {
        axios({
            method:type,
            url,
            data,
        }).then(value => {
            resolve(value.data)
        },err => {
            reject(err.message)  
        })
    })
}

/**
 * if (type === "GET") {
        // 准备url query 参数数据
        let dataStr = '' // 数据拼接字符串
        Object.keys(data).forEach(ket => {
            dataStr += key + '=' + data[key] + "&"
        })
        if (dataStr !=="") {
            dataStr = dataStr.substring(0,dataStr.lastIndexOf('&'))
            url = url + "?" +dataStr
        }
    }
 */