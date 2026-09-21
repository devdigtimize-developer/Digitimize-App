import type { MsgState } from './agentWorkflowData';
import FollowUpPanel from './FollowUpPanel';

/** @deprecated Prefer FollowUpPanel — kept for compatibility */
type Props = {
  sms: { state: MsgState; text: string };
  email: { state: MsgState; text: string };
};

export default function MessagePreview({ sms, email }: Props) {
  return <FollowUpPanel sms={sms} email={email} />;
}
