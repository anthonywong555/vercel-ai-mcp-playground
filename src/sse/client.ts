import { openai } from '@ai-sdk/openai';
import { generateText, stepCountIs } from 'ai';
import { experimental_createMCPClient } from '@ai-sdk/mcp';
import 'dotenv/config';

const PORT = process.env.MCP_SSE_PORT || 1234;

async function main() {
  const mcpClient = await experimental_createMCPClient({
    transport: {
      type: 'sse',
      url: `http://localhost:${PORT}/sse`,
      headers: {
        example: 'header',
      },
    },
  });

  const tools = await mcpClient.tools();

  const { text: answer } = await generateText({
    model: openai('gpt-4o-mini'),
    // @ts-ignore
    tools,
    stopWhen: stepCountIs(10),
    onStepFinish: async ({ toolResults }) => {
      console.log(`STEP RESULTS: ${JSON.stringify(toolResults, null, 2)}`);
    },
    system: 'You are a helpful chatbot',
    prompt: 'List all products, then find availability for Product 1.',
  });

  await mcpClient.close();

  console.log(`FINAL ANSWER: ${answer}`);
}

main().catch(console.error);