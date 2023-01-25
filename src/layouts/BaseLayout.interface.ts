import type { Routes } from "../enums";

export interface BaseLayoutProps {
  current?: Routes;
  title?: string;
  description?: string;
}
