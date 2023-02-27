import { ensureStartingSlash } from 'vitepress/dist/client/theme-default/support/utils.js';
/**
 * Get the `Sidebar` from sidebar option. This method will ensure to get correct
 * sidebar config from `MultiSideBarConfig` with various path combinations such
 * as matching `guide/` and `/guide/`. If no matching config was found, it will
 * return empty array.
 */
export function getSidebar(sidebar, path) {
    if (Array.isArray(sidebar)) {
        return sidebar;
    }
    if (sidebar == null) {
        return [];
    }
    path = ensureStartingSlash(path);

    const dirs = Object.keys(sidebar).reduce((dirs, sidebarPath) => {
        if(path.startsWith(ensureStartingSlash(sidebarPath))) {
            dirs.push(sidebarPath)
        }

        return dirs;
    }, []);

    if (!dirs.length) {
        return [];
    }

    return dirs.reduce((sidebarItems, dir) => {
        const sidebarDir = Array.isArray(sidebar[dir]) ? sidebar[dir] : [sidebar[dir]];
        return [...sidebarItems, ...sidebarDir];
    }, []);
}
export function getFlatSideBarLinks(sidebar) {
    const links = [];
    function recursivelyExtractLinks(items) {
        for (const item of items) {
            if (item.link) {
                links.push({ ...item, link: item.link });
            }
            if ('items' in item) {
                recursivelyExtractLinks(item.items);
            }
        }
    }
    for (const group of sidebar) {
        recursivelyExtractLinks(group.items);
    }
    return links;
}
