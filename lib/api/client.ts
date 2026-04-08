import type { CryptoApiError } from "@/types/crypto";

const BASE_URL = "https://api.coingecko.com/api/v3";

export class ApiError extends Error {
  status?: number;
  
  constructor(message: string, status?: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const error: CryptoApiError = {
      message: `API Error: ${response.statusText}`,
      status: response.status,
    };
    
    throw new ApiError(error.message, error.status);
  }

  return response.json();
}

export async function apiClient<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const url = `${BASE_URL}${endpoint}`;
  
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
    });

    return handleResponse<T>(response);
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    
    throw new ApiError(
      error instanceof Error ? error.message : "Unknown error occurred"
    );
  }
}

export const API_ENDPOINTS = {
  MARKETS: "/coins/markets",
  MARKET_CHART: (id: string) => `/coins/${id}/market_chart`,
  COIN_DATA: (id: string) => `/coins/${id}`,
} as const;
