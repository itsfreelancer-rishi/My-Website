export interface Project {
    id: number;
    title: string;
    description: string;
    tags: string[];
    liveUrl?: string;
    codeUrl?: string;
    image?: string;
}

export interface Skill {
    name: string;
    category: string;
}

export interface FormData {
    name: string;
    email: string;
    message: string;
}
