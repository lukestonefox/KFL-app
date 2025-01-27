export type UserType = {
    name: string;
    draftPicks: DraftPicksType;
};

export type DraftPickType = number;

export type DraftPicksType = [DraftPickType];