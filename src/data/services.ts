export interface Service {
  id: string;
  slug: string;
  title: string;
  icon: string;
  bestFor: string;
  short: string;
  long: string;
  highlights: string[];
  published?: boolean;
  sortOrder?: number;
}
