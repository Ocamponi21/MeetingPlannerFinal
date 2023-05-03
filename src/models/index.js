// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const MeetingStatus = {
  "PENDING": "PENDING",
  "ACCEPTED": "ACCEPTED",
  "DECLINED": "DECLINED"
};

const { Participant, Meeting, Host } = initSchema(schema);

export {
  Participant,
  Meeting,
  Host,
  MeetingStatus
};