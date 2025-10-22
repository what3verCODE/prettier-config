import {PLUGIN_MAPPINGS} from './plugins';

import type {OptionsPlugins} from './plugins';
import type {Options, Config} from 'prettier';

export interface OptionsPrettier {
    plugins?: OptionsPlugins | 'all';
    overrides?: Options;
}

const PRETTIER_OPTIONS: Options = {
    useTabs: false,
    singleQuote: true,
    trailingComma: 'es5',
    arrowParens: 'avoid',
    semi: true,
    printWidth: 120,
    tabWidth: 4,
    bracketSpacing: false,
};

export function defineConfig({plugins: pluginOpts = {}, overrides = {}}: OptionsPrettier): Config {
    if (pluginOpts === 'all') {
        // eslint-disable-next-line no-param-reassign -- non-library or app, just a config
        pluginOpts = {
            xml: true,
            shell: true,
            toml: true,
            nginx: true,
            properties: true,
            sql: true,
            solidity: true,
        };
    }

    const plugins: string[] = Object.entries(PLUGIN_MAPPINGS)
        .filter(([key]) => pluginOpts[key as keyof OptionsPlugins])
        .map(([_key, value]) => value);

    return {
        ...PRETTIER_OPTIONS,
        ...overrides,
        plugins,
    };
}
