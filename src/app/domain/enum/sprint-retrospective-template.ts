export enum SprintRetrospectiveTemplate {
    START_STOP_CONTINUE = 1,
    GLAD_SAD_MAD = 2,
    SAILBOAT = 3,
    THE_4_LS = 4,
    QUICK_RETROSPECTIVE = 5
}

export namespace SprintRetrospectiveTemplate {
    export function getURI(id: number): string {
        switch (id) {
            case SprintRetrospectiveTemplate.START_STOP_CONTINUE:
                return 'start-stop-continue';
            case SprintRetrospectiveTemplate.GLAD_SAD_MAD:
                return 'glad-sad-mad';
            case SprintRetrospectiveTemplate.SAILBOAT:
                return 'sailboat';
            case SprintRetrospectiveTemplate.THE_4_LS:
                return 'the-4-ls';
            case SprintRetrospectiveTemplate.QUICK_RETROSPECTIVE:
                return 'quick-retrospective';
        }
    }
}