import qs from 'query-string'

export function buildQuery(params: BuildQueryParams) {
    const { type, query, category, page = 1, perPage = 20 } = params

    const conditions = [`*[_type=="${type}"`]

    if (query) conditions.push(`title match "*${query}*"`)

    if (category && category !== 'all') {
        conditions.push(`category == "${category}"`)
    }

    // Calculate pagination limits
    const offset = (page - 1) * perPage
    const limit = perPage

    return conditions.length > 1
        ? `${conditions[0]} && (${conditions
              .slice(1)
              .join(' && ')})][${offset}...${limit}]`
        : `${conditions[0]}][${offset}...${limit}]`
}

interface UrlQueryParams {
    params: string
    key?: string
    value?: string
    keysToRemove?: string[]
}

// url 쿼리 스트링을 생성하거나 수정하는 역할
export const formUrlQuery = ({
    params,
    key,
    keysToRemove,
    value,
}: UrlQueryParams) => {
    let currentUrl = qs.parse(params) // category=frontend 의 형식을, key: value 형태로 변환

    if (keysToRemove && keysToRemove.length > 0) {
        currentUrl = Object.keys(currentUrl)
            .filter((k) => !keysToRemove.includes(k))
            .reduce((acc: Record<string, any>, k) => {
                acc[k] = currentUrl[k]
                return acc
            }, {})
    }

    if (key && value !== undefined) {
        currentUrl[key] = value
    }

    // 객체를 쿼리 스트링으로 변환, 현재 경로와 함께 반환함.
    return qs.stringifyUrl(
        { url: window.location.pathname, query: currentUrl },
        { skipNull: true },
    )
}
