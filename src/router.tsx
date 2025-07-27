import React from "react";
import { useRoutes } from "react-router-dom";

// Importa automaticamente todos os componentes da pasta pages
const pages = import.meta.glob("./pages/**/*.tsx");

const routes = Object.keys(pages).map((path) => {
    const routePath = path
        .replace("./pages", "")
        .replace(/\.tsx$/, "")
        .replace(/\/index$/, "") || "/";

    return {
        path: routePath.toLowerCase(),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        element: React.lazy(pages[path] as any),
    };
});

export const Router = () => {
    const routesConfig = routes.map((route) => ({
        path: route.path,
        element: (
            <React.Suspense>
                <route.element />
            </React.Suspense>
        ),
    }));

    return useRoutes(routesConfig);
};