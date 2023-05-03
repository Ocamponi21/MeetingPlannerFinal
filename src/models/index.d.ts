import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

export enum MeetingStatus {
  PENDING = "PENDING",
  ACCEPTED = "ACCEPTED",
  DECLINED = "DECLINED"
}



type EagerParticipant = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Participant, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly fullname: string;
  readonly email: string;
  readonly meetingName?: string | null;
  readonly status?: MeetingStatus | keyof typeof MeetingStatus | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyParticipant = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Participant, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly fullname: string;
  readonly email: string;
  readonly meetingName?: string | null;
  readonly status?: MeetingStatus | keyof typeof MeetingStatus | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Participant = LazyLoading extends LazyLoadingDisabled ? EagerParticipant : LazyParticipant

export declare const Participant: (new (init: ModelInit<Participant>) => Participant) & {
  copyOf(source: Participant, mutator: (draft: MutableModel<Participant>) => MutableModel<Participant> | void): Participant;
}

type EagerMeeting = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Meeting, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly fullName: string;
  readonly location: string;
  readonly date: string;
  readonly Participants?: (Participant | null)[] | null;
  readonly Hosts?: (Host | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMeeting = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Meeting, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly fullName: string;
  readonly location: string;
  readonly date: string;
  readonly Participants: AsyncCollection<Participant>;
  readonly Hosts: AsyncCollection<Host>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Meeting = LazyLoading extends LazyLoadingDisabled ? EagerMeeting : LazyMeeting

export declare const Meeting: (new (init: ModelInit<Meeting>) => Meeting) & {
  copyOf(source: Meeting, mutator: (draft: MutableModel<Meeting>) => MutableModel<Meeting> | void): Meeting;
}

type EagerHost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Host, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly fullName?: string | null;
  readonly email?: string | null;
  readonly meetingName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyHost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Host, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly fullName?: string | null;
  readonly email?: string | null;
  readonly meetingName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Host = LazyLoading extends LazyLoadingDisabled ? EagerHost : LazyHost

export declare const Host: (new (init: ModelInit<Host>) => Host) & {
  copyOf(source: Host, mutator: (draft: MutableModel<Host>) => MutableModel<Host> | void): Host;
}