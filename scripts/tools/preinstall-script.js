/**
 * Do NOT allow using `npm` as package manager.
 */
const agent = process.env.npm_config_user_agent;
if (agent.indexOf('yarn') === -1) {
  console.error(`You must use Yarn to install dependencies: (found: ${agent})`);
  console.error('  $ yarn install');
  process.exit(1);
}
