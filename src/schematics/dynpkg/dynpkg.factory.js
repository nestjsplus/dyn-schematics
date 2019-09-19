"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular-devkit/core");
const schematics_1 = require("@angular-devkit/schematics");
const defaults_1 = require("../defaults");
const string_utils_1 = require("../../utils/string-utils");
function main(options) {
    options = transform(options);
    return schematics_1.mergeWith(generate(options));
}
exports.main = main;
function transform(options) {
    const target = Object.assign({}, options);
    target.author = !!target.author ? target.author : defaults_1.DEFAULT_AUTHOR;
    target.description = !!target.description
        ? target.description
        : defaults_1.DEFAULT_DESCRIPTION;
    target.language = !!target.language ? target.language : defaults_1.DEFAULT_LANGUAGE;
    target.name = core_1.strings.dasherize(target.name);
    target.version = !!target.version ? target.version : defaults_1.DEFAULT_VERSION;
    target.packageManager = !!target.packageManager
        ? target.packageManager
        : 'npm';
    target.dependencies = !!target.dependencies ? target.dependencies : '';
    target.devDependencies = !!target.devDependencies
        ? target.devDependencies
        : '';
    return target;
}
function generate(options) {
    console.log('options.name: ', options.name);
    return schematics_1.apply(schematics_1.url(core_1.join('./files', options.language)), [
        schematics_1.filter(path => {
            if (!options.client) {
                return (!path.startsWith(`/src/__name__-client`) && !path.endsWith('main.ts'));
            }
            return true;
        }),
        schematics_1.template(Object.assign({}, core_1.strings, options, { lowerCase: string_utils_1.lowerCase,
            upperCase: string_utils_1.upperCase,
            dashToUnderscore: string_utils_1.dashToUnderscore })),
        schematics_1.move(options.name),
    ]);
}
