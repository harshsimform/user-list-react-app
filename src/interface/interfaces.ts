export interface User {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
  active: boolean;
  owner: boolean;
  role: string;
  plan: string;
  clicks_reviewed: string;
  monthly_click: string;
  progress_percentage: number;
  removable: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface UserState {
  users: User[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  currentPage: number;
  totalPages: number;
}

export interface HoverUserState {
  hoveredUser: User | null;
}
