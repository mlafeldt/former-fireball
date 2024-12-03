/// <reference path="../.astro/types.d.ts" />
/// <reference types="@clerk/astro/env" />

interface Env {}

type Runtime = import("@astrojs/cloudflare").Runtime<Env>;

declare namespace App {
  interface Locals extends Runtime {}
}
