export enum SprintRetrospectiveTemplate {
    START_STOP_CONTINUE = 1,
    GLAD_SAD_MAD = 2,
    SAILBOAT = 3,
    THE_4_LS = 4,
    QUICK_RETROSPECTIVE = 5
}

export namespace SprintRetrospectiveTemplate {
    export function getURI(id: number): string {
        let searchValue = /\_/gi;
        return SprintRetrospectiveTemplate[id].replace(searchValue,'-').toLowerCase();
    }
}