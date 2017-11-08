export interface Task {
  title:       string;
  description: string;
  editor?:     string;
  startTime:   number;

  archived:    boolean;
  done:        boolean;

  endTime?:    number; // later
  
  // Gets set on creation.
  id?:         string;
}

export interface Section {
  name: string;
  id?: string;
}

export interface User {  
  name: string;
  id?: string;
}

export interface UserConfiguration {
  fontSize: string;
}

