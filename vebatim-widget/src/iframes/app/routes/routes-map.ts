export enum ROUTES {
    IMPORT = 'import',
    CREATE = 'create-event',
    LIST = 'list-events',
    EDIT = 'edit-event',
    EXPORT = 'export-events',
}

export const ROUTES_MAP: { [routeName: string]: string } = {
    [ROUTES.CREATE]: '/create-event',
    [ROUTES.IMPORT]: '/import',
    [ROUTES.LIST]: '/list-events',
    [ROUTES.EDIT]: '/edit-event',
    [ROUTES.EXPORT]: '/export-events',
};