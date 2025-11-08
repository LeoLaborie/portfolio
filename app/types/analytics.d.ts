// Simple Analytics types for TypeScript support
declare global {
  interface Window {
    sa_event?: (eventName: string, metadata?: Record<string, unknown>) => void;
  }
}

export {};
