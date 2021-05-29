import mongoose,{Schema} from 'mongoose'

var showSchema = new Schema (
    {
        id: Number,
        name: String,
        Image: String,
        details: {
            genres: Array,
            years: String,
            description: String,
            cast: Array,
            episodes: Array

        }
    }
)

export default mongoose.model('shows', showSchema)