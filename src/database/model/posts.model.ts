import mongoose, { Document, Schema } from "mongoose";

interface IPost extends Document {
    userId: Schema.Types.ObjectId
    title: string
    body: string
    
}

const PostSchema = new Schema (
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "Users",
            require: true,
        },
        title: {
            type: String,
            required: true,
            trim: true
        },
        post: {
            type: String,
            required: true,
            trim: true
        },
        views: {
            type: Number,
            default: 0,
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)

export default mongoose.model<IPost>('Post', PostSchema)
