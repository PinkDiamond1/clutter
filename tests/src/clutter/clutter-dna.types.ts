import { ActionHash, AgentPubKey, Create, HoloHash } from "@holochain/client";

export const PROFILE_FIELDS = {
  DISPLAY_NAME: "Display name",
  BIO: "Bio",
  LOCATION: "Location",
};

export enum LinkTargetName {
  Mention = "Mention",
}

export type LinkTarget = {
  [LinkTargetName.Mention]: AgentPubKey;
};

export type CreateMewInput = {
  mewType: MewType;
  text: string | null;
  links?: LinkTarget[];
};

export interface MewContent {
  text: string;
  links?: LinkTarget[];
}

export enum MewTypeName {
  Original = "original",
  Reply = "reply",
  MewMew = "mewMew",
  Quote = "quote",
}

export type MewType =
  | {
      [MewTypeName.Original]: null;
    }
  | {
      [MewTypeName.Reply]: ActionHash;
    }
  | {
      [MewTypeName.MewMew]: ActionHash;
    }
  | {
      [MewTypeName.Quote]: ActionHash;
    };

export interface Mew {
  mewType: MewType;
  content: MewContent | null;
}

export interface FeedMew {
  mew: Mew;
  action: Create;
  actionHash: ActionHash;
  replies: HoloHash[];
  quotes: HoloHash[];
  licks: AgentPubKey[];
  mewmews: HoloHash[];
}
