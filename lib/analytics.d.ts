export {};

declare global {
  interface Window {
    saEvent?: (eventName: string, params?: Record<string, unknown>) => void;
  }
}
