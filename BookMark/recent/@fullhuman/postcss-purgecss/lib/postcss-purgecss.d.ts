/**
 * PostCSS Plugin for PurgeCSS
 *
 * Most bundlers and frameworks to build websites are using PostCSS.
 * The easiest way to configure PurgeCSS is with its PostCSS plugin.
 *
 * @packageDocumentation
 */

import * as postcss from 'postcss';

/**
 * @public
 */
declare type ComplexSafelist = {
    standard?: StringRegExpArray;
    /**
     * You can safelist selectors and their children based on a regular
     * expression with `safelist.deep`
     *
     * @example
     *
     * ```ts
     * const purgecss = await new PurgeCSS().purge({
     *   content: [],
     *   css: [],
     *   safelist: {
     *     deep: [/red$/]
     *   }
     * })
     * ```
     *
     * In this example, selectors such as `.bg-red .child-of-bg` will be left
     * in the final CSS, even if `child-of-bg` is not found.
     *
     */
    deep?: RegExp[];
    greedy?: RegExp[];
    variables?: StringRegExpArray;
    keyframes?: StringRegExpArray;
};

/**
 * @public
 */
declare type ExtractorFunction<T = string> = (content: T) => ExtractorResult;

/**
 * @public
 */
declare type ExtractorResult = ExtractorResultDetailed | string[];

/**
 * @public
 */
declare interface ExtractorResultDetailed {
    attributes: {
        names: string[];
        values: string[];
    };
    classes: string[];
    ids: string[];
    tags: string[];
    undetermined: string[];
}

/**
 * @public
 */
declare interface Extractors {
    extensions: string[];
    extractor: ExtractorFunction;
}

/**
 * PostCSS Plugin for PurgeCSS
 *
 * @param opts - PurgeCSS Options
 * @returns the postCSS plugin
 *
 * @public
 */
declare const purgeCSSPlugin: postcss.PluginCreator<UserDefinedOptions>;
export default purgeCSSPlugin;

/**
 * @public
 */
declare interface RawContent<T = string> {
    extension: string;
    raw: T;
}

/**
 * @public
 */
declare interface RawCSS {
    raw: string;
    name?: string;
}

/**
 * @public
 */
declare type StringRegExpArray = Array<RegExp | string>;

/**
 * {@inheritDoc purgecss#UserDefinedOptions}
 *
 * @public
 */
export declare interface UserDefinedOptions extends Omit<UserDefinedOptions_2, "content" | "css"> {
    content?: UserDefinedOptions_2["content"];
    contentFunction?: (sourceFile: string) => Array<string | RawContent>;
}

/**
 * Options used by PurgeCSS to remove unused CSS
 *
 * @public
 */
declare interface UserDefinedOptions_2 {
    /** {@inheritDoc Options.content} */
    content: Array<string | RawContent>;
    /** {@inheritDoc Options.css} */
    css: Array<string | RawCSS>;
    /** {@inheritDoc Options.defaultExtractor} */
    defaultExtractor?: ExtractorFunction;
    /** {@inheritDoc Options.extractors} */
    extractors?: Array<Extractors>;
    /** {@inheritDoc Options.fontFace} */
    fontFace?: boolean;
    /** {@inheritDoc Options.keyframes} */
    keyframes?: boolean;
    /** {@inheritDoc Options.output} */
    output?: string;
    /** {@inheritDoc Options.rejected} */
    rejected?: boolean;
    /** {@inheritDoc Options.rejectedCss} */
    rejectedCss?: boolean;
    /** {@inheritDoc Options.sourceMap } */
    sourceMap?: boolean | (postcss.SourceMapOptions & { to?: string });
    /** {@inheritDoc Options.stdin} */
    stdin?: boolean;
    /** {@inheritDoc Options.stdout} */
    stdout?: boolean;
    /** {@inheritDoc Options.variables} */
    variables?: boolean;
    /** {@inheritDoc Options.safelist} */
    safelist?: UserDefinedSafelist;
    /** {@inheritDoc Options.blocklist} */
    blocklist?: StringRegExpArray;
    /** {@inheritDoc Options.skippedContentGlobs} */
    skippedContentGlobs?: Array<string>;
    /** {@inheritDoc Options.dynamicAttributes} */
    dynamicAttributes?: string[];
}

/**
 * @public
 */
declare type UserDefinedSafelist = StringRegExpArray | ComplexSafelist;

export { }
