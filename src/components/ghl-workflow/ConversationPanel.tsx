import type { ChatMessage } from './agentWorkflowData';

type Props = {
  messages: ChatMessage[];
  typing?: boolean;
};

export default function ConversationPanel({ messages, typing }: Props) {
  return (
    <div className="ghl-preview ghl-preview-conversation" aria-hidden="true">
      <div className="ghl-preview-label">Conversation · demo</div>
      <div className="ghl-conversation-thread">
        {messages.map((msg, i) => (
          <div key={`${msg.role}-${i}-${msg.text.slice(0, 12)}`} className={`ghl-chat-bubble is-${msg.role}`}>
            <span>{msg.role === 'ai' ? 'AI Agent' : 'Customer'}</span>
            <p>{msg.text}</p>
          </div>
        ))}
        {typing ? (
          <div className="ghl-chat-bubble is-ai is-typing">
            <span>AI Agent</span>
            <p className="ghl-typing-dots" aria-label="Typing">
              <i />
              <i />
              <i />
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
