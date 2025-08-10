import type { MemoryEvent, PrimerResponse } from "./types";

const BASE_URL = "http://localhost:8000/v1";

export async function getMemories(): Promise<MemoryEvent[]> {
  const res = await fetch(`${BASE_URL}/memories`);
  return res.json();
}

export async function prime(query: string, k = 12): Promise<PrimerResponse> {
  const res = await fetch(`${BASE_URL}/prime`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({query, k}),
  });
  return res.json();
}