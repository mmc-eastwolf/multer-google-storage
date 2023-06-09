import * as mongoose from 'mongoose';
export interface Profile extends mongoose.Document {
    title: string;
    description: string;
    fileName: string;
}
export declare const ProfileRecord: any;
