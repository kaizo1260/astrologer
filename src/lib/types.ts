// Input types
export interface SubjectInput {
  name: string;
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  city: string;
  nation: string;
  latitude?: number;
  longitude?: number;
  timezone?: string;
}

export interface PlanetData {
  name: string;
  sign: string;
  sign_num?: number;
  position: number;
  abs_pos?: number;
  house?: string | number;
  retrograde?: boolean;
  speed?: number;
  declination?: number;
  quality?: string;
  element?: string;
  emoji?: string;
}

export interface HouseData {
  name: string;
  sign: string;
  position: number;
}

export interface BirthChartResponse {
  status: string;
  data?: {
    svg?: string;
    planets?: PlanetData[];
    houses?: HouseData[];
    aspects?: AspectData[];
  };
  chart?: string;
  chart_data?: {
    planets?: Record<string, PlanetData>;
    houses?: Record<string, HouseData>;
  };
  [key: string]: unknown;
}

export interface AspectData {
  p1_name: string;
  p2_name: string;
  aspect: string;
  orbit?: number;
  aspect_degrees?: number;
  diff?: number;
  aspect_movement?: string;
}

export interface CompatibilityResponse {
  status: string;
  score?: number;
  score_description?: string;
  aspects?: AspectData[];
  score_breakdown?: Array<{
    rule: string;
    description: string;
    points: number;
    details?: string;
  }>;
  chart?: string;
  chart_data?: {
    aspects?: AspectData[];
    [key: string]: unknown;
  };
  [key: string]: unknown;
}

export interface MoonPhaseResponse {
  status: string;
  data?: {
    phase: string;
    illumination: number;
    emoji?: string;
    description?: string;
    moon_age?: number;
    distance_km?: number;
  };
  phase?: string;
  illumination?: number;
  emoji?: string;
  moon_phase_overview?: {
    moon: {
      phase: number;
      phase_name: string;
      major_phase: string;
      illumination: string;
      age_days: number;
      emoji: string;
      zodiac?: {
        sun_sign: string;
        moon_sign: string;
      };
      detailed?: {
        visibility?: unknown;
        upcoming_phases?: Record<string, unknown>;
      };
    };
    [key: string]: unknown;
  };
  [key: string]: unknown;
}

export interface TransitResponse {
  status: string;
  chart?: string;
  chart_data?: {
    transits?: PlanetData[];
    aspects?: AspectData[];
  };
  data?: {
    svg?: string;
    transits?: PlanetData[];
  };
  [key: string]: unknown;
}
