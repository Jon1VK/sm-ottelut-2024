import createMDX from "@next/mdx";

/*** Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

const withMDX = createMDX({});

/** @type {import("next").NextConfig} */
const config = {};

export default withMDX(config);
