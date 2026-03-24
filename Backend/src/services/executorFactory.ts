export interface CodeExecutor {
    execute(code: string, testCases: any[]): Promise<string>;
}

export class PythonExecutor implements CodeExecutor {
    async execute(code: string, testCases: any[]): Promise<string> {
        return "Simulated Python Execution: Accepted";
    }
}

export class JavascriptExecutor implements CodeExecutor {
    async execute(code: string, testCases: any[]): Promise<string> {
        return "Simulated JS Execution: Accepted";
    }
}

export class ExecutorFactory {
    static getExecutor(language: string): CodeExecutor {
        switch (language.toLowerCase()) {
            case 'python':
                return new PythonExecutor();
            case 'javascript':
                return new JavascriptExecutor();
            default:
                throw new Error(`Execution for language ${language} is not supported yet.`);
        }
    }
}