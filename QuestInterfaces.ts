export enum QuestType {
    MAIN = "main",
    SIDE = "side"
}

export enum HierarchyLevel {
    QUEST = "quest",
    OBJECTIVE = "objective"
}

export interface GenericAdd {
    type: HierarchyLevel
    questId?: string
    newData: Quest|Objective
}

export interface GenericUpdate {
    type: HierarchyLevel
    updateDetail: QuestUpdate|ObjectiveUpdate
}

export interface GenericDeletion {
    type: HierarchyLevel
    id: string
    subId?: string
}

export interface RestBodyObjective {
    text: string
    completed: boolean
}

export interface Objective extends RestBodyObjective {
    id: string
}

export interface RestBodyQuest {
    visible: boolean
    sourceRegion: string
    questType: QuestType
    objectives: Objective[]
    description: string
}

export interface Quest extends RestBodyQuest {
    _id?: string
    id: string
}

export interface RestBodyQuestUpdate {
    visible?: boolean
    sourceRegion?: string
    questType?: QuestType
    description?: string
}

export interface QuestUpdate extends RestBodyQuestUpdate {
    id: string
}

export interface RestBodyObjectiveUpdate {
    text?: string
    completed?: boolean
}

export interface ObjectiveUpdate extends RestBodyObjectiveUpdate{
    questId: string
    objectiveId: string
}

export interface UpdateResult {
    documentExisted: boolean,
    updateSucceeded: boolean
}

