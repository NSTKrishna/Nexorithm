export interface TestCase {
    input: string;
    expectedOutput: string;
}

export interface Problem {
    id: string;
    title: string;
    description: string;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    testCases: TestCase[];
}

export interface Submission {
    id: string;
    userId: string;
    problemId: string;
    language: 'javascript' | 'python' | 'cpp';
    code: string;
    status: 'Pending' | 'Accepted' | 'Wrong Answer' | 'Time Limit Exceeded' | 'Runtime Error';
    executionTimeMs?: number;
}