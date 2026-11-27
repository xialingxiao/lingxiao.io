# Other repositories

The agent may work on `xialingxiao/anymcp.chat` (anymcp, the owner's MCP agent bar project; spec in the note "anymcp spec").
- Clone it to `.tmp/anymcp/` with the deploy key `.tmp/keys/anymcp`:
  `GIT_SSH_COMMAND="ssh -i .tmp/keys/anymcp -o IdentitiesOnly=yes" git clone git@github.com:xialingxiao/anymcp.chat.git .tmp/anymcp`
- Run its own checks, commit, and push to its `main` branch.

The agent may also work on `anymcp-chat/agentbar.md` (public: the agentbar standard, so chat bars on one page don't clash).
- Clone it to `.tmp/agentbar/` with the deploy key `.tmp/keys/agentbar`:
  `GIT_SSH_COMMAND="ssh -i .tmp/keys/agentbar -o IdentitiesOnly=yes" git clone git@github.com:anymcp-chat/agentbar.md.git .tmp/agentbar`
- Commit and push to its `main` branch.
