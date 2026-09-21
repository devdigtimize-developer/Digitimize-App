type MsgState = 'preparing' | 'sending' | 'sent';

type Props = {
  sms: { state: MsgState; text: string };
  email: { state: MsgState; text: string };
};

function StateLabel({ state }: { state: MsgState }) {
  if (state === 'preparing') return <em>Preparing</em>;
  if (state === 'sending') return <em>Sending…</em>;
  return <em className="is-sent">Sent ✓</em>;
}

export default function MessagePreview({ sms, email }: Props) {
  return (
    <div className="ghl-preview ghl-preview-messages" aria-hidden="true">
      <div className="ghl-preview-label">Communications</div>
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
    </div>
  );
}
