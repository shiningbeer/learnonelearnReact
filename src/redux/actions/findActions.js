import * as TYPES from './types'
import { accessServerUrl } from './serverUtils'

const URL_GET_USER_MARKETS = "http://www.baidu.com"


export function fetchUserMarkets(token, callback) {
    return (dispatch) => {
        dispatch({
            'type': TYPES.FETCHING_USER_MARKETS,
        })
        var params = { 'token': token }
        accessServerUrl(URL_GET_USER_MARKETS, params, (success, ret) => {
            if (success) {
                dispatch({
                    'type': TYPES.RECEIVED_USER_MARKETS,
                    'data': ret
                })
            }
            else {
                dispatch({
                    'type': TYPES.ERROR_FETCHING_USER_MARKETS,
                    'data': ret
                })
            }
            if (callback != null) {
                callback(ret)
            }

        })
    }
}