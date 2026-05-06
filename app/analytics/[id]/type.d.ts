export interface AnaliticResponse {
  success: boolean;
  data: Data;
}

export interface Analytic {
  link: Link;
  summary: Summary;
  dailyClicks: DailyClick[];
  topCountries: TopCountries[];
  devices: Devices;
  referrers: Referrer[];
}

export interface DailyClick {
  date: string;
  clicks: number;
}

export interface Devices {
  mobile: number;
  desktop: number;
  tablet: number;
}

export interface Link {
  id: string;
  title: string;
  slug: string;
  shortUrl: string;
  originalUrl: string;
}

export interface Referrer {
  source: string;
  clicks: number;
}

export interface Summary {
  totalClicks: number;
  uniqueVisitors: number;
  conversionRate: number;
  lastClickedAt: Date;
}

export interface TopCountries {
  country: string;
  clicks: number;
}
