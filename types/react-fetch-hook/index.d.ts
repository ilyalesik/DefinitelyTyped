// Type definitions for react-fetch-hook 1.3
// Project: https://github.com/ilyalesik/react-fetch-hook#readme
// Definitions by: Ilya Lesik <https://github.com/ilyalesik>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface FetchResult<T> {
    data?: T,
    isLoading: boolean,
    error?: any
}

interface HookOptions extends RequestInit {
    depends?: Array<any>
}

interface HookOptionsWithFormatter<T> extends HookOptions {
    formatter(response: Response): Promise<T>
}

export function useFetch<T>(path: RequestInfo,
                     options?: HookOptions | HookOptionsWithFormatter<T>,
                     specialOptions?: HookOptions): FetchResult<T>;