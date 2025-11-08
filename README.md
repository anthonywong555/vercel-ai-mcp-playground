# vercel-ai-mcp-playground
Prototyping Vercel AI MCP Implementation

Here is the [code](https://github.com/vercel/ai/tree/main/examples/mcp) that I'm currently using.

## Known issues

When using tools in `generateText` Typescript will throw a type-error. Use `//@ts-ignore` to resolve it now.

When executing `npm run stdio:build`, you will get the following error:

```sh
node_modules/@modelcontextprotocol/sdk/dist/cjs/validation/types.d.ts:1:29 - error TS2307: Cannot find module '@cfworker/json-schema' or its corresponding type declarations.

1 import type { Schema } from '@cfworker/json-schema';
                              ~~~~~~~~~~~~~~~~~~~~~~~


Found 1 error in node_modules/@modelcontextprotocol/sdk/dist/cjs/validation/types.d.ts:1
```

You can safetly ignore this for now. 