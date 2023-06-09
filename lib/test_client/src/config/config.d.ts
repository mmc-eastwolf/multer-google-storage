import * as mongoose from 'mongoose';
export declare const dbConfig: mongoose.ConnectionOptions;
export declare function connectDb(appStart: () => void): Promise<void>;
