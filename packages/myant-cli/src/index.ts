#!/usr/bin/env node
import { command, parse, version } from 'commander'

// @ts-ignore
import packageJson from '../package.json'

import { clean } from './commands/clean'
import { devMini, devVue, devReact } from './commands/dev'
import { lint } from './commands/lint'
import { test } from './commands/test'
import { build } from './commands/build'
import { release } from './commands/release'
import { buildSite } from './commands/build-site'
import { changelog } from './commands/changelog'

version(`@myant/cli ${packageJson.version}`)

// process.env.MYANT_CLI_VERSION = packageJson.version;

command('clean').description('Clean all dist files').action(clean)

command('dev:mini').description('Run webpack dev server').action(devMini)
command('dev:vue').description('Run webpack dev server').action(devVue)
command('dev:react').description('Run webpack dev server').action(devReact)

command('lint').description('Run eslint and stylelint').action(lint)

command('test')
  .description('Run unit tests through jest')
  .option('--watch', 'Watch files for changes and rerun tests related to changed files')
  .option('--clearCache', 'Clears the configured Jest cache directory and then exits')
  .action(test)

command('build')
  .description('Compile components in production mode')
  .option('--watch', 'Watch file change')
  .action(build)

command('release').description('Compile components and release it').action(release)

command('build-site').description('Compile site in production mode').action(buildSite)

command('changelog').description('Generate changelog').action(changelog)

/*
command('commit-lint')
  .description('Lint commit message')
  .action(commitLint);
*/

parse()
