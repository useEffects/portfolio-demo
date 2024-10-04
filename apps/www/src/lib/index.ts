import directoryTree from "directory-tree";
import { join } from "path";
import { cwd } from "process";

export const tree = directoryTree(join(cwd(), "src/app/blogs"), {
    extensions: /\page.mdx/
})