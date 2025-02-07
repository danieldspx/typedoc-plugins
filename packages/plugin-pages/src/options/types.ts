import { LiteralUnion } from 'type-fest';
import { LogLevel } from 'typedoc';

/**
 * Defines a page or menu entry.
 * The item is considered as a menu-only if it does not have a {@link source}.
 */
export interface IPageNode {
	/**
	 * List of children nodes. Both pages & menu entries can have children.
	 */
	children?: IPageNode[];
	/**
	 * The default directory in which children are sourced/outputted.\
	 * Overriden by {@link childrenSourceDir} or {@link childrenOutputDir}.
	 *
	 * @see {@page pages-tree.md} for details.
	 */
	childrenDir?: string;
	/**
	 * The directory in which children pages are sourced.\
	 * If not set, {@link childrenDir} is used.\
	 * If {@link childrenDir} is not set too, the behavior differs if the node is a page or not.
	 *
	 * @see {@page pages-tree.md} for details.
	 */
	childrenSourceDir?: string;
	/**
	 * The directory in which children pages are outputted.\
	 * If not set, {@link childrenDir} is used.\
	 * If {@link childrenDir} is not set too, the behavior differs if the node is a page or not.
	 *
	 * @see {@page pages-tree.md} for details.
	 */
	childrenOutputDir?: string;
	/**
	 * The output file (for pages only).
	 */
	output?: string;
	/**
	 * The source file. The node is a page **only** if this property is set.
	 */
	source?: string;
	/**
	 * The title of the page/menu.
	 *
	 * For monorepos, you can set it to the name of the module/package/workspace to attach children to. Pages are prepended to the module index.
	 *
	 * If set to `'VIRTUAL'`, the node itself is omitted and children are flattened while cumulating the node's source & output.
	 *
	 * @see {@page pages-tree.md} for details.
	 */
	title: LiteralUnion<'VIRTUAL', string>;
}

export enum EInvalidPageLinkHandling{
	FAIL = 'fail',
	LOG_ERROR = 'logError',
	LOG_WARN = 'logWarn',
	NONE = 'none'
}
/**
 * Plugin options
 */
export interface IPluginOptions {
	/**
	 * The pages definition.
	 *
	 * @see {@page pages-tree.md} for details.
	 */
	pages: IPageNode[];

	/**
	 * Whether or not @page and @pagelink tags should be parsed.
	 *
	 * @default true
	 */
	enablePageLinks: boolean;

	/**
	 * Whether or not the pages should be added to the search index.
	 *
	 * @default true
	 */
	enableSearch: boolean;

	/**
	 * The score multiplier for pages in search.
	 *
	 * @default 10
	 */
	searchBoost: number;

	/**
	 * The kind of error to throw in case of an invalid page link.
	 *
	 * @default {@link EInvalidPageLinkHandling.LOG_ERROR}
	 */
	invalidPageLinkHandling: EInvalidPageLinkHandling;

	/**
	 * Output directory where your pages will be rendered.
	 *
	 * @default 'pages'
	 */
	output: string;

	/**
	 * Root directory where all page source files live.
	 *
	 * @default 'pages'
	 */
	source: string;

	/**
	 * The plugin log level.
	 *
	 * @default application.logger.level
	 */
	logLevel: LogLevel;
}

