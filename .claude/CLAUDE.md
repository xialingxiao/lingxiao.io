# Other repositories

The agent may work on `xialingxiao/anymcp.chat` (anymcp, the owner's MCP agent bar project; spec in the note "anymcp spec").
- Clone it to `.tmp/anymcp/` with the deploy key `.tmp/keys/anymcp`:
  `GIT_SSH_COMMAND="ssh -i .tmp/keys/anymcp -o IdentitiesOnly=yes" git clone git@github.com:xialingxiao/anymcp.chat.git .tmp/anymcp`
- Run its own checks, commit, and push to its `main` branch.
