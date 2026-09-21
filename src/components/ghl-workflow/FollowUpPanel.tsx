import type { MsgState } from './agentWorkflowData';

type Channel = { state: MsgState; text: string };

type Props = {
  sms: Channel;
  email: Channel;
  reminder?: Channel;
};

function StateLabel({ state }: { state: MsgState }) {
  if (state === 'preparing') return <em>Preparing</em>;
  if (state === 'sending') return <em>Sending…</em>;
  if (state === 'scheduled') return <em className="is-sent">Scheduled ✓</em>;
  return <em className="is-sent">Sent ✓</em>;
}

export default function FollowUpPanel({ sms, email, reminder }: Props) {
  return (
    <div className="ghl-preview ghl-preview-messages" aria-hidden="true">
      <div className="ghl-preview-label">Follow-up communications</div>
      <div className={`ghl-msg is-sms is-${sms.state}`}>
        <div className="ghl-msg-head">
          <span>SMS</span>
          <StateLabel state={sms.state} />
        </div>
        <p>{sms.text}</p>
      </div>
      <div className={`ghl-msg is-email is-${email.state}`}>
        <div className="ghl-msg-head">
          <span>Email</span>
          <StateLabel state={email.state} />
        </div>
        <p>{email.text}</p>
      </div>
      {reminder ? (
        <div className={`ghl-msg is-reminder is-${reminder.state}`}>
          <div className="ghl-msg-head">
            <span>Reminder</span>
            <StateLabel state={reminder.state} />
          </div>
          <p>{reminder.text}</p>
        </div>
      ) : null}
    </div>
  );
}
