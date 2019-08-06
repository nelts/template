import { AgentComponent, AgentComponentImplements } from '@nelts/agent';
export default class IndexAgent extends AgentComponent implements AgentComponentImplements {
    beforeCreate(): Promise<void>;
    created(): Promise<void>;
    beforeDestroy(): Promise<void>;
    destroyed(): Promise<void>;
    catchError(e: Error): Promise<void>;
    ready(): Promise<void>;
    health(): Promise<{
        foo: string;
    }>;
    test(data: {
        a: number;
        b: number;
    }): Promise<{
        sum: number;
        multiply: number;
        divide: number;
    }>;
    task(): Promise<void>;
}
