import * as React from "react";
import { useFetch } from "react-fetch-hook";

const Basic = () => {
    const { isLoading, data } = useFetch("https://swapi.co/api/people/1");

    return isLoading ? (
        <div>Loading...</div>
) : (
        <div {...data} />
);
};

const FetchOptions = () => {
    const { isLoading, data } = useFetch("https://swapi.co/api/people/1", {
        method: "post"
    });

    return null;
};

const WithGeneric = () => {
    interface Entity {
        id: number
    }
    const { isLoading, data } = useFetch<Entity>("https://swapi.co/api/people/1");

    return <div>
        {data && data.id}
    </div>;
};

const WithFormatter = () => {
    const { isLoading, data } = useFetch("https://swapi.co/api/people/1", {
        formatter: (response) => response.text()
    });

    return null;
};

const WithDepends = () => {
    const value = "value";
    const { isLoading, data } = useFetch("https://swapi.co/api/people/1", {
        depends: [value]
    });

    return null;
};

const WithDependsNextArg = () => {
    const value = "value";
    const { isLoading, data } = useFetch("https://swapi.co/api/people/1", {
        method: "post"
    }, {
        depends: [value]
    });

    return null;
};

